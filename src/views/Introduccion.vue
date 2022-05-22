<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info(style="color: white")
      h1 Introducción

    p El contenido formativo que se dispone a continuación relata la importancia de la luz y el plano en la consecución de una buena fotografía para redes sociales:
    figure.mb-5.video1
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/UTWzN8YBz_w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass">
.container-text-introduccion
  position: relative
  top: -50px
  padding: 2rem
  background: linear-gradient(0deg, rgba(222,222,222,1) 0%, rgba(255,255,255,1) 35%, rgba(222,222,222,1) 100%)
  border-radius: 10px
</style>
