<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: white") 2
      h1 Leyes de composición fotográfica
    
    .d-flex.flex-wrap.flex-xl-nowrap.align-items-center.mb-5
      img(src='@/assets/curso/temas/tema2/img-1.png' style="max-width: 400px").col-xl-5.mx-auto
      p.col-xl-7.mb-0 Las fotografías se componen de varios elementos y organizar todos esos elementos en un ambiente determinado para un espacio determinado genera algunos retos.
        br
        br
        |Estos retos se enfrentan de varias formas, la forma más común son las reglas o leyes de composición tal como lo relata <b>Nikon (s.f.) “la composición es la forma de encuadrar la imagen que va a tomar. Se han escrito muchos libros sobre la composición y, aunque no es probable que dos fotógrafos encuadren la misma escena de la misma forma, hay ciertas reglas generales que pueden ayudarle a que sus fotos sean más interesantes y atractivas”.</b>

    p.mb-5 A continuación, se trabajarán algunas de estas leyes o reglas para facilitar la postura de los elementos y la toma de la fotografía.

    .titulo-segundo.color-acento-contenido
      h2#t_2_1 2.1 La ley de tercios

    .d-flex.flex-wrap.flex-xl-nowrap.align-items-center.mb-5
      p.col-xl-7.mb-0.pe-xl-4.order-2.order-xl-1 En la fotografía no solo es importante saber cómo iluminar o qué fuente de luz utilizar en cada imagen. También <b>es importante saber posicionar correctamente los elementos</b> que participan dentro de un espacio determinado. Esto tendrá un impacto en la atención del espectador y <b>focalizará su mirada en los puntos específicos</b> que se reflejan en la ley de tercios, puesto que es el fotógrafo quien decide en donde centra la atención del observador.
        br
        br
        |La ley de tercios se aplica mediante la división de la imagen en <b>tercios de igual tamaño</b>, tanto horizontal como verticalmente. El resultado de esta división serán <b>nueve partes de igual tamaño</b>, que se interceptan en cuatro puntos. Estos cuatro puntos o centros dinámicos serán la guía para situar los objetos o productos a fotografiar, sin necesidad de encuadrarlos en el centro geométrico de la imagen. Como resultado se obtendrá mayor profundidad y sensación de equilibrio en la foto y se generará mayor interés al observador.
      img(src='@/assets/curso/temas/tema2/img-2.png' style="max-width: 505px").col-xl-5.mx-auto.order-1.order-xl-2.mb-4.mb-xl-0
    
    .titulo-segundo.color-acento-contenido
      h2#t_2_2 2.2 La ley de la mirada

    p.mb-5 Al momento de realizar un retrato fotográfico se debe tener en cuenta que uno de los factores con más relevancia tiene que ver con los ojos (ley de la mirada), por ello se hace importante tener el conocimiento para retratarlos adecuadamente, con el fin obtener una imagen óptima.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.col-12.col-xl-9.mx-auto.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La ley de la mirada se trata de dejar una <B>distancia entre el modelo y la dirección en la que se dirige la mirada</b> en una toma fotográfica, es decir, si la mirada va a la derecha, el modelo se encuadra hacia la izquierda, dejando un espacio notorio en todo el ángulo derecho, de esta manera se prioriza la parte delantera del sujeto y no se tiene en cuenta la parte trasera del sujeto, se utiliza para llamar la atención del espectador y dar fuerza a la imagen, con el fin de <b>crear interés del porqué el modelo está mirando fijamente un punto determinado</b>, dependiendo del escenario en el que se encuentre el protagonista, la línea de visión puede transmitir emociones o sensaciones. 

    .d-flex.flex-wrap.flex-xl-nowrap.align-items-center.mb-5.position-relative.col-xl-11.mx-auto
      p.col-xl-7.mb-0.ps-xl-4.order-2.order-xl-1.position-relative(style="z-index: 1") La línea de visión del modelo puede orientarse <b>desde la izquierda o hacia la derecha</b>, pero puede dirigirse a cualquier borde de la imagen, incluso arriba o abajo. También puede mirar directamente a la cámara, esto se debe a que, como se mencionó anteriormente, puede evocar alguna emoción dependiendo de hacia dónde se apunte la cámara, se debe tener en cuenta que <b>no siempre se cuenta con un solo modelo</b> para aplicar la técnica de la ley de la mirada, en ocasiones puede haber más de un modelo. En este caso, crear un buen retrato de composición que transmita la sensación que quiere el fotógrafo es más complicado.
      img(src='@/assets/curso/temas/tema2/img-4.png' style="max-width: 400px; z-index: 1").col-xl-5.mx-auto.order-1.order-xl-2.mb-4.mb-xl-0.position-relative
      div(style="position: absolute; bottom: 0; left: 0; width: 140px; height: 80px; background-color: #FFF2BE; z-index: 0")

    .titulo-segundo.color-acento-contenido
      h2#t_2_3 2.3 Puntos de vista
    
    p.mb-5 Una de las formas más precisas de cambiar el significado de una imagen es aprovechar el efecto del punto de vista, es decir, tener en cuenta <b>el ángulo con el que se realiza una toma fotográfica</b>, buscando como resultado la influencia de un espectador en su percepción, buscando una lectura diferente. Dependiendo la altura a la que se realice una toma, una fotografía, <b>la percepción cambiará</b>, al igual que la sensación que evoca el momento y el objeto, la angulación en fotografía es la forma en cómo se organiza la visión al tomar fotografías. Esta perspectiva cambia por completo el ángulo de visión de la escena, permitiendo ver la realidad de maneras poco comunes para el ojo humano. 

    .d-flex.flex-wrap.flex-xl-nowrap.align-items-center.mb-5.col-xl-10.mx-auto.position-relative
      img(src='@/assets/curso/temas/tema2/img-5.png' style="max-width: 400px").col-xl-5.mx-auto.me-xl-0.ms-xl-auto.mb-4.mb-xl-0
      p.col-xl-7.mb-0.ps-0.ps-xl-4.position-relative(style="z-index: 1") Por lo general, al momento de tomar una fotografía lo que se hace es poner la cámara delante del objeto a fotografiar con la cámara aproximadamente a la altura de los ojos y de una manera en la cual el plano principal y el suelo estén perpendiculares entre sí. Se puede utilizar otro tipo de angulación al momento de una toma, generando un encuadre desde arriba o desde abajo, desde diferentes ángulos, ampliados o reducidos. <b>La composición cambia mucho según las proporciones y el fondo</b>, por lo que debe elegir con cuidado. Al momento que se tenga definido el objetivo a fotografiar es importante realizar algunos movimientos de cerca y de lejos, por lo tanto, realice movimientos de cerca y de lejos hasta estar en el punto de vista correcto de la toma. 
      div(style="position: absolute; bottom: 0; right: 0; width: 140px; height: 80px; background-color: #FFF2BE; z-index: 0")
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({}),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
  methods: {
    actionSlideRight() {
      if (this.indexSlider >= 8) {
        this.indexSlider = 1
      } else {
        this.indexSlider += 1
      }
    },
    actionSlideLeft() {
      if (this.indexSlider == 1) {
        this.indexSlider = 8
      } else {
        this.indexSlider -= 1
      }
    },
  },
}
</script>

<style lang="sass"></style>
