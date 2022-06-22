export default {
  global: {
    componenteFormativo: 'Luz y plano',
    descripcionCurso:
      'Construir una fotografía, un mensaje que cautive a la audiencia de las redes sociales dispuesta a comprar o adquirir un producto requiere de técnicas sólidas y de la aplicación de conceptos fotográficos como: iluminación, composición, ángulos de cámara y planos. Este objetivo se logra con la aplicación de las etapas de producción del proceso fotográfico.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Iluminación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Iluminación con luz natural',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Iluminación con <em>flash</em> en estudio',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'IIluminación mixta',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Triángulo básico de iluminación',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Empleo del <em>flex</em>',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Leyes de composición fotográfica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'La ley de tercios',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'La ley de la mirada',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Puntos de vista',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Planos técnicos de imagen',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Ritmo visual',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'El ritmo uniforme',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'El ritmo alterno',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'El ritmo radial',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'El ritmo creciente y decreciente fotográfico',
            hash: 't_4_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.5',
            titulo: 'El ritmo simétrico',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Guion fotográfico',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Efectos visuales básicos para imágenes',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      texto: 'Amador, P. (s.f.). La imagen fotográfica y su lectura.',
      tipo: 'Artículo PDF',
      link: 'https://core.ac.uk/download/pdf/30042969.pdf',
    },
    {
      texto:
        'Arnais, K. (2018). <em>Tipos de plano y ángulos de cámara</em> | <em>Curso de video 7/8</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=S5MH3srlu28',
    },
    {
      texto:
        'Colorado, O. (2020). <em>Fotografía: ángulos y altura de cámara</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-oJGq42S6sw',
    },
    {
      texto: 'Gonzaga, L. (2013). Aprende a iluminar en fotografía.',
      tipo: 'Libro PDF',
      link:
        'https://www.aprenderailuminar.com/2011/09/libro-ebook-pdf-aprender-iluminar.html',
    },
    {
      texto:
        'Freeman, M. (2005). <em>Fotografía digital de personas</em>. TASCHEN.',
      tipo: 'Libro',
      link:
        'https://issuu.com/editorialblume/docs/binder5_fotografias_perfectas',
    },
    {
      texto: 'Zerbst, C. (2008). Introducción a la fotografía digital.',
      tipo: 'Libro',
      link:
        'https://www.uv.mx/personal/lenunez/files/2013/06/INICIACION-A-LA-FOTOGRAFIA-DIGITAL-DeCamaras.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Brillo ',
      significado:
        'Luminosidad relevante del color, que se mide como un porcentaje comprendido entre 0% (negro) y 100% (blanco).',
    },
    {
      termino: 'Contraste',
      significado:
        'Escala de tonalidad de una imagen fotográfica, desde claros muy brillantes hasta sombras muy oscuras.',
    },
    {
      termino: 'Difusión',
      significado:
        'Dispersión de la luz mediante el traspaso de un material translúcido para suavizar la luz y sus sombras. Las nubes son difusores naturales.',
    },
    {
      termino: 'Difusor',
      significado:
        'Accesorio portátil de iluminación, puede ser de tela o material translúcido que suaviza la intensidad de la luz.',
    },
    {
      termino: 'El guion fotográfico',
      significado:
        'Es la construcción y diseño planificado de los objetivos de la fotografía por realizar.',
    },
    {
      termino: 'Luz',
      significado:
        'Es la parte de la radiación electromagnética que puede ser percibida por el ojo humano.​ En física, el término luz se considera como parte del campo de las radiaciones conocido como espectro electromagnético, mientras que la expresión luz visible señala específicamente la radiación en el espectro visible.',
    },
    {
      termino: 'Luz artificial',
      significado:
        'Toda fuente de luz producida por medios técnicos, como bombillas o focos.',
    },
    {
      termino: 'Luz de detalle',
      significado:
        'Es una fuente de luz con una intensidad menor a la luz principal y a la luz secundaria. Su característica principal es que es una luz puntual.',
    },
    {
      termino: 'Luz dura',
      significado:
        'Este tipo de luz se caracteriza por ser una luz que genera una sombra muy contrastada (negra).',
    },
    {
      termino: 'Luz natural',
      significado:
        'Toda fuente de luz que proviene directamente del sol y se ve afectada por factores atmosféricos como las nubes.',
    },
    {
      termino: 'Luz principal',
      significado:
        'Es la más importante, ya que es la luz con más intensidad y por ende, la que predomina en la fotografía. Es la que manda, marca el diafragma a usar.',
    },
    {
      termino: 'Luz secundaria',
      significado:
        'Debe ser una fuente con menor intensidad que la luz principal. Su función es la de rellenar, suavizar o quitar las sombras que se producen por la posición de la luz principal.',
    },
    {
      termino: 'Luz suave',
      significado:
        'Este tipo de luz se caracteriza por ser una luz que genera una sombra muy poco contrastada (grisácea).',
    },
    {
      termino: 'Ruido',
      significado:
        'Pequeños puntos que se presentan en la fotografía digital. Se producen en situaciones de poca luz donde se utilizan ISO de alto valor.',
    },
    {
      termino: 'Trípode de luz',
      significado:
        'Accesorio que se utiliza como soporte para las cabezas de <em>flash</em>.',
    },
    {
      termino: 'Velocidad de obturación',
      significado:
        'Es una variable que controla el tiempo de exposición de la luz en la imagen final.',
    },
  ],
  referencias: [
    {
      referencia:
        'Gonzaga, L. (2019). <em>Aprender a iluminar en fotografía.</em>',
      link:
        'https://www.aprenderailuminar.com/2011/09/libro-ebook-pdf-aprender-iluminar.html',
    },
    {
      referencia: 'Hofmann. (2021). <em>Tipos de planos en fotografía</em>.',
      link:
        'https://www.hofmann.es/blog/fotografia/tipos-de-planos-fotograficos-y-cuando-utilizarlos/',
    },
    {
      referencia:
        'Muchos Leds. (2019). <em>Temperatura de color (cálido, neutro, frío)</em>.',
      link:
        'https://muchosleds.com/en/content/6-temperatura-de-color-calido-neutro-frio',
    },
    {
      referencia:
        'Nikon. (s.f.). 5 sencillas reglas de la composición fotográfica.',
      link:
        'https://www.nikon.es/es_ES/learn-and-explore/photography-articles.tag/learn_and_explore/photography_articles/5-easy-composition-guidelines.dcr',
    },
    {
      referencia:
        'Too Many <em>Flash</em>. (2021). <em>Iluminación en fotografía: tipos y teoría de la luz</em>.',
      link: 'https://toomanyflash.com/iluminacion-en-fotografia/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Stephanie Ascanio',
        cargo: 'Experto Temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica – Regional Distrito Capital',
      },
      {
        nombre: 'Carlos Andrés Suescún Lesmes',
        cargo: 'Experto Temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica – Regional Distrito Capital',
      },
      {
        nombre: 'Luis Fernando Botero Mendoza',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Gestión Industrial – Regional Distrito Capital',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología – Regional Distrito Capital',
      },
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable Equipo de desarrollo curricular',
        centro:
          'Centro Industrial del Diseño y la Manufactura – Regional Santander',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Correctora de estilo',
        centro: 'Centro de Diseño y Metrología – Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Natalia Maldonado Delgado',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lady Adriana Ariza Luque',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Edinson Castañeda Oviedo',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Melina Tatiana Quintero Rodriguez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
