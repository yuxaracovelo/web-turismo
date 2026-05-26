// ******************************************************
//ACTIVIDADES
const activities = [
  {
    id: "act-ejemplo-vigo",
    type: "actividad", // Identificador de tipo
    name: "Ruta en Kayak por la Ría",
    city: "Vigo",
    province: "Pontevedra",
    zonas: ["zona-ejemplo", ],
    description: "Una experiencia única navegando por las aguas de Vigo...",
    urlReservaDirecta: "",
    image: "../assets/imagen-ejemplo1.jpg",
    heroImage: "../assets/imagen-ejemplo2.jpg",
    tags: ["Aventura", "Familiar"],
    link: "actividades/plantilla-actividades.html",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47271.23966661299!2d-8.766625358427472!3d42.22614533698503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2f621461b2c193%3A0x7b441dad174bd49f!2sVigo%2C%20Pontevedra!5e0!3m2!1ses!2ses!4v1777890530999!5m2!1ses!2ses",
    
    fotos: [ 
      { url: "../assets/imagen-ejemplo3.jpg", texto: "" },
      { url: "../assets/imagen-ejemplo3.jpg", texto: "Pie de página opcional" },
     ],
    infoAdicional: [ 
      { icono: "info",
        titulo: "Más Información:",
        desc: "Aqui se pondría muchas más información sobre esta actividad..." }
      ]
  },
   {
    id: "act-ejemplo-lugo",
    type: "actividad", // Identificador de tipo
    name: "Descubre la muralla de Lugo",
    city: "Lugo",
    province: "Lugo",
    zonas: ["zona-ejemplo2", ],
    description: "El Lugo mas histórico...",
    image: "../assets/imagen-ejemplo1.jpg",
    heroImage: "../assets/imagen-ejemplo2.jpg",
    tags: ["Tradicional", "Familiar", "Gastronómico"],
    link: "actividades/plantilla-actividades.html",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47271.23966661299!2d-8.766625358427472!3d42.22614533698503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2f621461b2c193%3A0x7b441dad174bd49f!2sVigo%2C%20Pontevedra!5e0!3m2!1ses!2ses!4v1777890530999!5m2!1ses!2ses",
    
    fotos: [ 
      { url: "../assets/imagen-ejemplo3.jpg", texto: "" },
      { url: "../assets/imagen-ejemplo3.jpg", texto: "Pie de página opcional" },
      { url: "../assets/imagen-ejemplo3.jpg", texto: "" },
      { url: "../assets/imagen-ejemplo3.jpg", texto: "Pie de página opcional" },
     ],
    infoAdicional: [ 
      { icono: "info",
        titulo: "Más Información:",
        desc: "Aqui se pondría muchas más información sobre esta actividad..." }
      ]
  },
];
