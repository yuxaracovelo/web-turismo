# **_GALICIA ESCAPADAS_**

Propuesta de rediseño de la web https://www.galiciaescapadas.com/ con el objetivo de mejorar la usabilidad y actualizar el funcionamiento.

Hecho por Yuxara Covelo Cameselle durante sus prácticas en esta empresa (10/04/26 - 15/05/26)

## TO DO:

- [] Completar informacion de las Recomendaciones por zona (crear zonas, asignar las correspondientes y links al articulo/blog en el que se menciona cada recomendacion)
- [] Creación del resto de páginas secundarias:
  - [] Recomendaciones (general + articulos)
  - [] Contacto (formulario contacto + FAQ page)
- [] Añadir slides a index.html - hero section
- [] Añadir enlaces correspondientes a los diferentes elementos del Index
- [] Side menus en resultados de busqueda de alojamientos/actividades/experiencias
- [] Crear variante de tarjeta con sello de calidad
- [] Rediseño de logotipo y breve manual corporativo
- [] Rediseño del sello de calidad

## DONE:

- [x] Diseño visual de la página en Figma: (https://www.figma.com/design/1Dhkpd90lxydFRzx9bowQG/Geodestinos?node-id=0-1&p=f&t=wWy8dFlXEdrI132t-0)
- [x] Header, nav y footer común
- [x] Estructura de carpetas y documentos.
- [x] Creación de hojas de estilo generales
- [x] Creación de index.html
- [x] index.html responsive
- [x] Archivos css pars interacciones y secciones
- [x] Archivo datos.js para usar como base de datos de cada elemento
- [x] Creación de alojamientos.html
- [x] Programación del funcionamiento del calendario/formulario de búsqueda
- [x] Crear galería interactiva y "automática"
- [x] Crear plantilla de alojamientos específicos (hero con nombre, seccion info basica, galeria, servicios, localizacion y recomendaciones en la zona)
- [x] Arreglar funcionamiento de la imagen de fondo en hero-section, ahora mismo puesta a través de css y no personalizable. (Objetivo: Incluirla como atributo para que se personalice automaticamente)
- [x] Añadir side panel para "ver detalles"
- [x] Crear recomendaciones por zonas
- [x] Title dinámico con el nombre del hotel
- [x] Creación pagina actividades (dupe de alojamientos.html + actividades especificas)
- [x] Creación pagina experiencias (dupe de alojamientos.html + experiencia especificas )
- [x] Introducir información elementos (alojamientos, actividades, experiencias, recomendaciones por zona...)
- [x] Crea tu propia experiencia (pagina de búsqueda + resultados + experiencia especififca personalizada)
- [x] Revisión del correcto funcionamientos de links
- [x] Revisión del correcto funcionamientos de versiones responsive

## INDICE ************\*\*************\*\*\*************\*\*************

1. Estructura básica
2. Funcionamiento del buscador
   2.1. Recomendaciones por zona
3. ¿Como funcionan las imágenes de las hero section?
4. Alojamientos, Actividades y Experiencias
5. ¿Cómo añadir nuevos elementos?
6. ¿Cómo funcionan las experiencias personalizadas?
    6.1. Recomendaciones por zona
## ************\*\*************\*\*\*************\*\*************

## 1. Estructura básica:

Inicio:
Secundaria[^1]{
Formulario de búsqueda + Botón
Click Botón = Tarjetas informativas de los elementos\* que coincidan con los criterios de búsqueda
Click en Tarjeta = Página Específica de dicho elemento  
 } > Página específifca de cada elemento{
Información básica (+ Botón a MRuta para procesar reserva si fuera posible)
Link "Ver detalles"
Galería de fotos interactiva
Servicios (dependiendo del elemento)
Localización
Recomendaciones en la zona
}

\*Elementos= Alojamientos, Actividades o Experiencias

El funcionamiento o numero de páginas secundarias/terciarias varía segun la sección

[^1]Las páginas que siguen la estructura de Secundaria son: Alojamientos, Actividades y Experiencias.
"Recomendaciones" funciona como un blog
"Contacto" es un formulario con un botón de acceso a página FAQ (Preguntas más frecuentes)

## 2. Funcionamiento del buscador:

El buscador (ya sea de hoteles, actividades, experiencias o recomendaciones) funciona a traves de una "base de datos" creada en JS (en la carpeta script ordenadas por elemento). A los elementos de esta base de datos se les designan unos atributos similares a estos:

const elementos = [
{
id: 0,
name: "Elemento ejemplo",
city: "Cuidad",
province: "Provincia",
zonas: ["zona-ejemplo", "zona-ejemplo2"],
price: "Desde 0.00€",
description: "Breve descripción del elemento",
image: "imagen-tarjeta-resultados.png",[^2]
heroImage: "../assets/imagen-hero.jpg",[^3]
tags: ["Etiqueta", "Etiqueta"],
link: "alojamientos/plantilla-alojamiento.html",
mapa: "link de google maps",
servicios: [
{ icono: "icono", titulo: "Servicio", desc: "Información servicio" },
{ icono: "icono", titulo: "Servicio", desc: "Información servicio" }
],[^4]
fotos: [
{ url: "imagen-para-galería.png", texto: "Pie de foto" },
{ url: "imagen-para-galería.png", texto: "Pie de foto" }
] [^5]
infoAdicional: [
{ icono: "icono", titulo: "Título:", desc: "Información extra"},
{ icono: "icono", titulo: "Título:", desc: "Información extra"}
] [^6]
}
];

[^2] Para la imagen que sale en la Tarjeta informativa.
[^3] Para el fondo de la hero section
[^4] Nombre del emoji de google materials.
[^5] Imágenes que se van a mostrar en la galería, texto:"pie de foto" solo se muestra con al ver la foto en grande.
[^6] Esta información se muestra en el side panel.

### 2.1. Recomendaciones por zona:

El funcionamiento es similar al resto de atributos, dentro de recomendacionesZona.js existe "const recomendacionesPorZona" donde se agrupan los sitios de interés, para que esto funcione correctamente es necesario asignar una "zona" a cada elemento. De esta manera, no es necesario añadir las recomendaciones una a una en cada elemento y evitamos tener que repetir información. A cada elemento se le puede asignar mas de una zona (Ej: zonas: ["vigo-ciudad", "rias-baixas"],)

const recomendacionesPorZona = {
"zona-ejemplo": [
{ nombre: "Recomendación de Ejemplo",
tipo: "Ejemplo",
desc: "Breve descripción",
imagen: "imagen-ejemplo1.jpg"}
]
};

## 3. ¿Como funcionan las imágenes de las hero section?

Las imágenes de las hero section funcionan de 2 maneras diferentes:

a) En páginas secundarias (alojamientos, actividades, experiencias, recomendaciones y contacto) a cada hero-section se le asigna su id correspondiente /id="hero-section-index"/ y en css se introduce la imagen /#hero-section-index{background-image: url("imagen-ejemplo1.jpg");
}/. Para que funcione correctamente, asegúrate de que el estilo de #hero-section también se le asigne a la específica de esa pagina secundaria.
b) Para elementos especificos, la imagen se introduce en datos.js en el atributo heroImage.

