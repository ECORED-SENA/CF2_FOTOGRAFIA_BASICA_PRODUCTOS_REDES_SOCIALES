<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: white") 6
      h1 Efectos visuales básicos para imágenes

    .d-flex.flex-wrap.flex-xl-nowrap.align-items-center.mb-5.col-xl-11.mx-auto
      .position-relative.col-xl-6.order-2.order-xl-1
        p.ps-xl-4.pt-xl-3.position-relative(style="z-index: 1") El uso de efectos fotográficos se ha ampliado a lo largo de los años para lograr resultados verdaderamente originales. Pero ¿qué significa efecto fotográfico? Por un lado, se puede hablar del retoque digital, que se realiza posteriormente de la toma y se hacen con programas para edición de imágenes. Con este tipo de software se podrán personalizar los parámetros para conseguir un aspecto muy innovador, hay muchos efectos fotográficos que puede hacer con una cámara fotográfica o un dispositivo móvil.
        div(style="position: absolute; top: 0; left: .5rem; width: 140px; height: 80px; background-color: #FFF8DD; z-index: 0")
      img(src='@/assets/curso/temas/tema6/img-1.png' style="max-width: 505px").col-xl-6.mx-auto.mb-4.mb-xl-0.order-1.order-xl-2

    TabsC.color-acento-botones.mb-5.tabs-c-t6
      .py-3.py-md-4(titulo="Barrido fotográfico")
        .d-flex.flex-wrap.flex-xl-nowrap.align-items-center.col-xl-10.mx-auto
          img(src='@/assets/curso/temas/tema6/img-2.png' style="max-width: 400px").col-xl-5
          p.ps-xl-4.mb-0 <b>El barrido fotográfico</b>
            br
            br
            |Hace énfasis en las imágenes de un sujeto que está enfocado, toda la composición y se concentra en este, mientras el fondo aparentemente está borroso; pero, en lugar de hablar de un desenfoque de la toma y sus líneas que dan una sensación de velocidad dinámica, son fotografías muy comunes y realmente no son complejas al momento de crearlas, simplemente se trata de configuración de cámara con una velocidad de obturación baja y seguir el objetivo a fotografiar.

      .py-3.py-md-4(titulo="Larga exposición")
        .d-flex.flex-wrap.flex-xl-nowrap.align-items-center.col-xl-10.mx-auto
          img(src='@/assets/curso/temas/tema6/img-3.png' style="max-width: 400px").col-xl-5
          p.ps-xl-4.mb-0 <b>Larga exposición de fotografías</b>
            br
            br
            | Las exposiciones largas tienen el mismo efecto que los barridos, pero los resultados son muy diferentes. Este efecto suaviza el acabado de los objetos en movimiento, haciendo un breve análisis se puede decir que es el efecto contrario al barrido. En el caso anterior, se enfoca nítidamente el objeto en movimiento. En este caso, el desenfoque está en el propio movimiento. Las fotografías de larga exposición a menudo se toman para representar un viaje en automóvil por la carretera o para mover suavemente las olas. Estos funcionan mejor en situaciones nocturnas donde la luz artificial no se mezcla con la luz natural. Al momento de hacer la toma se recomienda utilizar un trípode para reducir la velocidad del obturador, de esta forma, capta un fondo claro y el movimiento se convierte en un halo de luz.

      .py-3.py-md-4(titulo="Efecto bokeh")
        .d-flex.flex-wrap.flex-xl-nowrap.align-items-center.col-xl-10.mx-auto
          img(src='@/assets/curso/temas/tema6/img-4.png' style="max-width: 400px").col-xl-5
          p.ps-xl-4.mb-0 <b>Efecto bokeh</b>
            br
            br
            |Es un efecto cálido, incluso un poco sensible. En este caso, se habla del desenfoque de la luz como fondo de una imagen con escasa profundidad de campo. El bokeh es muy distintivo porque representa una luz de forma circular, es un efecto realmente agradable que aprecian tanto los fotógrafos como los espectadores. 
      
      .py-3.py-md-4(titulo="Flash en segunda cortinilla")
        .d-flex.flex-wrap.flex-xl-nowrap.align-items-center.col-xl-10.mx-auto
          img(src='@/assets/curso/temas/tema6/img-5.png' style="max-width: 400px").col-xl-5
          p.ps-xl-4.mb-0 <b>Flash en la segunda cortinilla</b>
            br
            br
            | Este es el efecto fotográfico más complicado de todos los descritos anteriormente. Para explicar de qué está hecho es importante entender cómo funciona el disparador y obturador de la cámara, cuando se pulsa el disparo para hacer una toma fotográfica se está activando la apertura del obturador, es decir, la apertura y cierre de este simboliza la toma fotográfica. Comprendiendo esto, el obturador cuenta con dos cortinillas, que suben y bajan para realizar el movimiento, la clave de este efecto fotográfico es reducir el tiempo que tarda la segunda cortina en subir y bajar. Esto le permite capturar primero la trayectoria de un objeto o persona en movimiento (estilo de exposición larga) y finalmente, la segunda cortina con un flash, que le permite modificar la imagen mientras conserva el rastro detrás de ella.      

    .cajon.color-acento-botones.p-4.mb-4.d-flex.align-items-center.col-xl-11.mx-auto(style="background-color: #FBF4DC")
      img(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 89px").mx-3
      p.mb-0 Con esta información se da por concluida la parte teórica del componente formativo 2 “Luz y plano”, ahora a poner en práctica lo aprendido.

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
.tabs-c-t6
  border: none
  .tabs-c__header
    margin-bottom: 0
  .tabs-c__content-item
    padding-top: 2rem
    border-left: 1px solid #E8E8E8
    border-right: 1px solid #E8E8E8
    border-bottom: 1px solid #E8E8E8
</style>
