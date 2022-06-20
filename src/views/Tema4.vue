<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: white") 4
      h1 Ritmo visual

    .d-flex.flex-wrap.flex-xl-nowrap.align-items-center.mb-5.col-xl-10.mx-auto
      img(src='@/assets/curso/temas/tema4/img-1.png' style="max-width: 400px").col-xl-5.mx-auto.mb-4.mb-xl-0
      .position-relative.col-xl-7
        p.position-relative(style="z-index: 1") Es un elemento dinámico relacionado con la temporalidad en la percepción de la imagen, para lograr una foto visualmente rítmica se necesita encontrar múltiples objetos del mismo tema: líneas, formas, tonos y repeticiones de color. Sobre todo es la disposición de formas cuadradas, circulares y rectangulares lo que crea una armonía visual al ordenarse y repetirse de acuerdo con el patrón. Se utiliza para aportar dinamismo, lo que produce movimiento fotográfico, también es adecuado para la composición fotográfica. Se ha propuesto crear una imagen que esté en armonía con el objeto y que sea agradable a los ojos del espectador.
        div(style="position: absolute; bottom: 0; right: 0; width: 140px; height: 80px; background-color: #FFF2BE; z-index: 0")
    p.mb-5 Existen cinco tipologías de ritmo visual en el mundo de la fotografía, con los cuales se pueden crear una diversidad de proyectos. Dichos tipos no son más que fotos, las cuales están en el día a día del ser humano, se recomienda cuidar el aspecto y no realizar tomas sin componer la imagen con un propósito determinado, diferenciados de la siguiente forma:

    AcordionA.mb-5.acordeon-a(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .d-flex.flex-wrap.flex-lg-nowrap.align-items-center(titulo="El ritmo uniforme")
        img(src='@/assets/curso/temas/tema4/img-2.png' style="max-width: 315px").col-lg-4.mx-auto.ms-lg-5.mb-4.mb-lg-0
        p.col-lg-8.ps-lg-4 Se conoce de esta forma en el mundo de la fotografía al ritmo en el que se <b>repiten las formas continuamente</b> como su nombre lo indica, este tipo de ritmo unificado en la fotografía pretende mostrar la duplicación de elementos en un orden particular. Esto crea una vista armoniosa para el espectador en el entorno fotográfico.

      .d-flex.flex-wrap.flex-lg-nowrap.align-items-center(titulo="El ritmo alterno")
        img(src='@/assets/curso/temas/tema4/img-3.png' style="max-width: 315px").col-lg-4.mx-auto.ms-lg-5.mb-4.mb-lg-0
        p.col-lg-8.ps-lg-4 Este tipo de ritmo en fotografía se encarga de intercambiar las imágenes, siguiendo un patrón que <b>armoniza diferentes objetos</b> dando dinamismo, consiguiendo la atención de quien realiza la toma. Dicho ritmo podrá tener formas diferentes, texturas, colores e incluso una mayor sensación de movimiento.

      .d-flex.flex-wrap.flex-lg-nowrap.align-items-center(titulo="El ritmo radial")
        img(src='@/assets/curso/temas/tema4/img-4.png' style="max-width: 315px").col-lg-4.mx-auto.ms-lg-5.mb-4.mb-lg-0
        p.col-lg-8.ps-lg-4 Este ritmo tiene un <b>punto central</b>. Aplicar un ritmo radial a una foto hace que se sienta como un espiral, pero hay un objeto central donde comienza este bucle asociado con el ritmo concéntrico, cuenta con la misma forma de inicio, pero es hacia el exterior, este ritmo da a la imagen una sensación de vértigo y mucha profundidad.

      .d-flex.flex-wrap.flex-lg-nowrap.align-items-center(titulo="El ritmo creciente y decreciente fotográfico")
        img(src='@/assets/curso/temas/tema4/img-5.png' style="max-width: 315px").col-lg-4.mx-auto.ms-lg-5.mb-4.mb-lg-0
        p.col-lg-8.ps-lg-4 Este ritmo depende del tamaño de la figura. Se relacionan varias figuras entre sí con algunas imágenes de objetos y edificaciones de referencia que van de pequeño a grande y viceversa, el objetivo es crear fotos con elementos de diferentes tamaños, haciendo ver las diferentes medidas y presentando características de grandeza.
      
      .d-flex.flex-wrap.flex-lg-nowrap.align-items-center(titulo="El ritmo simétrico")
        img(src='@/assets/curso/temas/tema4/img-6.png' style="max-width: 315px").col-lg-4.mx-auto.ms-lg-5.mb-4.mb-lg-0
        p.col-lg-7.ps-lg-4 Este ritmo en la fotografía está relacionado con la regla de los tercios y el horizonte porque pretende crear la simetría de los elementos de la imagen. La ventaja de este tipo de ritmo es que se puede combinar con otros ritmos para crear imágenes geniales, siempre y cuando se respeten las reglas de composición.



    p Existen otras formas de capturar el ritmo en la composición fotográfica, se pueden crear diferentes imágenes para que coincidan con el ritmo de la composición de una foto, <b>lo importante es establecer un buen encuadre y dejar volar su creatividad al momento de realizar una toma</b>, se podrán realizar otro tipo de tomas y ritmo, para ello tenga en cuenta lo siguiente: puede realizar la combinación de colores, la combinación de blanco y negro o colores de una misma tonalidad al momento capturar el ritmo en una toma, para esto es ideal el paisaje natural, el cual mezcla diversos patrones no necesariamente simétricos, pero sí llamativos para la realización de una toma, de igual forma, las luces y las sombras juegan con el ritmo de la fotografía.
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
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
.acordeon-a
  .tarjeta
    transition: all .4s linear
  .acordion__activo
    background-color: #F0F8FF
</style>
