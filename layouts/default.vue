<script setup>
</script>

<template>
     <div id="app">
    <AppHeader />
    <div class="content-wrapper">
    <slot />
  </div>
    <AppFooter />
  </div>
</template>

<style lang='scss' scoped>
.content-wrapper {
    flex-grow: 1;
    display: flex;
}
</style>