<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: white") 4
      h1 Redes sociales para publicación de fotografías 

    p.mb-5 Es la construcción y diseño planificado de los <b>objetivos de la fotografía</b> por realizar. En un proyecto fotográfico, el guion hace parte de la etapa denominada <b>preproducción</b>. En esta parte del proceso, la preparación tanto del equipo fotográfico como del producto son muy importantes para obtener los resultados deseados. Asimismo, es fundamental preguntarse:

    h1.mb-5 Falta componente


    p.mb-5 Si todas estas preguntas se contestan conscientemente, la planificación y el guion fotográfico estará finalizado. 
      br
      br
      |Existen otras herramientas como la creación de un <b>tablero de ideas</b>. Esto permitirá, tener claro los objetivos y los logros definidos a alcanzar en la sesión fotográfica. <b>Tener referentes visuales</b> no quiere decir copiar, sino construir y proponer cosas diferentes. Realizar una planificación previa a la sesión fotográfica es una herramienta que asegurará optimizar la toma de acuerdo con el plano y posición de la cámara a utilizar.  Sin embargo, existen ocasiones en donde el fotógrafo se someterá a factores externos que pueden incidir en el guion fotográfico como el clima, el transporte y la puntualidad del equipo humano.

    .d-flex.flex-wrap.flex-xl-nowrap.align-items-center.mb-5.col-xl-10.mx-auto
      img(src='@/assets/curso/temas/tema5/img-1.png' style="max-width: 505px").col-xl-6.mx-auto
      .position-relative.col-xl-6
        p.ps-xl-4.pt-xl-3.position-relative(style="z-index: 1") En cuanto a la preproducción técnica se recomienda realizar una lista de los <b>equipos fotográficos</b> a utilizar para la fotografía: baterías, accesorios de iluminación, difusores, trípodes, fondos, elementos de <b>escenografía</b>, etc. También se debe alistar la escenografía, ya que no es lo mismo fotografiar un producto en fondo blanco, que utilizar un fondo de color, con textura, así como los demás accesorios de utilería que complementan el mensaje a transmitir.
        div(style="position: absolute; top: 0; left: .5rem; width: 140px; height: 80px; background-color: #E3EEF7; z-index: 0")

    p.mb-5 En lo que se refiere a las fotografías en redes sociales, su éxito recae en que sean originales y <b>que cuenten una historia</b>, se asocien con un grupo determinado de personas (lifestyle) que usan o consumen los productos que se están ofreciendo. Resulta de mucha utilidad para el fotógrafo definir este listado en el guion fotográfico y ponerlo sobre papel, ya que este permite tener todo preparado a la hora de fotografiar el producto, ya sea para redes sociales u otros usos, sin que ninguna idea o elemento se quede por fuera del encuadre o por fuera de la historia que se va a contar.  
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
