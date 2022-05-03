<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: white") 1
      h1 Fotografía
    
    .d-flex.flex-wrap.flex-lg-nowrap.mb-5
      .col-lg-5
        img(src="@/assets/curso/temas/tema1/img-1.png" style="max-width: 460px")
      p.col-lg-7.mb-0 <b>“Para la fotografía, la luz es el elemento fundamental, la materia prima” (<em>Too many flash</em>, 2021)</b>, así la iluminación se llama en fotografía el impacto que hace la luz  sobre un objeto; por tanto, es un elemento que se considera vital para su realización. La calidad del resultado fotográfico es <b>directamente proporcional a la intervención de la luz</b>; la cual puede ser manipulada desde la cámara fotográfica a partir de características tales como el ISO, la velocidad de obturación, la apertura del diafragma y el exposímetro o, de forma externa con las fuentes controladas de luz; todas estas características ayudan a determinar cuánta cantidad de luz o de sombra se desea en una fotografía. La iluminación en la fotografía no solo sirve para controlar luces y sombras, también sirve como elemento de construcción de la emoción, sensación y percepción de la imagen. La luz ayuda a contar historias y a componer mensajes visuales por medio de sus cualidades, que <b>son 4 según Xataka (2015)</b>:
  
    .d-flex.mb-5.py-5
      div(style="margin-left: -3rem; padding-top: .5rem; padding-bottom: .5rem; padding-left: 3rem; border-top-right-radius: 11px; background-color: #C9DFF1; position: relative; padding-right: 80px; min-width: 250px")
        h3.mb-0 Calidad
        img(src="@/assets/curso/temas/tema1/decorador.svg" style="width: 83px; position: absolute; right: -40px; top: -25px")

    p.mb-5 Es la forma de propagación  e intensidad de la luz, sin importar de qué fuente proviene: sol, lámpara eléctrica o el fuego de una vela. <b>Se mide por la transición que sucede entre luces y sombras</b>. Si se ve que la transición entre luz y sombra es marcada se está hablando de luz dura, mientras que, si la transición es más homogénea y pareja se puede determinar como <b>luz suave</b>, en el siguiente comparativo es clara la demostración de calidad.
    .d-flex.flex-wrap.flex-md-nowrap.justify-content-center.mb-5
      img(src="@/assets/curso/temas/tema1/img-2.png" style="max-width: 295px").pe-0.pe-md-3.mt-0.mt-md-5.mb-4.mb-md-auto
      img(src="@/assets/curso/temas/tema1/img-3.png" style="max-width: 295px").ps-0.ps-md-3.mb-auto

    p.mb-5 Para dar mayor claridad al concepto se recomienda revisar en detalle el siguiente video en el que se explica el concepto:

    figure.mb-5.video1
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .d-flex.mb-5.py-5
      div(style="margin-left: -3rem; padding-top: .5rem; padding-bottom: .5rem; padding-left: 3rem; border-top-right-radius: 11px; background-color: #C9DFF1; position: relative; padding-right: 80px; min-width: 250px")
        h3.mb-0 Intensidad
        img(src="@/assets/curso/temas/tema1/decorador.svg" style="width: 83px; position: absolute; right: -40px; top: -25px")
    p.mb-5 Es la fuerza con la que se propaga o incide la luz en un objeto y también depende de la distancia que existe entre la fuente de luz y el objeto a fotografiar, por ejemplo: la intensidad de la luz solar al atardecer (baja intensidad) no es la misma que al mediodía (alta intensidad).
      br
      br
      | En la siguiente muestra fotográfica puede evidenciarse cómo impacta la intensidad de la luz según la distancia desde la que se dispone la fuente de luz.
    
    .d-flex.flex-wrap.flex-md-nowrap.justify-content-center.mb-5
      img(src="@/assets/curso/temas/tema1/img-4.png" style="max-width: 295px").pe-0.pe-md-3.mb-auto
      img(src="@/assets/curso/temas/tema1/img-5.png" style="max-width: 295px").ps-0.ps-md-3.mt-0.mt-md-5.mb-4.mb-md-auto

    .d-flex.mb-5.py-5
      div(style="margin-left: -3rem; padding-top: .5rem; padding-bottom: .5rem; padding-left: 3rem; border-top-right-radius: 11px; background-color: #C9DFF1; position: relative; padding-right: 80px; min-width: 250px")
        h3.mb-0 Temperatura de color
        img(src="@/assets/curso/temas/tema1/decorador.svg" style="width: 83px; position: absolute; right: -40px; top: -25px")

    p.mb-5 <b>El color va muy de la mano de la luz y de la intensidad</b>, según la intensidad de la luz una fotografía varía su color, sus matices y sus contrastes. Según <b>leds.com</b>, un blog muy reconocido de fotografía (2019) <b>“la temperatura de color de una fuente de luz se define comparando su color dentro del espectro luminoso con el de la luz que emitiría un cuerpo negro calentado a una temperatura determinada”</b>, en ese sentido a temperatura cálida se acerca a los tonos amarillos, naranjas y rojizos y, la temperatura fría hacia los tonos azules como se representa a continuación:

    img(src="@/assets/curso/temas/tema1/img-6.svg").col-12.col-md-11.col-xl-8.mx-auto.py-5.mb-5

    p.mb-5 Esta propiedad se encuentra asociada a las rectas imaginarias que, de alguna forma, <b>indican la trayectoria que sigue la luz</b>. Pero lo realmente importante es que la dirección de la luz permite reforzar o suavizar el volumen, el color y la forma del objeto que se está fotografiando. A la hora de iluminar un objeto o una escena se tiene cinco opciones. La luz frontal minimiza el volumen y las sombras y ofrece colores puros. La luz trasera; sin embargo, acentúa las sombras, atenúa el color y define el contorno de los objetos.
      br
      br
      | Las otras direcciones que se relacionan a la imagen son como dice Xataka (2015) <b>“la lateral, que acentúa el relieve, la textura y alarga las sombras. La cenital incide en los objetos desde arriba y da sensación de profundidad, debido a que permite separar los objetos situados en el primer plano del fondo. La opuesta a la luz cenital es la nadir. Por tanto, ilumina los objetos desde abajo y produce sombras muy poco naturales, debido a que es poco frecuente en la naturaleza (solo aparece cuando la luz se refleja en la nieve, en el agua, etc.)”</b>, con estos detalles se da paso al trabajo con la luz que dará como resultado grandiosas fotografías.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.col-12.col-md-9.mx-auto.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-7.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Cuando se hace referencia a la iluminación en fotografía se debe tener en cuenta las <b>fuentes lumínicas</b>, para efectos de generalizar este concepto se tendrán en cuenta las siguientes fuentes de luz, por un lado la luz natural que es producida por los rayos de sol y el cosmos, y por otro lado, la luz artificial que es producida por fuentes lumínicas artificiales tal como se había revisado con anterioridad. 

    p.mb-5 Por otra parte, es importante mencionar que en la construcción de la imagen en un dispositivo fotográfico se requiere una fuente de luz, esta puede ser natural, artificial o mixta.  
    
    .titulo-segundo.color-acento-contenido
      h2#t_1_1 1.1 Iluminación con luz natural

    p.mb-5 En esta, <b>la fuente de luz es el sol</b>. Esta fuente de iluminación es ideal para fotógrafos que desean crear <b>ambientes naturales y reales</b>. En este tipo de iluminación, la fuente de luz es cambiante, bien sea por el clima o por la posición del sol a las diferentes horas del día y épocas del año. La luz natural es continua, es decir, una luz que permite ver en tiempo real cómo esta incide sobre los productos a fotografiar, dejando ver las sombras que se producen al igual que la calidad de luz (<b>luz fuerte o suave</b>) que se obtendrá al final de la fotografía.

    .d-flex.flex-wrap.mb-5.col-12.col-lg-10.mx-auto
      .col-lg-4.px-md-2.mb-4.mx-auto
        .container-interactive-hover-text(@mouseover="indicadorImagenHover = false")
          .indicador--hover.d-none.d-md-flex(v-if="indicadorImagenHover")
          .indicador--click.d-block.d-md-none(v-if="indicadorImagenHover")
          img(src="@/assets/curso/temas/tema1/img-8.png")
          .container-body-text
            p.title.fw-bold Mañana
            p.content En las horas de la mañana entre <b>7:00</b> y <b>11:00 a.m.</b> el sol estará en posiciones adecuadas para fotografiar un elemento sin sombras muy marcadas como se ve en la imagen. 
      .col-lg-4.px-md-2.mb-4.mx-auto
        .container-interactive-hover-text(@mouseover="indicadorImagenHover = false")
          .indicador--hover.d-none.d-md-flex(v-if="indicadorImagenHover")
          .indicador--click.d-block.d-md-none(v-if="indicadorImagenHover")
          img(src="@/assets/curso/temas/tema1/img-9.png")
          .container-body-text
            p.title.fw-bold Mediodía
            p.content En las horas del mediodía entre <b>12:00 p.m.</b> y <b>2:00 p.m.</b> el sol estará muy fuerte y en posición cenital (centro superior), lo cual provocará sombras muy marcadas y definidas como se ve en el ejemplo.  
      .col-lg-4.px-md-2.mb-4.mx-auto
        .container-interactive-hover-text(@mouseover="indicadorImagenHover = false")
          .indicador--hover.d-none.d-md-flex(v-if="indicadorImagenHover")
          .indicador--click.d-block.d-md-none(v-if="indicadorImagenHover")
          img(src="@/assets/curso/temas/tema1/img-10.png")
          .container-body-text
            p.title.fw-bold Tarde
            p.content En las horas de la tarde, entre <b>4:00 p.m.</b> y <b>6:00 p.m.</b> (también llamada hora dorada), el sol estará en posición horizontal produciendo poca iluminación y sombras suaves y alargadas. 

    .col-12.col-lg-10.mx-auto.mb-5.d-flex.flex-wrap.flex-xl-nowrap
      .col-12.col-xl-7.mb-4
        .cajon.color-acento-botones.p-4.mb-4(style="background-color: #FBF4DC").d-flex
          img(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 89px").mx-3
          p <b>Nota:</b> no se toma fotografía nocturna porque la exposición de luz no es la suficiente de manera natural para que la imagen se vea, si quiere hacer el ejercicio tome una foto con su teléfono o cámara sin <em>flash</em> a las <b>9:15 p.m.</b> en la mitad de un campo sin alumbrado y verá el resultado.
        p.mb-0 La iluminación natural es afectada en su calidad por varios factores, entre ellos uno muy importante son las nubes; estas, debido a su densidad hacen el papel de difusor y se encargan de tamizar la luz, haciéndola más suave con su presencia o más dura en su ausencia.  Es así como la iluminación natural es una fuente de luz versátil, económica y se encuentra presente y a la mano para desarrollar fotografías profesionales óptimas.
      .col-12.col-xl-5.position-relative.ps-4.mb-auto.d-flex.justify-content-center
        img(src="@/assets/curso/temas/tema1/img-11.png" style="max-width: 400px").mx-auto
        p.mx-auto(style="max-width: 400px; font-weight: bold; font-size: 13px; background-color: #C4DBEE; padding: .5rem 1rem; position: absolute; bottom: -15px") Esta es una fotografía realizada con luz natural entrante por una ventana.

    p.mb-5 Para ver el proceso de realización de una fotografía con luz natural se le recomienda revisar el siguiente video, que es elaborado por la instructora para explicar la composición con luz natural:

    figure.mb-5.video1
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .titulo-segundo.color-acento-contenido
      h2#t_1_2 1.2 Iluminación con <em>flash</em> en estudio
    
    .d-flex.flex-wrap.flex-xl-nowrap.mb-5
      p.col-12.col-xl-7.order-2.order-xl-1.pe-0.pe-xl-4 El <em>flash</em> es una fuente de iluminación artificial que se compone de lámparas de descarga eléctrica, cuya duración de destello es en promedio 1/125 segundos. Es una luz no continua, es decir, no se puede ver en tiempo real la incidencia de la luz y las sombras que esta produce en el objeto a fotografiar, esa luz permanece por muy poco tiempo en el aire, tiempo que corresponde a la toma fotográfica. Una de sus principales características es simular la luz natural del día en su temperatura de color y en su intensidad. 
        br
        br
        |La intensidad de los destellos del <em>flash</em> es graduable según las necesidades de iluminación y ayuda a rellenar las sombras o partes oscuras del producto a fotografiar, debe utilizarse teniendo en cuenta la velocidad de obturación y la apertura del diafragma de la cámara para obtener el resultado deseado.
        br
        br
        |Existen tres tipos de presentaciones de luces <em>flash</em>, diferenciados como se muestra en el siguiente recurso:
      img(src="@/assets/curso/temas/tema1/img-12.png" style="max-width: 505px").col-12.col-xl-5.order-1.order-xl-2.mx-auto
  
    .d-flex.mb-5.py-5
      div(style="margin-left: -3rem; padding-top: .5rem; padding-bottom: .5rem; padding-left: 3rem; border-top-right-radius: 11px; background-color: #C9DFF1; position: relative; padding-right: 80px; min-width: 250px")
        h3.mb-0 Tipo A- <em>Flash</em> incorporado
        img(src="@/assets/curso/temas/tema1/decorador.svg" style="width: 83px; position: absolute; right: -40px; top: -25px")

    .col-12.col-xl-10.mx-auto.d-flex.flex-wrap.flex-xl-nowrap.align-items-center
      p.col-12.col-lg-5.pe-0.pe-lg-4.mb-0 El dispositivo de luz artificial viene incorporado a la cámara, esta forma no permite programar la intensidad del destello de luz, el hecho de tener el <em>flash</em> integrado lo hace muy versátil. 
      img(src="@/assets/curso/temas/tema1/img-13.png" style="max-width: 610px").col-12.col-lg-7

    .d-flex.mb-5.py-5
      div(style="margin-left: -3rem; padding-top: .5rem; padding-bottom: .5rem; padding-left: 3rem; border-top-right-radius: 11px; background-color: #C9DFF1; position: relative; padding-right: 80px; min-width: 250px")
        h3.mb-0 Tipo B - <em>Flash</em> de mano o portátil
        img(src="@/assets/curso/temas/tema1/decorador.svg" style="width: 83px; position: absolute; right: -40px; top: -25px")

    .col-12.col-xl-10.mx-auto.d-flex.flex-wrap.flex-xl-nowrap.align-items-center.mb-5
      img(src="@/assets/curso/temas/tema1/img-14.png" style="max-width: 295px").col-12.col-lg-4.mx-auto.mb-4.mb-lg-0
      p.col-12.col-lg-8.pe-0.ps-lg-4.mb-0  El <em>flash</em> es un dispositivo aparte de la cámara fotográfica, esto permite mayor movilidad y ubicación en diferentes posiciones y ángulos. Con estos dispositivos se puede programar la intensidad del destello de luz. Su funcionamiento se hace gracias a un cable adaptador o directamente sobre la cámara en una parte específica llamada zapata, incluso algunos trabajan de forma remota por medio de tecnología de avanzada y funciona con baterías.
        br
        br
        |Es importante tener en cuenta que existen varios accesorios que complementan el <em>flash</em> de mano o portátil: 

    TabsA.color-acento-botones.mb-5.pestanas-a
      .tarjeta.color-acento-botones--borde.p-4(titulo="Cajas de luz" style="background-color: #F0F8FF; border-color: #F0F8FF;")
        .d-flex.flex-wrap.flex-xl-nowrap.align-items-center
          img(src="@/assets/curso/temas/tema1/img-18.png" style="max-width: 400px").col-12-col-xl-5.mb-auto
          p.col-12-col-xl-7.ps-lg-4.mb-0 <b>Cajas de luz</b>
            br
            br
            |Es un accesorio portátil de iluminación, con forma de caja flexible que se adapta a una fuente de luz artificial. En su interior, sus paredes son de un material reflectivo que ayuda a potenciar el destello del <em>flash</em>. En unas de sus caras contiene una pantalla difusora por donde la luz atraviesa, suavizando el destello, y creando una luz más suave y homogénea.
      
      .tarjeta.color-acento-botones--borde.p-4(titulo="Difusor" style="background-color: #F0F8FF; border-color: #F0F8FF;")
        .d-flex.flex-wrap.flex-xl-nowrap.align-items-center
          img(src="@/assets/curso/temas/tema1/img-19.png" style="max-width: 278px").col-12.col-xl-4.mb-auto
          p.col-12-col-xl-8.ps-lg-4.mb-0 <b>Difusor</b>
            br
            br
            | Es un accesorio portátil de iluminación, puede ser de tela o material translúcido que suaviza la intensidad de la luz. 
    
      .tarjeta.color-acento-botones--borde.p-4(titulo="Zapata para el <em>flash</em>" style="background-color: #F0F8FF; border-color: #F0F8FF;")
        .d-flex.flex-wrap.flex-xl-nowrap.align-items-center
          img(src="@/assets/curso/temas/tema1/img-20.png" style="max-width: 250px").col-12.col-xl-4.mb-auto
          p.col-12-col-xl-8.ps-lg-4.mb-0 <b>Zapata para el <em>flash</em></b>
            br
            br
            | Es un accesorio incorporado en cámaras digitales SLR y tradicionales, que permite poner unidades externas de <em>flash</em>. 

    p.mb-5 Son unidades de fuente de energía que vienen separadas de la cámara y son utilizadas en producciones de fotografía que requieren mayor intensidad de luz. Tienen una potencia mayor a los otros dos tipos, a los cuales se les puede graduar su intensidad de destello. Pueden combinarse dos, tres o más unidades para recrear diferentes esquemas de iluminación. Además, cuentan con una luz de modelado incorporada, la cual es continua y permite ver en tiempo real cómo esta incide sobre los productos a fotografiar.     En algunos escenarios estos elementos son usados para realizar videos.

    .d-flex.flex-wrap.mb-5
      img(src="@/assets/curso/temas/tema1/img-15.png" style="max-width: 350px").col-12.col-md-12.col-xl-4.mx-auto.mb-4.mb-xl-0
      img(src="@/assets/curso/temas/tema1/img-16.png" style="max-width: 315px").col-12.col-md-12.col-xl-4.mx-auto.mb-4.mb-xl-0
      img(src="@/assets/curso/temas/tema1/img-17.png" style="max-width: 295px").col-12.col-md-12.col-xl-4.mx-auto.mb-4.mb-xl-0

    p.mb-5 Es importante tener en cuenta que existen varios accesorios para las cabezas de <em>flash</em>, diferenciados así: 

    AcordionA.mb-5.acordeon-a(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row.align-items-center(titulo="Trípode de luz")
        img(src='@/assets/curso/temas/tema1/img-21.png' style="max-width: 250px").col-lg-3.ms-auto
        .col-lg-9.mb-4.mb-md-0.pe-lg-5
          p Un trípode es un módulo con tres patas y una parte superior circular o triangular que puede estabilizar el objeto y evitar que se mueva por sí solo. La palabra proviene de la palabra griega tripos, que significa “3 pies”, se utiliza como soporte de las cabezas de <em>flash</em>.
      
      .row.align-items-center(titulo="Sombrillas")
        .col-lg-7.mb-4.mb-md-0.pe-lg-5.ms-lg-auto
          p <b>Sombrillas:</b> es un accesorio portátil de iluminación con forma de sombrilla que al abrirla tamiza y/o rebota la luz del <em>flash</em>. En el mercado se consiguen en varios colores, blanco, plateado y dorado.
        img(src='@/assets/curso/temas/tema1/img-22.png' style="max-width: 427px").col-lg-4
      
      .row.align-items-center(titulo="Cajas de luz")
        .col-lg-7.mb-4.mb-md-0.pe-lg-5.ms-lg-auto
          p.mb-0 <b>Cajas de luz:</b> así como las cajas de luz de mano se pueden usar para espacios no muy grandes y son portátiles, de llevar estas cajas de luz independientes de gran tamaño cumplen la misma misión solo que se usan para espacios más grandes, que requieren iluminación de manera fija, esta caja es un accesorio portátil de iluminación, con forma de caja flexible que se adapta a una fuente de luz artificial. En su interior, sus paredes son de un material reflectivo que ayuda a potenciar el destello del <em>flash</em>. En unas de sus caras contiene una pantalla difusora por donde la luz atraviesa, suavizando el destello y creando una luz más suave y homogénea.       
        img(src='@/assets/curso/temas/tema1/img-23.png' style="max-width: 250px").col-lg-4.mx-auto

      .row.align-items-center(titulo="Difusor")
        .col-lg-7.mb-4.mb-md-0.pe-lg-5.ms-lg-auto
          p.mb-0 <b>Difusor:</b> accesorio portátil de iluminación, puede ser de tela o de material translúcido que suaviza la luz. En el mercado se consiguen en varios colores, blanco, negro, plateado y dorado.
        img(src='@/assets/curso/temas/tema1/img-24.png' style="max-width: 250px").col-lg-4.mx-auto

      .row.align-items-center(titulo="Reflector de <em>flash</em>")
        .col-lg-7.mb-4.mb-md-0.pe-lg-5.ms-lg-auto
          p.mb-0 <b>Reflector de <em>flash</em>:</b> es un accesorio de iluminación en forma de cono metálico, utilizado para controlar la luz del <em>flash</em>.
        img(src='@/assets/curso/temas/tema1/img-25.png' style="max-width: 400px").col-lg-4.mx-auto

    p.mb-5 De este modo con la utilización de la iluminación de flash y de sus accesorios se pueden realizar fotografías con una óptima calidad, sin importar las circunstancias que se puedan presentar en un lugar con poca o ninguna iluminación natural.

    .tarjeta.color-primario.p-3.mb-5.col-xl-10.mx-auto(style="background: linear-gradient(0deg, rgba(103,235,253,1) 0%, rgba(131,239,254,1) 25%, rgba(167,244,255,1) 75%, rgba(180,246,255,1) 100%);")
      .row.justify-content-around.align-items-center
        .col-xl-1
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.pe-xl-5
              h3.mb-1(style="color: black !important") Aprender a iluminar en fotografía
              p.text-small(style="color: black !important") Para profundizar en el contenido de iluminación en el arte fotográfico se recomienda que lea  las páginas 4 a la 9 del texto <b style="color: black !important">Aprender a iluminar en fotografía.</b>
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                span(style="color: black !important") Descargar
                i.fas.fa-file-download(style="color: black !important")
    
    .titulo-segundo.color-acento-contenido
      h2#t_1_3 1.3 Iluminación mixta

    .d-flex.flex-wrap.align-items-center.mb-5(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-1.svg')})`}" style="background-repeat: no-repeat; background-position: center; margin-right: -3rem; margin-left: -3rem; padding-left: 3rem; padding-right: 3rem;")
      .d-flex.flex-wrap.flex-xl-nowrap.w-100.mb-5
        p.col-xl-5.order-2.order-xl-1.pe-xl- Se denomina iluminación mixta a los esquemas que contienen las <b>dos fuentes de luz en la misma fotografía</b>, natural <b>(sol)</b> y artificial <b>(lámparas, leds, flashes o luces de estudio)</b>. Se debe programar la cámara en modo manual y realizar una lectura correcta del exposímetro para ajustar la velocidad de obturación y apertura del diafragma, con el propósito de obtener una fotografía debidamente expuesta según las circunstancias de luz. Estos dos tipos de iluminación se complementan entre sí. Por un lado, la luz natural permite ver en tiempo real las sombras que se producen y por el otro lado, la luz artificial permite iluminar las partes oscuras a las que la luz natural no alcanza a llegar.
          br
          br
          | La realización del esquema de iluminación para la foto expuesta se puede ver en el siguiente video que muestra los pormenores en el tipo de iluminación mixta:
        .col-xl-7.order-1.order-xl-2.mx-auto.mb-4.mb-xl-0.ms-xl-3
          img(src='@/assets/curso/temas/tema1/img-26.png' style="max-width: 710px").mb-3
          p <b>Nota.</b> Ejemplo de una fotografía realizada con el tipo de iluminación mixta.

      figure.mb-5.video1
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .titulo-segundo.color-acento-contenido
      h2#t_1_4 1.4. Triángulo básico de iluminación

    p.mb-5 Para desarrollar y crear una iluminación adecuada y propositiva solo es necesario poner en la posición correcta tres tipos de fuentes de luz alrededor del objeto a fotografiar, cada una de las tres luces cumple una función específica en el triángulo básico de iluminación según las características lumínicas de cada una, como se muestra a continuación:
    .d-flex.flex-wrap.flex-xl-nowrap.mb-5
      img(src='@/assets/curso/temas/tema1/img-27.svg' style="max-width: 530px").col-xl-6.mx-auto
      SlyderE(indicadores="derecha" style="background-color: #F6F6F6").p-4.col-xl-6.mx-auto.my-auto
        .col
          p <b>Luz principal</b>
            br
            |Es la más importante, ya que es la luz con más intensidad, lo que hace que sea la que predomina en la fotografía. A partir de la posición de esta fuente lumínica se establecerá la trayectoria de la luz y esta a su vez demarcará las sombras principales. Estas sombras luego servirían de guía para posicionar las otras dos luces.
            br
            br
            |<b>Usualmente la luz principal se coloca a 45 grados del objeto o producto a fotografiar.</b>
        .col
          p <b>Luz secundaria</b>
            br
            |Debe ser una fuente con menor intensidad que la luz principal. Su función es la de rellenar, suavizar o quitar las sombras que se producen por la posición de la luz principal.
            br
            br
            <b>|Usualmente, la luz secundaria se posiciona a los 135 grados del objeto o producto a fotografiar.</b>
        .col
          p <b>Luz detalle</b>
            br
            |Es una fuente de luz con una intensidad menor a la luz principal y a la luz secundaria. Su característica principal es que es una luz puntual y por ello, el fotógrafo elige la posición según sus necesidades. Es utilizada para resaltar detalles importantes del objeto o producto a fotografiar.
            br
            br
            | No siempre está detrás del objeto, esta luz rota en los 360º según la necesidad.

    p.mb-5 Iluminar en un estudio es una de las mayores habilidades de un fotógrafo, tal como lo verá en el siguiente video la iluminación inicia desde la luz o desde la oscuridad:

    figure.mb-5.video1
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    p.mb-5 A manera de práctica propuesta es necesario que aplique los esquemas de iluminación vistos con el software gratuito llamado Lighting Diagram disponible en <a href="http://www.lightingdiagrams.com/Creator" target="_blank">http://www.lightingdiagrams.com/Creator</a> y para hacer la práctica de la mejor manera se recomienda revisar el tutorial de uso en el siguiente video:

    figure.mb-5.video1
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .titulo-segundo.color-acento-contenido
      h2#t_1_5 1.5. Empleo del flex

    p.mb-5 El flex es un accesorio de iluminación que no emite luz, su misión es reflejar la luz que recibe de otra fuente sin importar de qué tipo sea, natural o artificial. 

    img(src='@/assets/curso/temas/tema1/img-28.png').col-xl-8.mx-auto.mb-5

    p.mb-5 El flex cumple con las siguientes funciones de iluminación:

    .tarjeta.tarjeta--azul(style="background-color: #F0F8FF").py-5.mb-5
      SlyderA.slide-tipo-a
        .d-flex.flex-wrap.flex-xl-nowrap.align-items-center.col-10.mx-auto
          p.col-xl-7 <b>Rebotar la luz</b>
            br
            br
            | Por medio del rebote de la luz el flex cumple con la función de iluminar las áreas oscuras de la fotografía. El flex tiene dos colores de superficie: <b>dorado y plateado</b>, los cuales tienen diferentes funcionalidades. El lado dorado sirve para fotografías con una temperatura de color <b>cálida</b> y el lado plateado para fotografías con una temperatura de color <b>fría</b>.
          img(src='@/assets/curso/temas/tema1/img-29.png' style="max-width: 400px").col-xl-5.mx-auto
        
        .d-flex.flex-wrap.flex-xl-nowrap.align-items-center.col-10.mx-auto
          p.col-xl-7 <b>Difuminar y tamizar la luz</b>
            br
            br
            | Uno de sus lados es de material <b>translúcido</b>, el cual sirve para difuminar o tamizar una luz muy fuerte y así suavizarla.
          img(src='@/assets/curso/temas/tema1/img-30.png' style="max-width: 253px").col-xl-5.mx-auto

        .d-flex.flex-wrap.flex-xl-nowrap.align-items-center.col-10.mx-auto
          p.col-xl-7 <b>Absorción de luz</b>
            br
            br
            | El lado oscuro del flex, que es de color <b>negro</b>, cumple con la función de absorber la luz. Se utiliza en situaciones de luz abundante para aportar sombras y/o oscuridad a la fotografía.
          img(src='@/assets/curso/temas/tema1/img-31.png' style="max-width: 253px").col-xl-5.mx-auto
        

    p.mb-5 El flex funciona como un <b>asistente para los fotógrafos</b>, tal como lo puede ver en el siguiente video:

    figure.mb-5.video1
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-5 Para entender más sobre el funcionamiento del flex se recomienda revisar los siguientes videos:

    figure.mb-5.video1
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    indicadorImagenHover: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.container-interactive-hover-text
  position: relative
  overflow: hidden
  border-radius: 15px
  max-width: 295px
  img
    width: 100%
  .container-body-text
    position: absolute
    top: calc(100% - 73px)
    bottom: auto
    width: 100%
    height: 100%
    background-color: #FFD947D0
    padding-right: 2rem
    padding-left: 2rem
    transition: all .5s ease-in-out
    .title
      padding-top: 25px
      padding-bottom: 25px
      margin-bottom: 0
      widows: 100%
      text-align: center
  &:hover
    .container-body-text
      background-color: #FFD947F0
      top: 0
.pestanas-a .tabs-a__tab
  background-color: #E8E8E8
.acordeon-a
  .tarjeta
    transition: all .4s linear
  .acordion__activo
    background-color: #F0F8FF
.slide-tipo-a
  .slyder-a__bullets
    bottom: -20px
</style>
