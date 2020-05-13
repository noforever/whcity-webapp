<template>
  <div class = "ind_right">
    <div class="pop_col_tit">
      <i class="tit_icon icon-tit-line"></i>
      <h3>{{title}}</h3>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "dc-panel",
    props:['title']
  }
</script>

<style scoped>

</style>
