<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: white") 3
      h1 Planos técnicos de imagen

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

    .d-flex.flex-wrap.flex-xl-nowrap.col-xl-10.mx-auto.mb-5(style="background-color: #F0F8FF; padding: 2rem")
      .position-relative.col-xl-7.mb-4.mb-xl-0
        img(src='@/assets/curso/temas/tema3/img-8.png' style="max-width: 569px;")
        .img-hover-component(@mouseover="positionImgHover = 0" style="position: absolute; width: 90%; height: 92.3%; border: 2px solid white; z-index: 1; top: 4%; left: 5%;")
        .img-hover-component(@mouseover="positionImgHover = 1; indicadorImagenHover = false" style="position: absolute; width: 82%; height: 63.6%; border: 2px solid white; z-index: 2; top: 6.7%; left: 9%;")
        .img-hover-component(@mouseover="positionImgHover = 2" style="position: absolute; width: 74%; height: 38.5%; border: 2px solid white; z-index: 3; top: 9.5%; left: 13%;")
        .img-hover-component(@mouseover="positionImgHover = 3" style="position: absolute; width: 68%; height: 23%; border: 2px solid white; z-index: 4; top: 12%; left: 16%;")
        .img-hover-component(@mouseover="positionImgHover = 4" style="position: absolute; width: 60%; height: 16.5%; border: 2px solid white; z-index: 4; top: 14%; left: 20%;")
        .img-hover-component(@mouseover="positionImgHover = 5" style="position: absolute; width: 29%; height: 11%; border: 2px solid white; z-index: 4; top: 17%; left: 41.5%;")
        .indicador--hover.d-none.d-md-flex(v-if="indicadorImagenHover")
        .indicador--click.d-block.d-md-none(v-if="indicadorImagenHover")
      .col-xl-5.p-xl-5
        div(v-if="positionImgHover == 0")
          img(src="@/assets/curso/temas/tema3/c-img-1.svg" style="max-width: 146px").mb-4
          h3 01. Plano entero
          p es un <b>plano diseñado</b> para la presentación de un personaje u objeto, al poderlo ver en su totalidad, es decir, de pies a cabeza se podrá reconocer a primera medida, no solo quién es sino también cómo viste y su actitud. En fin, permite tener puntos específicos de él.

        div(v-if="positionImgHover == 1")
          img(src="@/assets/curso/temas/tema3/c-img-2.svg" style="max-width: 146px").mb-4
          h3 02. Plano americano
          p El <b>plano americano</b> va desde la cabeza hasta arriba de las rodillas; es importante que termine encima de estas y nunca en ellas. 

        div(v-if="positionImgHover == 2")
          img(src="@/assets/curso/temas/tema3/c-img-3.svg" style="max-width: 146px").mb-4
          h3 03. Plano medio largo
          p El <b>plano medio largo</b> va desde la cabeza hasta arriba de la cintura. Son planos cada vez más cercanos a los personajes.

        div(v-if="positionImgHover == 3")
          img(src="@/assets/curso/temas/tema3/c-img-4.svg" style="max-width: 146px").mb-4
          h3 04. Primer plano
          p El <b>primer plano</b> involucra desde la cabeza hasta debajo de los hombros. Deben salir los hombros para que corresponda a un primer plano. 
        
        div(v-if="positionImgHover == 4")
          img(src="@/assets/curso/temas/tema3/c-img-5.svg" style="max-width: 109px; margin-left: 14.3px; margin-top: 22px;").mb-4
          h3 05. Primerísimo primer plano
          p El <b>primerísimo primer plano</b> va cerrado al rostro, corta parte de la cabeza y el cuello. Este plano ya es muy cercano y se utiliza para destacar alguna facción. 
        
        div(v-if="positionImgHover == 5")
          img(src="@/assets/curso/temas/tema3/c-img-6.svg" style="max-width: 101px; margin-left: 22.3px; margin-top: 22px;").mb-4
          h3 06. Plano de detalle
          p El <b>plano de detalle</b> es completamente cerrado que muestra únicamente eso que se necesita ver, no interesa nada más.

    p.mb-5 Adicionalmente a los planos de distancia y enfoque se suma el ángulo de captura de la imagen y para eso se hace referencia a que el ángulo de toma de una fotografía se puede dividir en cuatro tipos según la altura relativa al sujeto fotografiado. Cada uno de estos cuadrantes tiene su propio significado especial y agrega significado a la imagen, los fotógrafos deben ser conscientes de esto para utilizarlo conscientemente a su favor. Los cuatro tipos de ángulos son los siguientes: 

    .row.mb-5.justify-content-center
      .col-md-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor.h-100
            .tarjeta-slide__contenido(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-4.png')})`}" style="background-size: cover; height: 100%; width: 100%; min-height: 458px")
            .tarjeta-slide__img.p-4(style="background-color: #FFF8DD")
              p(style="color: black") <b style="color: black !important">Ángulo normal o medio</b>
                br
                | Hace referencia al momento en que la fotografía se toma desde el mismo nivel del objeto tomado, es decir, paralelo, esta toma no se realiza ni por encima, ni por debajo del objeto. Se utiliza para exponer o describir algo de forma natural y neutral. 

      .col-md-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario
          .tarjeta-slide__contenedor.h-100
            .tarjeta-slide__contenido(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-5.png')})`}" style="background-size: cover; height: 100%; width: 100%; min-height: 458px")
            .tarjeta-slide__img.p-4(style="background-color: #FFF2BE")
              p(style="color: black") <b style="color: black !important">Ángulo picado</b>
                br
                |Permite observar una imagen tomada desde un punto de vista más alto que el objeto fotografiado, es decir, de arriba hacia abajo. Esto crea un efecto de acuerdo con la perspectiva que se provoca, el objeto se observará más pequeño de lo que en realidad es. Se recomienda que si este tipo de toma es utilizado con personas la imagen puede generar connotaciones negativas, ya que causa una impresión de humillación y debilidad.
      
      .col-md-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario
          .tarjeta-slide__contenedor.h-100
            .tarjeta-slide__contenido(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-6.png')})`}" style="background-size: cover; height: 100%; width: 100%; min-height: 458px")
            .tarjeta-slide__img.p-4(style="background-color: #FFF8DD")
              p(style="color: black") <b style="color: black !important">Ángulo contrapicado</b>
                br
                |por el contrario, a la toma anterior esta se realiza desde un lugar bajo que el objetivo tomado, haciendo que quede este mucho más alto que la cámara, teniendo en cuenta la perspectiva que se podrá observar el objetivo parecerá muy grande visualmente, lo que generará al espectador una sensación de poder, enaltecimiento e importancia.

      .col-md-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario
          .tarjeta-slide__contenedor.h-100
            .tarjeta-slide__contenido(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-7.png')})`}" style="background-size: cover; height: 100%; width: 100%; min-height: 458px")
            .tarjeta-slide__img.p-4(style="background-color: #FFF2BE")
              p(style="color: black") <b style="color: black !important">Ángulo cenital</b>
                | Es cuando la toma se realiza en un ángulo completamente de arriba hacia abajo, perpendicular con respecto al suelo. Se puede afirmar que es lo más extremo posible de una toma de este tipo, provoca una fotografía sin perspectiva, la cual es muy representativa si se aplica a objetos pequeños e interesante si se aplica a grandes elementos.


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    indicadorTarjetaSlide: true,
    positionImgHover: 0,
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
.img-hover-component
  cursor: pointer
  &:hover
    border: 3px solid #67EBFD !important
</style>
