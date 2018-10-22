<template>
  <back-to-top
    bottom="50px"
    right="50px"
  >
    <button
      type="button"
      class="btn btn-info btn-to-top"
    >Top</button>
  </back-to-top>
</template>
<script>
import Vue from 'vue';
import BackToTop from 'vue-backtotop';

Vue.use(BackToTop);
export default {
  name: 'ToTopBtn',
  components: { BackToTop },
};
</script>
<style>
.btn-to-top {
  width: 60px;
  height: 30px;
  font-size: 15px;
  line-height: 15px;
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: #0277bd;
  color: #fff;
  font-weight: bolder;
  cursor: pointer;
}
</style>
