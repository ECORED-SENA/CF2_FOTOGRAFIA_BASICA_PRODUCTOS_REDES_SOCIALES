<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: white") 3
      h1 Proveedores de servicio en la nube

    .d-flex.flex-wrap.flex-xl-nowrap.align-items-center.mb-5
      .col-xl-5.position-relative
        p.position-relative(style="z-index: 1").pt-xl-4.px-xl-4 Los planos hacen referencia básicamente a la proporción que tiene lo que se va a fotografiar (producto u objeto) dentro del encuadre, para Hofmann (2021) “un plano queda definido por la cantidad de objeto principal encuadrado en la imagen o dicho de otro modo, la cantidad de área circundante que recoge el encuadre". Así, por ejemplo, no es lo mismo fotografiar solo la cara de una persona que fotografiarla de cuerpo entero. Lo primero es conocido como primer plano y lo segundo como plano entero. Y, por supuesto, cada tipo de plano tiene sus propias “reglas”, eche un "vistazo” y para conocer más al respecto, a continuación, se presentan los planos más comunes usados para fotografías en general y para redes sociales: 
        div(style="position: absolute; top: 0; left: 0; width: 140px; height: 80px; background-color: #FFF2BE; z-index: 0")
      .col-xl-7
        .tarjeta.tarjeta--azul(style="background-color: #E2F2FF").p-4.mb-5
          SlyderA(tipo="b")
            .col
              img(src='@/assets/curso/temas/tema3/img-1.png' style="max-width: 658px;").mx-auto.mb-3
              p(style="max-width: 658px;").mx-auto Los <b>planos lejanos</b> del encuadre por lo general son concordantes, neutros, muestran una idea clara de lo que se desea expresar en una toma.

            .col
              img(src='@/assets/curso/temas/tema3/img-2.png' style="max-width: 658px;").mx-auto.mb-3
              p(style="max-width: 658px;").mx-auto El gran plano general es un plano amplio, de exteriores, presenta un panorama general y no son importantes los personajes y, de salir en el plano serían diminutos, lo que hace referencia a que lo importante es la generalidad de la toma.

            .col
              img(src='@/assets/curso/temas/tema3/img-3.png' style="max-width: 658px;").mx-auto.mb-3
              p(style="max-width: 658px;").mx-auto El plano general es un plano abierto que permite conocer el escenario y se percibe cierta información necesaria para asumir posturas del sitio y los personajes, ya que se vuelven representativos.

    h1.MB-5 COMPONENTE COMPLEJO

    p.mb-5 Adicionalmente a los planos de distancia y enfoque se suma el ángulo de captura de la imagen y para eso se hace referencia a que el ángulo de toma de una fotografía se puede dividir en cuatro tipos según la altura relativa al sujeto fotografiado. Cada uno de estos cuadrantes tiene su propio significado especial y agrega significado a la imagen, los fotógrafos deben ser conscientes de esto para utilizarlo conscientemente a su favor. Los cuatro tipos de ángulos son los siguientes: 

    .row.mb-5.justify-content-center
      .col-md-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor.h-100(style="background-color: #FFF8DD")
            .tarjeta-slide__contenido.p-4
              p(style="color: black") <b style="color: black !important">Ángulo normal o medio</b>
                br
                | Hace referencia al momento en que la fotografía se toma desde el mismo nivel del objeto tomado, es decir, paralelo, esta toma no se realiza ni por encima, ni por debajo del objeto. Se utiliza para exponer o describir algo de forma natural y neutral. 
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-4.png')})`}")

      .col-md-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario
          .tarjeta-slide__contenedor.h-100(style="background-color: #FFF2BE")
            .tarjeta-slide__contenido.p-4
              p(style="color: black") <b style="color: black !important">Ángulo picado</b>
                br
                |Permite observar una imagen tomada desde un punto de vista más alto que el objeto fotografiado, es decir, de arriba hacia abajo. Esto crea un efecto de acuerdo con la perspectiva que se provoca, el objeto se observará más pequeño de lo que en realidad es. Se recomienda que si este tipo de toma es utilizado con personas la imagen puede generar connotaciones negativas, ya que causa una impresión de humillación y debilidad.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-5.png')})`}")
      
      .col-md-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario
          .tarjeta-slide__contenedor.h-100(style="background-color: #FFF8DD")
            .tarjeta-slide__contenido.p-4
              p(style="color: black") <b style="color: black !important">Ángulo contrapicado</b>
                br
                |por el contrario, a la toma anterior esta se realiza desde un lugar bajo que el objetivo tomado, haciendo que quede este mucho más alto que la cámara, teniendo en cuenta la perspectiva que se podrá observar el objetivo parecerá muy grande visualmente, lo que generará al espectador una sensación de poder, enaltecimiento e importancia.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-6.png')})`}")

      .col-md-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario
          .tarjeta-slide__contenedor.h-100(style="background-color: #FFF2BE")
            .tarjeta-slide__contenido.p-4
              p(style="color: black") <b style="color: black !important">Ángulo cenital</b>
                | Es cuando la toma se realiza en un ángulo completamente de arriba hacia abajo, perpendicular con respecto al suelo. Se puede afirmar que es lo más extremo posible de una toma de este tipo, provoca una fotografía sin perspectiva, la cual es muy representativa si se aplica a objetos pequeños e interesante si se aplica a grandes elementos.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-7.png')})`}")

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    indicadorTarjetaSlide: true,
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

<style lang="sass"></style>
