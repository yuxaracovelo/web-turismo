/**
 * GALICIA ESCAPADAS - JS PRINCIPAL
 * Organizado por: Menú, Calendario, Formulario, Buscador, Galería y funcionamiento de la Plantilla de Alojamientos-Actividades-Experiencias.
 */

// --- VARIABLES GLOBALES ----
let currentDate = new Date();
let startDate = null;
let endDate = null;
let indiceInicio = 0;
let indiceOverlay = 0;
window.fotosActuales = []; // Se llena dinámicamente según el hotel

// --- 1. MENÚ HAMBURGUESA ---
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");
const icon = menuToggle?.querySelector(".material-symbols-outlined");
const body = document.body;

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("active");
    body.classList.toggle("no-scroll");
    if (icon)
      icon.textContent = mainNav.classList.contains("active")
        ? "close"
        : "menu";
  });

  document.querySelectorAll("#main-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("active");
      body.classList.remove("no-scroll");
      if (icon) icon.textContent = "menu";
    });
  });
}

// --- 2. LÓGICA DEL CALENDARIO ---
const daysEl = document.getElementById("calendar-days");
const monthYearEl = document.getElementById("month-year");
const prevBtn = document.getElementById("prev-month");
const nextBtn = document.getElementById("next-month");

function normalizeDate(date) {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  ).getTime();
}

function renderCalendar() {
  if (!daysEl || !monthYearEl) return;
  daysEl.innerHTML = "";

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const todayTime = normalizeDate(new Date());

  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  monthYearEl.textContent = `${monthNames[month]} ${year}`;

  let firstDayIndex = new Date(year, month, 1).getDay() - 1;
  if (firstDayIndex === -1) firstDayIndex = 6;
  const lastDay = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < firstDayIndex; i++) {
    const emptyDiv = document.createElement("div");
    emptyDiv.classList.add("empty");
    daysEl.appendChild(emptyDiv);
  }

  for (let i = 1; i <= lastDay; i++) {
    const dayDiv = document.createElement("div");
    dayDiv.classList.add("day");
    dayDiv.textContent = i;
    const cellDate = new Date(year, month, i);
    const cellTime = normalizeDate(cellDate);
    dayDiv.dataset.date = cellDate;

    if (cellTime < todayTime) {
      dayDiv.classList.add("past");
    } else {
      dayDiv.addEventListener("click", () => handleDayClick(cellDate));
    }
    daysEl.appendChild(dayDiv);
  }

  if (prevBtn) {
    const today = new Date();
    prevBtn.style.visibility =
      year <= today.getFullYear() && month <= today.getMonth()
        ? "hidden"
        : "visible";
  }
  updateSelection();
}

function handleDayClick(clickedDate) {
  if (!startDate || (startDate && endDate)) {
    startDate = clickedDate;
    endDate = null;
  } else {
    const timeStart = normalizeDate(startDate);
    const timeClicked = normalizeDate(clickedDate);
    if (timeClicked > timeStart) endDate = clickedDate;
    else if (timeClicked < timeStart) startDate = clickedDate;
    else startDate = null;
  }
  updateSelection();
}

function updateSelection() {
  const timeStart = startDate ? normalizeDate(startDate) : null;
  const timeEnd = endDate ? normalizeDate(endDate) : null;

  document.querySelectorAll(".day").forEach((dayEl) => {
    const cellTime = normalizeDate(new Date(dayEl.dataset.date));
    dayEl.classList.remove("selected", "in-range");
    if (cellTime === timeStart || cellTime === timeEnd)
      dayEl.classList.add("selected");
    if (timeStart && timeEnd && cellTime > timeStart && cellTime < timeEnd)
      dayEl.classList.add("in-range");
  });
}

// --- 3. BUSCADOR Y RESULTADOS ---

const reservationForm = document.getElementById("reservation-form");

