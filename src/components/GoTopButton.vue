<template>
  <back-to-top
    bottom="50px"
    right="50px"
  >
    <button
      type="button"
      class="btn btn-info btn-to-top"
    >🠹</button>
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
<style lang="scss">
.btn-to-top {
  width: 40px;
  height: 40px;
  font-size: 40px;
  line-height: 45px;
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: #f4511e;
  color: #fff;
  font-weight: bolder;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: #455a64;
    transition: 0.3s ease-in-out;
  }
}
</style>
