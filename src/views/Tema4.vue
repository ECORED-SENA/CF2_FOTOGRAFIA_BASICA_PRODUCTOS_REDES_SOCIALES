<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: white") 4
      h1 Redes sociales para publicación de fotografías 

    .d-flex.flex-wrap.flex-xl-nowrap.align-items-center.mb-5.col-xl-10.mx-auto
      img(src='@/assets/curso/temas/tema4/img-1.png' style="max-width: 400px").col-xl-5.mx-auto
      .position-relative.col-xl-7
        p.position-relative(style="z-index: 1") Es un elemento dinámico relacionado con la temporalidad en la percepción de la imagen, para lograr una foto visualmente rítmica se necesita encontrar múltiples objetos del mismo tema: líneas, formas, tonos y repeticiones de color. Sobre todo es la disposición de formas cuadradas, circulares y rectangulares lo que crea una armonía visual al ordenarse y repetirse de acuerdo con el patrón. Se utiliza para aportar dinamismo, lo que produce movimiento fotográfico, también es adecuado para la composición fotográfica. Se ha propuesto crear una imagen que esté en armonía con el objeto y que sea agradable a los ojos del espectador.
        div(style="position: absolute; bottom: 0; right: 0; width: 140px; height: 80px; background-color: #FFF2BE; z-index: 0")
    p.mb-5 Existen cinco tipologías de ritmo visual en el mundo de la fotografía, con los cuales se pueden crear una diversidad de proyectos. Dichos tipos no son más que fotos, las cuales están en el día a día del ser humano, se recomienda cuidar el aspecto y no realizar tomas sin componer la imagen con un propósito determinado, diferenciados de la siguiente forma:

    h1.mb-5 Falta componente

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

<style lang="sass"></style>
