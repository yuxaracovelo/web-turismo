// ******************************************************
//ALOJAMIENTOS
const hotels = [
  // {
  //   //NOMBRE DEL ALOJAMIENTO
  //   id: "alo-",
  //   name: "",
  //   city: "",
  //   province: "",
  //   zonas: ["zona-ejemplo", "zona-ejemplo2"],
  //   price: "Desde €",
  //   description: "",
  //   // Para la tarjeta
  //   image: "../../assets/placeholder-cuadrada.png",
  //   // Para la hero section
  //   heroImage: "../../assets/imagen-ejemplo4.jpg",
  //   tags: ["", "", ""],
  //   link: "alojamientos/plantilla-alojamiento.html",
  //   //Mapa de Google Maps
  //   mapa: "https://www.google.com/maps/",
  //   servicios: [
  //     { icono: "", titulo: "",
  //       desc: "" },
      
  //   ],
  //   // Para la galeria de fotos
  //   fotos: [
  //     { url: "../../assets/placeholder-rectangular.png", texto: "" },
  //     { url: "../../assets/imagen-ejemplo3.jpg", texto: "Pie de página opcional" },
  //   ],
  //   // Side Panel
  //   infoAdicional: [
  //     { icono: "",
  //       titulo: "",
  //       desc: "" },
  //   ],
  // },
  {
    //SANTIAGO PLAZA
    id: "alo-santiago-plaza",
    name: "Hotel Santiago Plaza",
    city: "Santiago",
    province: "A Coruña",
    zonas: ["zona-ejemplo"],
    price: "Desde 127€",
    description: "Hotel Santiago Plaza Affiliated by Meliá es un establecimiento de 4 estrellas situado en una zona estratégica de Santiago de Compostela, diseñado para ofrecer una conectividad impecable tanto con el centro histórico (a 1 km) como con las principales vías de transporte. Su infraestructura técnica combina un diseño contemporáneo y funcional, posicionándose como un nodo logístico ideal para el viajero de negocios y el turismo cultural en Galicia. ",
    // Para la tarjeta
    image: "../../assets/placeholder-cuadrada.png",
    // Para la hero section
    heroImage: "../../assets/imagen-ejemplo4.jpg",
    tags: ["Gastronómico", "Urbano", "Familiar"],
    link: "alojamientos/plantilla-alojamiento.html",
    // Mapa de Google Maps
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.3797613086012!2d-8.546395623477023!3d42.86482800306199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2efe24b19d56d1%3A0x5d40dc42f61736d9!2sHotel%20Santiago%20Plaza%20Affiliated%20by%20Meli%C3%A1!5e0!3m2!1ses!2ses!4v1777979762213!5m2!1ses!2ses",
    servicios: [
      { icono: "hotel", titulo: "Habitaciones variadas",
        desc: "King Size, individuales, literas..." },
      { icono: "fitness_center", titulo: "Gimnasio",
        desc: "Gimnasio funcional TechnoGym" },
      { icono: "restaurant", titulo: "Bufet y Gastrobar",
        desc: "Gran variedad y múltiples opciones" },
      { icono: "groups", titulo: "Perfecto para eventos",
        desc: "Perfecto para grupos corporativos" }
    ],
    // Para la galeria de fotos
    fotos: [
      { url: "../../assets/placeholder-rectangular.png", texto: "" },
      { url: "../../assets/imagen-ejemplo3.jpg", texto: "Pie de página opcional" },
      { url: "../../assets/placeholder-rectangular.png", texto: "Pie de página opcional" },
      { url: "../../assets/imagen-ejemplo4.jpg", texto: "" }
    ],
    // Side Panel
    infoAdicional: [
      { icono: "hotel",
        titulo: "Configuración del Alojamiento:",
        desc: "El hotel dispone de una amplia gama de unidades interiores, que incluyen habitaciones Standard, Premium, Superior, Triple y Junior Suites. Destacan especialmente sus Family Rooms de 35 m2, equipadas con literas, infantiles, y las habitaciones Premium con camas king-Size. Todas las unidades cuentan con tecnología Smart TV con Chromecast, climatización y baño completo con amenities." },
      { icono: "fitness_center",
        titulo: "Instalaciones y Comfort:",
        desc: "El complejo está dotado de un gimnasio (Centro Fitness) funcional con equipamiento Technogym. En el apartado de conectividad, ofrece Wi-fi gratuito en todas sus instalaciones, además de servicios logísticos como aparcamiento privado con punto de recarga para vehículos eléctricos y traslados al aeropuerto (con cargo adicional). La accesibilidad es un pilar técnico, contando con habitaciones e instalaciones totalmente adaptadas." },
      { icono: "restaurant",
        titulo: "Oferta Gastronómica:",
        desc: "Dispone de un Bufet de desayuno completo con opciones para celíacos y un Gastrobar especializado en cocina gallega a la parrilla (ternera, lubina, rodaballo) y una cuidada selección de tapas y aperitivos." },
      { icono: "groups",
        titulo: "Eventos y Reuniones:",
        desc: "El hotel cuenta con una infraestructura de 8 salas de eventos que suman casi 1.000 m2, con capacidad para hasta 1.150 personas. Como dato curioso, su ubicación a solo 700 metros de la estación de tren permite una logística de llegada extremadamente eficiente para grupos corporativos, permitiendo combinar agendas de trabajo con el descubrimiento del patrimonio de la ciudad." },
      { icono: "info",
        titulo: "Más Información:",
        desc: "Hotel Santiago Plaza garantiza una operativa  profesional y confortable, consolidándose como un  referente de hospitalidad moderna en la capital gallega." }
    ],
  },
  {
    //CASA BOUZA
    id: "alo-casa-bouza",
    name: "Casa Bouza",
    city: "Becerreá",
    province: "Lugo",
    zonas: ["zona-ejemplo", ],
    price: "Desde 50€",
    description: "Casa Bouza, situada estratégicamente en Becerrea, es un establecimiento de turismo rural que se posiciona como el refugio ideal en la Comarca de los Ancares. Su infraestructura técnica combina la robustez de la arquitectura tradicional gallega con una dotación de servicios completa, diseñada para garantizar una operatividad versátil tanto para estancias de descanso como para el turismo activo en plena montaña lucense.",
    // Para la tarjeta
    image: "../../assets/imagen-ejemplo2.jpg",
    // Para la hero section
    heroImage: "../../assets/imagen-ejemplo2.jpg",
    tags: ["Montaña", "Tradicional", "Familiar"],
    link: "alojamientos/plantilla-alojamiento.html",
    // Mapa de Google Maps
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2922.3718198888873!2d-7.197970023475299!3d42.90719870035906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd30539e8204f72d%3A0xae536e7e5ecdf31!2sCasa%20Bouza!5e0!3m2!1ses!2ses!4v1777979996897!5m2!1ses!2ses",
    servicios: [
      { icono: "hotel", titulo: "Habitaciones variadas", desc: "Con baño individual, cuna y adaptadas para personas con movilidad reducida." },
      { icono: "scene", titulo: "Zonas Comunes", desc: "A plena disposición de los huéspedes." },
      { icono: "chair_umbrella", titulo: "Jardines", desc: "Con mobiliario y barbacoa." },
      { icono: "pets", titulo: "Pet-friendly", desc: "Se aceptan mascotas." }
    ],
    // Para la galeria de fotos
    fotos: [
      { url: "../../assets/imagen-ejemplo3.jpg", texto: "" },
      { url: "../../assets/imagen-ejemplo3.jpg", texto: "Pie de página opcional" },
      { url: "../../assets/imagen-ejemplo3.jpg", texto: "Pie de página opcional" },
      { url: "../../assets/imagen-ejemplo4.jpg", texto: "" }
    ],
    // Side Panel
    infoAdicional: [
      { icono: "hotel",
        titulo: "Alojamiento y Accesibilidad:",
        desc: " La casa dispone de 5 habitaciones dobles, todas ellas configuradas con baño completo individual. Destaca su compromiso con la inclusión al  contar con una habitación adaptada para personas con movilidad reducida. Para optimizar la capacidad, ofrecen cuna, sofá cama y 2 camas supletorias (de forma opcional), permitiendo una flexibilidad logística superior para diferentes perfiles de viajeros." },
      { icono: "scene",
        titulo: "Zonas Comunes y Comfort:",
        desc: " El interior está presidido por un amplio salón con chimenea y un sistema de calefacción central, asegurando el confort térmico en cualquier época del año. La operatividad se completa con una cocina totalmente equipada y conectividad garantizada mediante Wi-fi  gratuito y cobertura 3G de los principales operadores." },
      { icono: "chair_umbrella",
        titulo: "Exterior y Ocio:",
        desc: "La propiedad cuenta con un jardín exterior amueblado con barbacoa, ideal para la vida al aire libre. Su ubicación técnica permite el desarrollo de actividades como la pesca y el senderismo, aprovechando la riqueza hídrica y forestal de los Ancares. " },
      { icono: "pets",
        titulo: "Servicios Especiales y Grupos:",
        desc: "Casa Bouza destaca por ser un establecimiento pet-friendly (aceptan mascotas) y por su dinamismo comercial, ofreciendo bonos regalo personalizados y promociones temáticas especiales, como en fechas señaladas tipo Halloween. Como dato curioso, su enclave junto a la salida 451 de la A-6 permite a los grandes grupos disfrutar de un aislamiento total en la naturaleza sin renunciar  a una conectividad logística impecable con las principales vías de comunicación de Galicia." },
      { icono: "info",
        titulo: "Más Información:",
        desc: "Casa Bouza garantiza así una experiencia única impecable, fusionando el equipamiento de una vivienda moderna con la esencia rústica del interior de la provincia de Lugo. " }
    ],
  },
  {
    //HOTEL LA SUITE
    id: "alo-la-suite",
    name: "Hotel La Suite",
    city: "Vigo",
    province: "Pontevedra",
    zonas: ["zona-ejemplo", ],
    price: "Desde 127€",
    description: "Hotel la Suite, ubicado en una zona estratégica de Vigo, es un establecimiento que destaca por su enfoque en la modernidad y la funcionalidad operativa. Su infraestructura técnica está diseñada para ofrecer una estancia práctica y confortable. posicionándose como una opción de alojamiento eficiente para quienes visitan la ciudad olívica tanto por motivos de ocio como profesionales. ",
    // Para la tarjeta
    image: "../../assets/placeholder-cuadrada.png",
    // Para la hero section
    heroImage: "../../assets/imagen-ejemplo4.jpg",
    tags: ["Urbano", "Relajante", "Romántico"],
    link: "alojamientos/plantilla-alojamiento.html",
    //Mapa de Google Maps
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2954.5663243843846!2d-8.750909523502504!3d42.223712643704104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2f61f89b0aa5ff%3A0xaa8236915bec451c!2sLa%20Suite%20Hotel!5e0!3m2!1ses!2ses!4v1778139657882!5m2!1ses!2ses",

    servicios: [
      { icono: "hotel", titulo: "Habitaciones",
        desc: "Con luz natural y baño privado." },
      { icono: "wifi", titulo: "Wifi",
        desc: "Conexión gratuita." },
      { icono: "location_on", titulo: "Localización",
        desc: "Buena conexión en el centro de la ciudad." },
      { icono: "mode_dual", titulo: "Climatización",
        desc: "Confort térmico en todas las estancias." },
      
    ],
    // Para la galeria de fotos
    fotos: [
      { url: "../../assets/placeholder-rectangular.png", texto: "" },
      { url: "../../assets/imagen-ejemplo3.jpg", texto: "Pie de página opcional" },
    ],
    // Side Panel
    infoAdicional: [
      { icono: "hotel",
        titulo: "Configuración del Alojamiento",
        desc: "El hotel dispone de habitaciones interiores que priorizan la entrada de luz natural y la sencillez en el diseño. Todas las unidades están equipadas con televisión de pantalla plana y conexión Wi-Fi gratuita, asegurando la conectividad del huésped. En el apartado de bienestar, las habitaciones cuentan con cuarto de baño privado equipado con ducha, diseñado para ofrecer una funcionalidad óptima y un mantenimiento impecable." },
      { icono: "scene",
        titulo: "Instalaciones y confort",
        desc: " El edificio cuenta con un sistema de climatización que garantiza el confort térmico en todas las estancias. La operatividad del hotel se apoya en un servicio de recepción que gestiona la logística de entrada y salida de forma ágil. Además, el establecimiento dispone de ascensor y zonas comunes simplificadas que facilitan la movilidad interna de los usuarios." },
      { icono: "scene",
        titulo: "Ubicación y Logística",
        desc: "Su situación en Vigo permite un acceso fluido a los principales nudos de transporte y zonas comerciales. La logística de la zona es ideal para pasajeros que buscan un punto de descanso con buena cobertura de servicios externos y una conectividad rápida con el puerto y el centro urbano. " },
      { icono: "groups",
        titulo: "Alojamiento para Grupos",
        desc: "La configuración de sus plantas permite la organización técnica de estancias para grandes grupos o delegaciones comerciales que requieren un número plural de habitaciones en una misma localización. Como dato curioso, el hotel destaca por su sobriedad corporativa, lo que permite un entorno libre de distracciones visuales, ideal para aquellos que buscan un descanso técnico y directo en una de las ciudades con mayor actividad económica de Galicia." },
        { icono: "info",
        titulo: "Más Información:",
        desc: "El Hotel la Suite garantiza así una experiencia de alojamiento clara y sin artificios, cumpliendo con los estándares de calidad necesarios para una estancia urbana satisfactoria. " }
    ],
  },




  {
    //PRUEBAAAAA
    id: "alo-arosa-22",
    name: "EJEMPLO",
    city: "Vigo",
    province: "Pontevedra",
    zonas: ["zona-ejemplo", ],
    price: "Desde 00€",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    // Para la tarjeta
    image: "../../assets/placeholder-cuadrada.png",
    // Para la hero section
    heroImage: "../../assets/imagen-ejemplo4.jpg",
    tags: ["Urbano", "Relajante", "Romántico"],
    link: "alojamientos/plantilla-alojamiento.html",
    //Mapa de Google Maps
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2954.5663243843846!2d-8.750909523502504!3d42.223712643704104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2f61f89b0aa5ff%3A0xaa8236915bec451c!2sLa%20Suite%20Hotel!5e0!3m2!1ses!2ses!4v1778139657882!5m2!1ses!2ses",

    servicios: [
      { icono: "hotel", titulo: "Habitaciones",
        desc: "Lorem ipsum dolor sit amet" },
      { icono: "wifi", titulo: "Wifi",
        desc: "Lorem ipsum dolor sit amet" },
      { icono: "location_on", titulo: "Localización",
        desc: "Lorem ipsum dolor sit amet" },
      { icono: "mode_dual", titulo: "Climatización",
        desc: "Lorem ipsum dolor sit amet" },
      
    ],
    // Para la galeria de fotos
    fotos: [
      { url: "../../assets/placeholder-rectangular.png", texto: "" },
      { url: "../../assets/imagen-ejemplo3.jpg", texto: "Pie de página opcional" },
    ],
    // Side Panel
    infoAdicional: [
      { icono: "hotel",
        titulo: "Configuración del Alojamiento",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
      { icono: "scene",
        titulo: "Instalaciones y confort",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
      { icono: "scene",
        titulo: "Ubicación y Logística",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
      { icono: "groups",
        titulo: "Alojamiento para Grupos",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { icono: "info",
        titulo: "Más Información:",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }
    ],
  },
];