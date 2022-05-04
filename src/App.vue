<template lang="pug">
#app.app
  Header
  .contenedor-principal
    AsideMenu
    section.seccion-principal(:class="{'seccion-principal--barra-avance-open' : !menuState}")
      router-view
  BarraAvance
  Accesibilidad
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    menuOpen: false,
  }),
  computed: {
    menuState() {
      return this.$store.getters.isMenuOpen
    },
  },
  mounted() {
    this.$aos.init({
      offset: 100,
    })
  },
}
</script>

<style lang="sass">
.banner-interno
  height: 175px
.banner-interno__fondo
  background-image: url(assets/curso/portada/img-fontdo-tema.png) !important
  background-position: initial !important
  height: 220px
.slyder-a__btn--sigt
  background-color: #147DC4 !important
  color: white !important
  background-image: url(assets/curso/temas/arrow.svg) !important
  transform: rotate(0deg) !important
.slyder-a__btn--atrs
  background-color: #147DC4 !important
  color: white !important
  background-image: url(assets/curso/temas/arrow.svg) !important
  transform: rotate(180deg) !important
</style>
