// packs-logic.js

document.addEventListener("DOMContentLoaded", () => {
  // 1. Obtener el ID del pack desde la URL (?id=pack-nombre)
  const params = new URLSearchParams(window.location.search);
  const packId = params.get("id");

  console.log("Intentando cargar pack ID:", packId);

  if (packId && typeof packs !== "undefined") {
    // 2. Buscar el pack dentro del array 'packs' definido en packsPersonalizados.js
    const pack = packs.find((p) => p.id === packId);

    if (pack) {
      renderizarPlantillaPack(pack);
    } else {
      console.error("Pack no encontrado en la base de datos:", packId);
    }
  } else {
    console.error(
      "No hay ID en la URL o el archivo packsPersonalizados.js no se cargó correctamente",
    );
  }
});

function renderizarPlantillaPack(pack) {
  // --- 1. TEXTOS PRINCIPALES Y HERO ---
  const tituloElem = document.getElementById("pack-titulo");
  const introElem = document.getElementById("pack-intro");
  const heroElem = document.getElementById("hero-section-experiencias");

  if (tituloElem) tituloElem.innerText = pack.name;
  if (introElem) introElem.innerText = pack.description;

  // Intentamos cargar la imagen de fondo (prioriza heroImage si existe)
  const imagenFondo = pack.heroImage || pack.image;
  if (heroElem && imagenFondo) {
    heroElem.style.backgroundImage = `url('${imagenFondo}')`;
  }

  // --- 2. RENDERIZAR GRIDS SUPERIORES (Mini Tarjetas) ---
  // Reutilizamos la clase .tarjeta y .imagen-tarjeta de tu CSS global
  const renderMiniCard = (item) => `
        <div class="tarjeta">
            <img src="${item.image}" class="imagen-tarjeta" alt="${item.name}">
            <div class="texto-tarjeta">
                <h5>${item.name}</h5>
                <p>${item.descripcionCorta || ""}</p>
                <a href="#${item.id_interno}" class="boton-secundario" style="display:block; margin-top:10px; text-align:center;">Ver detalles</a>
            </div>
        </div>
    `;

  const gridAlojamientos = document.getElementById("grid-alojamientos-small");
  if (gridAlojamientos) {
    gridAlojamientos.innerHTML = (pack.listaAlojamientos || [])
      .map((item) => renderMiniCard(item))
      .join("");
  }

  const gridExperiencias = document.getElementById("grid-experiencias-small");
  if (gridExperiencias) {
    gridExperiencias.innerHTML = (pack.listaExperiencias || [])
      .map((item) => renderMiniCard(item))
      .join("");
  }

// --- 3. DETALLES AMPLIADOS (Envoltorio para fondo 100%) ---
const detallesContenedor = document.getElementById("contenedor-detalles-pack");

if (detallesContenedor) {
  const todosLosItems = [
    ...(pack.listaAlojamientos || []).map(item => ({ ...item, tipo: 'alojamiento' })),
    ...(pack.listaExperiencias || []).map(item => ({ ...item, tipo: 'experiencia' }))
  ];

  detallesContenedor.innerHTML = todosLosItems.map((item, index) => {
    // Aplicamos color solo en índices pares (0, 2, 4...)
    let claseFondo = "";
    if (index % 2 === 0) {
      claseFondo = item.tipo === "alojamiento" ? "wrapper-fondo-alojamiento" : "wrapper-fondo-experiencia";
    }

    //  AQUÍ INCORPORAMOS LA LÓGICA DINÁMICA
    const carpetaDestino = item.tipo === "alojamiento" ? "alojamientos" : "experiencias";
    const archivoPlantilla = item.tipo === "alojamiento" ? "plantilla-alojamiento.html" : "plantilla-experiencias.html";

    return `
      <div class="${claseFondo} full-width-row"> 
        <article id="${item.id_interno}"> 
            <div id="detalles">
                <div class="imagen-detalles">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="elementos-detalles">
                    <h3>${item.name}</h3>
                    <p class="introduccion">${item.descripcionCorta || ""}</p>
                    <ul>
                        ${(item.detallesClave || []).map(d => `<li>${d}</li>`).join("")}
                    </ul>
                    <div class="ambos-botones">
                        <a href="${item.urlReservaDirecta || "#"}" class="boton-primario">Reservar ahora</a>
                        
                        <a href="../${carpetaDestino}/${archivoPlantilla}?id=${item.id_real}" class="boton-secundario">Ficha completa</a>
                        
                    </div>
                </div>
            </div>
        </article>
      </div>
    `;
  }).join("");
}}