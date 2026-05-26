// packsPersonalizados.js

const packs = [
  {
    // --- 1. IDENTIFICACIÓN ÚNICA ---
    // Si quieres crear otro pack, copias desde aquí hasta el final del objeto
    id: "pack-vigo-relax-nautico", 
    type: "pack",
    
    // --- 2. INFO PARA EL BUSCADOR (Lo que sale en la tarjeta) ---
    name: "Pack Vigo: Relax y Brisa Marina",
    province: "Pontevedra",
    city: "Vigo",
    price: "Desde 199€",
    image: "../../assets/imagen-ejemplo1.jpg",
    heroImage: "../../assets/imagen-ejemplo3.jpg",
    tags: ["Parejas", "Náutico", "Escapada"],
    description: "La combinación perfecta entre confort urbano y la libertad del Atlántico.",
    link: "experiencias/plantilla-pack.html", 

    // --- 3. ALOJAMIENTOS INCLUIDOS ---
    listaAlojamientos: [
      {
        id_interno: "det-alo-arosa22",
        id_real: "alo-arosa-22",
        name: "Apartamento Arosa 22",
        image: "../../assets/imagen-ejemplo1.jpg",
        descripcionCorta: "Vistas panorámicas al puerto de Vigo.",
        detallesClave: ["Wifi", "Terraza", "Vistas"],
        urlReservaDirecta: "",
      },
      
      
    ],
    // --- 4. EXPERIENCIAS INCLUIDAS ---
    listaExperiencias: [
      {
        id_interno: "det-exp-ejemplo",
        id_real: "exp-ejemplo",
        name: "Isla de San Simón",
        image: "../../assets/imagen-ejemplo1.jpg",
        descripcionCorta: "Guía oficial y barco incluido.",
        detallesClave: ["3 horas", "Guía", "Degustación"],
        urlReservaDirecta: "",
      }
    ]
  },
  // --- PARA AÑADIR OTRO PACK: Pegarías aquí el siguiente bloque { ... } ---
];