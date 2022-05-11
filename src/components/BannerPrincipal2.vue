<template lang="pug">
.banner-principal
  .container.tarjeta.position-relative(
    :style="{'background-image': globalData.fondoBannerPrincipal ? `url(${globalData.fondoBannerPrincipal})` : 'none'}"
    style="min-height: 506px; display: flex; overflow: hidden;"
  )
    .row.banner-principal__row.position-relative.justify-content-center.align-items-center
      .col-lg-7.col-xxl-6.py-4.py-sm-5.banner-principal__info
        .banner-principal__componente
          h1.mb-0(v-html="globalData.componenteFormativo" style="color: black")
        .col-lg-12
          .banner-principal__descripcion
            p.mb-0(v-html="globalData.descripcionCurso" style="color: black;").pe-md-5
        .banner-principal__accion
          router-link.boton(:to="{name: iniciarLnk.nombreRuta }" style="background-color: #FFD947")
            span.me-1 Iniciar
            i.fas.fa-angle-right

      .d-none.d-lg-flex.col-lg-5.px-0.position-relative.img-p.align-items-center.img-banner-1
        img(:src="globalData.imagenBannerPrincipal").mb-auto
    .imagen_flotante_4: img(src="@/assets/curso/portada/flot1.png").d-none.d-lg-block
  
</template>

<script>
import mixins from '../components/plantillaMixins'
export default {
  name: 'BannerPrincipal',
  mixins: [mixins],
  computed: {
    globalData() {
      return this.$config.global
    },
  },
}
</script>

<style lang="sass">
.img-banner-1
  top: 0 !important
  right: -4% !important
  img
    min-width: 530px
    max-width: 530px
    position: absolute
    z-index: 1
  @media (max-width: 1400px)
    right: -8.5% !important
.img-p
  top: 3%
  right: -2%
.fondo-contenido
  position: absolute
  padding: 0px
  z-index: 2
  height: 100%
  width: 100%
.banner-principal__info
  padding-left: 80px  !important
  z-index: 3
.banner-principal
  p, h1, h2, h3, h4, h5, h6
    color: $color-banner-text
  .tarjeta
    background-color: #F8F5F4
    background-size: cover
    //background-position: center
  &__info
    display: flex
    flex-direction: column
    justify-content: center
  &__programa
    display: flex
    align-items: center
    margin-bottom: 20px
  &__componente
    margin-bottom: 20px
    h1
      line-height: 1.1em
      @media (max-width: $bp-max-xs)
        font-size: 2em
  &__descripcion
    margin-bottom: 20px
  &__row
    @if $banner-principal-img-x == 'derecha'
      justify-content: space-between
    @else
      justify-content: space-around
      .banner-principal__img
        padding-right: 1.5rem!important
      @media (min-width: $bp-min-sm)
        .banner-principal__img
          padding-right: 3rem!important
  &__img
    animation: scale 5s ease-in-out infinite alternate
    @if $banner-principal-img-y == 'arriba'
      align-self: flex-start
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-bottom: 3rem!important
    @else if $banner-principal-img-y == 'abajo'
      align-self: flex-end
      padding-top: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
    @else
      align-self: center
      padding-top: 1.5rem
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
        padding-bottom: 3rem!important
.imagen_flotante
  &_1
    animation: float1 3.2s ease-in-out infinite alternate
    position: absolute
    width: 251px
    top: 7%
    right: 2%
    z-index: 2
  &_2
    animation: float1 3.3s ease-in-out infinite alternate
    position: absolute
    width: 203px
    bottom: 0%
    right: 8%
    z-index: 2
  &_3
    animation: float1 3.4s ease-in-out infinite alternate
    position: absolute
    width: 305px
    bottom: 0%
    right: 25%
    z-index: 2
  &_4
    animation: float1 3.5s ease-in-out infinite alternate
    position: absolute
    width: 134px
    top: 30%
    left: 55%
    z-index: 2
    &::after
      position: absolute
      content: ''
      top: 23%
      left: 48%
      transform: translate(-50%, -50%)
      height: 0
      width: 0
      border-radius: 50%
      background: radial-gradient(circle, rgba(255,255,255,0.7) 20%, rgba(255,255,255,0.4) 40%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.3) 70%)
      animation: flash 2.5s ease-in-out infinite alternate
    @media (max-width: 990px)
      display: none
  &_5
    animation: float1 3.9s ease-in-out infinite alternate
    position: absolute
    width: 40px
    top: 3%
    left: 30%
    z-index: 99
  &_6
    filter: blur(2px)
    animation: float1 2.7s ease-in-out infinite alternate
    position: absolute
    width: 167px
    top: 30%
    right: 3%
    z-index: 99
  &_7
    animation: float1 2.5s ease-in-out infinite alternate
    position: absolute
    width: 50px
    bottom: 10%
    right: 3%
    z-index: 99
  &_8
    filter: blur(1px)
    animation: float1 3s ease-in-out infinite alternate
    position: absolute
    width: 50px
    bottom: 20%
    right: 8%
    z-index: 99
@keyframes flash
  0%
    width: 0
    height: 0
  5%
    width: 50px
    height: 50px
  5.5%
    width: 100px
    height: 100px
  6%
    width: 150px
    height: 150px
  6.5%
    width: 200px
    height: 200px
  7%
    width: 0
    height: 0
  7.5%
    width: 50px
    height: 50px
  8%
    width: 100px
    height: 100px
  8.5%
    width: 150px
    height: 150px
  9%
    width: 200px
    height: 200px
  10%
    width: 0
    height: 0
@keyframes float1
  0%
    transform: translateY(20px)
  100%
    transform: translateY(0px)
@keyframes scale
  0%
    transform: scale(1.1)
  100%
    transform: scale(1)
@media (max-width: $bp-max-md)
  .fondo-contenido
    display: none
  .fondo-contenido2
    background-repeat: no-repeat
    background-size: cover
</style>