if (reservationForm) {
  // Detectamos la página actual
  const paginaActual = window.location.pathname;

  reservationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const province = document.getElementById("province").value;
    const trip = document.getElementById("trip-type").value;

    sessionStorage.setItem(
      "lastSearch",
      JSON.stringify({
        province: province,
        trip: trip,
        startDate: startDate ? startDate.toISOString() : null,
        endDate: endDate ? endDate.toISOString() : null,
      }),
    );

    // Decidimos qué array usar según la página
   let dataSource = [];

// Usamos .includes() para que funcione aunque haya carpetas de por medio
const path = window.location.pathname;

if (path.includes("alojamientos.html")) {
    dataSource = typeof hotels !== "undefined" ? hotels : [];
} else if (path.includes("actividades.html")) {
    dataSource = typeof activities !== "undefined" ? activities : [];
} else if (path.includes("experiencias.html")) {
    // IMPORTANTE: Esta es la página de experiencias normales
    dataSource = typeof experiences !== "undefined" ? experiences : [];
} else if (path.includes("experiencia-personalizada.html")) {
    
    dataSource = typeof packs !== "undefined" ? packs : [];
}

console.log("Ruta detectada:", path);
console.log("Datos a filtrar:", dataSource);

    // Filtrado genérico
    const filtered = dataSource.filter((item) => {
      const coincideProvincia =
        province === "" ||
        item.province === province ||
        item.provincia === province;
      const coincideTipo = trip === "" || item.tags.includes(trip);
      return coincideProvincia && coincideTipo;
    });

    // Renderizado
    renderResults(filtered, trip);
  });

  reservationForm.addEventListener("reset", () => {
    startDate = endDate = null;
    currentDate = new Date();
    renderCalendar();
    document.getElementById("results-container").innerHTML = "";
    sessionStorage.removeItem("lastSearch");
  });
}

// --- 3. BUSCADOR Y RESULTADOS ---



if (reservationForm) {
  reservationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const province = document.getElementById("province").value.toLowerCase();
    const trip = document.getElementById("trip-type").value;

    // Guardar en sesión
    sessionStorage.setItem("lastSearch", JSON.stringify({
        province: province,
        trip: trip,
        startDate: startDate ? startDate.toISOString() : null,
        endDate: endDate ? endDate.toISOString() : null,
    }));

    let dataSource = [];
    const path = window.location.pathname.toLowerCase();

    // LÓGICA DE DETECCIÓN MEJORADA
    if (path.includes("alojamientos")) {
      dataSource = typeof hotels !== "undefined" ? hotels : [];
    } else if (path.includes("actividades")) {
      dataSource = typeof activities !== "undefined" ? activities : [];
    } else if (path.includes("personalizada")) { // <--- Simplificado para los PACKS
      dataSource = typeof packs !== "undefined" ? packs : [];
    } else if (path.includes("experiencias")) {
      dataSource = typeof experiences !== "undefined" ? experiences : [];
    }

    console.log("Detectado Pack:", path.includes("personalizada"));
    console.log("Total datos cargados:", dataSource.length);

    // FILTRADO
    const filtered = dataSource.filter((item) => {
      const itemProvince = (item.province || "").toLowerCase();
      const coincideProvincia = province === "" || itemProvince.includes(province);
      const coincideTipo = trip === "" || (item.tags && item.tags.includes(trip));
      return coincideProvincia && coincideTipo;
    });

    renderResults(filtered, trip);
  });

  // Evento Reset
  reservationForm.addEventListener("reset", () => {
    startDate = endDate = null;
    currentDate = new Date();
    renderCalendar();
    const container = document.getElementById("results-container");
    if (container) container.innerHTML = "";
    sessionStorage.removeItem("lastSearch");
  });
}

function renderResults(results, searchTag) {
  const container = document.getElementById("results-container");
  if (!container) return;

  container.innerHTML = "";

  if (results.length === 0) {
    container.innerHTML = "<p class='no-results'>No se encontraron resultados que coincidan.</p>";
    return;
  }

  results.forEach((item) => {
    const sortedTags = item.tags ? [...item.tags].sort((a, b) =>
      a === searchTag ? -1 : b === searchTag ? 1 : 0
    ) : [];

    // IMPORTANTE: Aseguramos que el link lleve al ID
    let finalLink = item.link;
    if (finalLink && !finalLink.includes("?id=")) {
      finalLink = `${item.link}?id=${item.id}`;
    }

    const card = document.createElement("div");
    card.classList.add("tarjeta");
    card.innerHTML = `
      <a href="${finalLink}">
        <img class="imagen-tarjeta" src="${item.image}" alt="${item.name}" />
        <div class="contenido-tarjeta">
          <h5>${item.name}</h5>
          <div class="texto-resultado">
            <p class="precio">${item.price || ""}</p>
            <p class="ciudad-provincia">${item.city}, ${item.province}</p>
          </div>
          <div class="tag-container">
            ${sortedTags.map(t => `<span class="tag ${t === searchTag ? "match" : ""}">${t}</span>`).join("")}
          </div>
        </div>
      </a>`;
    container.appendChild(card);
  });
}

