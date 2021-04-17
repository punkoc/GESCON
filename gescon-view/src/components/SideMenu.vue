<template>
  <div>
    <b-button v-b-toggle.gescon-menu>Abrir Menu</b-button>
    <b-sidebar id="gescon-menu" title="Menu" shadow>
      <b-nav-item href="/">Home</b-nav-item>
      <b-nav-item href="/administradora">Administradora</b-nav-item>
      <b-nav-item href="/condominio">Condomínio</b-nav-item>
      <b-nav-item href="/servico">Serviços</b-nav-item>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "SideMenu",
};
</script>

<style>
</style>