## 4. Alojamientos, Actividades y Experiencias

Toda la información de estos elementos se guarda, modifica y actualiza desde el archivo correspondiente dentro de la carpeta script

IMPORTANTE:

- No eliminar el link a la plantilla-elemento.html
- Actualizar el Nº de ID al añadir nuevos elementos, ya que de esto depende la información asociada a cada alojamiento.
- El funcionamiento base está hecho a partir de la página de alojamientos, aunque los nombres de las clases no coincidan (ej: <article id="alojamiento-detalles"> en la página de actividades) NO MODIFICAR

## 5. ¿Cómo añadir nuevos elementos?

El código está pensado para que sea fácil de actualizar y expandir la información, para añadir un nuevo elemento sigue estos pasos:
a) Ve a la carpeta script y entra en el archivo correspondiente, aquí se guarda toda la información.
b) Duplica el último elemento dentro de la constante. [^7]
c) Cambia la información por la que sea pertinente.
d) IMPORTANTE! Asegúrate de actualizar el nª de id. Esto es fundamental para que se reconozca este nuevo elemento y no causar fallos:
Alojamientos (id: "alo-nombre-unico")
Actividades (id: "act-nombre-unico")
Experiencias (id: "exp-nombre-unico")
Experiencias (id: "pack-nombre-unico")

[^7] Este funcionamiento es general para toda la web, puede que algunos elementos tengan atributos distintos pero el funcionamiento es similar.

## 6. ¿Cómo funcionan las experiencias personalizadas?

Para la creacion de las experiencias personalizadas, el proceso es muy similar al resto de elementos pero con un intermediario (en realidad 3: packs-logic.js,packsPersonalizados.js y plantilla-pack)
a) En cuanto main.js detecta que la información a procesar se trata de un pack, le pasa el trabajo directamente a packs-logic.js.
b) packs-logic.js busca la informción necesaria en packsPersonalizados.js
c) packsPersonalizados.js es donde se incluyen las "referencias" de los alojamientos y experiencias incluidas en el pack (los coje desde alojamientos.js y experiencias.js) a través de esta estructura:

const packs = [
{
id: "pack-vigo-relax-nautico",
type: "pack",
name: "Pack Vigo: Relax y Brisa Marina",
province: "Pontevedra",
city: "Vigo",
price: "Desde 199€",
image: "../../assets/imagen-ejemplo1.jpg",
heroImage: "../../assets/imagen-ejemplo3.jpg",
tags: ["Parejas", "Náutico", "Escapada"],
description: "La combinación perfecta entre confort urbano y la libertad del Atlántico.",
link: "experiencias/plantilla-pack.html",

  listaAlojamientos: [
      {
        id_interno: "det-alo-arosa22",  [^8]
        id_real: "alo-arosa-22",
        name: "Apartamento Arosa 22",
        image: "../../assets/imagen-ejemplo1.jpg",
        descripcionCorta: "Vistas panorámicas al puerto de Vigo.",
        detallesClave: ["Wifi", "Terraza", "Vistas"],
        urlReservaDirecta: "", [^9] 
      },
    ],

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
];
[^8] Los ID internos son necesarios para que al clickar sobre la tarjeta de alojamiento dentro de la plantilla d elos packs, esta te lleve "mas abajo" donde está es resto de detalles SOLO SE USAN AQUÍ
[^9] Para que lleve directamente a MRuta o la web que de reservas corresponda

### 6.1. ¿Cómo funcionan las experiencias personalizadas?

Varias cosas a tener en cuenta para añadir la informacion a los packs, los alojamientos y experiencias qur formen parte de ellos deben estar añadidos en alojamientos.js y experiencnias.js. Hay que asegurarse de que los ID (dentro del pack que id_real y el id de los otros dos js)son los correctos.