// --- 4. CARGA DINÁMICA  ---
function cargarDatosPlantilla() {
  const urlParams = new URLSearchParams(window.location.search);

  const hotelId = urlParams.get("id");
  if (!hotelId) return;

  // BUSCAR EN LOS 3 ARRAYS

  const hotel =
    hotels.find((h) => h.id == hotelId) ||
    (typeof activities !== "undefined"
      ? activities.find((a) => a.id == hotelId)
      : null) ||
    (typeof experiences !== "undefined"
      ? experiences.find((e) => e.id == hotelId)
      : null);
  if (!hotel) {
    console.error("No se encontró el elemento con ID:", hotelId);
    return;
  }
  // Para que aparezca el nombre del hotel en el title
  document.title = `${hotel.name} (${hotel.city}) - Galicia Escapadas`;

  const heroSection = document.getElementById("hero-section");
  if (heroSection && hotel.heroImage) {
    heroSection.style.backgroundImage = `url('${hotel.heroImage}')`;
  }

  const selectors = {
    "#hero-section h1": hotel.name,
    ".alojamiento-imagen img": hotel.image,
    ".alojamiento-info h4": `${hotel.city}, ${hotel.province}`,
    ".alojamiento-info h5": hotel.price,
    ".alojamiento-info p": hotel.description,
  };

  Object.entries(selectors).forEach(([sel, val]) => {
    const el = document.querySelector(sel);
    if (el) {
      if (sel.includes("img")) {
        el.src = val;
        el.alt = hotel.name;
      } else {
        el.textContent = val;
      }
    }
  });

  // Servicios
  const servCont = document.getElementById("servicios-container");
  if (servCont && hotel.servicios) {
    servCont.innerHTML = hotel.servicios
      .map(
        (s) => `
            <div class="icono-info">
                <span class="material-symbols-outlined">${s.icono}</span>
                <div class="texto-icono"><h5>${s.titulo}</h5><p>${s.desc}</p></div>
            </div>`,
      )
      .join("");
  }

  // Mapa
  const mapaCont = document.getElementById("mapa-contenedor");
  if (mapaCont && hotel.mapa) {
    mapaCont.innerHTML = `<iframe src="${hotel.mapa}" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
  }

  // Galería
  window.fotosActuales = hotel.fotos || [];
  renderGallery();

  // Recomendaciones por zona
  const recCont = document.getElementById("recomendaciones-container");

  if (recCont && hotel.zonas && Array.isArray(hotel.zonas)) {
    const todasLasSugerencias = hotel.zonas.flatMap(
      (z) => recomendacionesPorZona[z] || [],
    );
    const sugerenciasUnicas = Array.from(
      new Set(todasLasSugerencias.map((s) => JSON.stringify(s))),
    ).map((s) => JSON.parse(s));

    if (sugerenciasUnicas.length > 0) {
      recCont.innerHTML = sugerenciasUnicas
        .map(
          (rec) => `
            <div class="tarjeta">
                <img class="imagen-tarjeta" src="${rec.imagen}" alt="${rec.nombre}" />
                <h5>${rec.nombre}</h5>
                <div class="texto-resultado">
                    <p>${rec.tipo}</p>
                </div>
                <div class="info-rec-desc">
                    <p>${rec.desc}</p>
                </div>
            </div>`,
        )
        .join("");
    } else {
      recCont.innerHTML =
        "<p>No hay recomendaciones disponibles para estas zonas.</p>";
    }
  }

  // Side Panel
  const panelContent = document.getElementById("panel-content");
  const sidePanel = document.getElementById("side-panel");
  const panelOverlay = document.getElementById("panel-overlay");
  const openBtn = document.getElementById("open-details");
  const closeBtn = document.getElementById("close-panel");

  if (panelContent && hotel.infoAdicional) {
    panelContent.innerHTML = hotel.infoAdicional
      .map(
        (s) => `
            <div class="icono-info">
                <div class="material-symbols-outlined">${s.icono}</div>
                <div class="texto-icono"><h5>${s.titulo}</h5>
                <p>${s.desc}</p>
                </div>
            </div>`,
      )
      .join("");

    const togglePanel = () => {
      const isActive = sidePanel.classList.toggle("active");
      panelOverlay.classList.toggle("active");
      document.body.classList.toggle("no-scroll", isActive);
    };

    openBtn?.addEventListener("click", togglePanel);
    closeBtn?.addEventListener("click", togglePanel);
    panelOverlay?.addEventListener("click", togglePanel);
  }
}

// --- 5. GALERÍA DE IMÁGENES ---
function renderGallery() {
  const grid = document.getElementById("gallery-grid");
  if (!grid || !window.fotosActuales.length) return;
  grid.innerHTML = "";

  let fotosAMostrar = 3; // Por defecto (Escritorio > 1200px)

  if (window.innerWidth < 768) {
    fotosAMostrar = 1; // Móvil
  } else if (window.innerWidth < 1200) {
    fotosAMostrar = 2; // Tablet
  }

  const limite = Math.min(fotosAMostrar, window.fotosActuales.length);

  //Renderizar solo las necesarias
  for (let i = 0; i < limite; i++) {
    let idx = (indiceInicio + i) % window.fotosActuales.length;
    const img = document.createElement("img");
    img.src = window.fotosActuales[idx].url;
    img.alt = window.fotosActuales[idx].texto || "Imagen de galería";
    img.onclick = () => openOverlay(idx);
    grid.appendChild(img);
  }
}

function moveGallery(dir) {
  indiceInicio =
    (indiceInicio + dir + window.fotosActuales.length) %
    window.fotosActuales.length;
  renderGallery();
}

function openOverlay(idx) {
  indiceOverlay = idx;
  document.getElementById("gallery-overlay").style.display = "flex";
  updateOverlay();
}

function closeOverlay() {
  document.getElementById("gallery-overlay").style.display = "none";
}

function updateOverlay() {
  const foto = window.fotosActuales[indiceOverlay];
  document.getElementById("gallery-overlay-img").src = foto.url;
  document.getElementById("gallery-overlay-caption").innerText = foto.texto;
}

function moveOverlay(dir) {
  indiceOverlay =
    (indiceOverlay + dir + window.fotosActuales.length) %
    window.fotosActuales.length;
  updateOverlay();
}
window.addEventListener("resize", renderGallery);

// --- 6. INICIALIZACIÓN AL CARGAR LA PÁGINA ---
window.addEventListener("load", () => {
  // Inicializar Calendario
  if (daysEl) {
    renderCalendar();
    if (prevBtn)
      prevBtn.addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
      });
    if (nextBtn)
      nextBtn.addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
      });
  }

  // Restaurar búsqueda previa
  const saved = sessionStorage.getItem("lastSearch");
  if (saved && reservationForm) {
    const data = JSON.parse(saved);

    // Restauramos los valores en los selectores
    document.getElementById("province").value = data.province || "";
    document.getElementById("trip-type").value = data.trip || "";

    // Restauramos las fechas
    if (data.startDate) startDate = new Date(data.startDate);
    if (data.endDate) endDate = new Date(data.endDate);
    renderCalendar();

    reservationForm.dispatchEvent(
      new Event("submit", { cancelable: true, bubbles: true }),
    );
  }

  // Cargar datos si es página de detalle
  cargarDatosPlantilla();
});
// --- LOGICA PARA HACER EL BOTÓN DE CONTRATAR DINÁMICO ---
window.addEventListener("DOMContentLoaded", () => {
  // 1. Detectamos si estamos en la plantilla de experiencias
  const botonContratar = document.getElementById("boton-reserva-externa");
  
  if (botonContratar) {
    // 2. Obtenemos el ID de la experiencia desde la URL (?id=...)
    const params = new URLSearchParams(window.location.search);
    const expId = params.get("id");
    
    if (expId && typeof experiences !== "undefined") {
      // 3. Buscamos el objeto correspondiente dentro del array de 'experiencias.js'
      const experienciaEncontrada = experiences.find(exp => exp.id === expId);
      
      if (experienciaEncontrada && experienciaEncontrada.urlReservaDirecta) {
        // 4. Si tiene una URL externa asignada en la base de datos, cambiamos el href del enlace
        botonContratar.href = experienciaEncontrada.urlReservaDirecta;
      } 
    }
  }
});