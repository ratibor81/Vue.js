<template>
  <div id="app">
    <nav-links />
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view />
    </transition>
    <div class="hidden" />
    <go-top-button />
  </div>
</template>

<script>
import Vue from 'vue';
import online from '@deveodk/vue-online';
import VueToastr from '@deveodk/vue-toastr';
import driver from '@deveodk/vue-online/drivers/deveoToastr';
import NavLinks from './Navigation.vue';
import GoTopButton from './GoTopButton.vue';
import '@deveodk/vue-toastr/dist/@deveodk/vue-toastr.css';

Vue.use(VueToastr, {
  defaultPosition: 'toast-top-full-width',
  timeout: 2000,
});
Vue.use(online, {
  notifier: driver,
  defaultOnlineTitle: 'Connected',
  defaultOnlineMessage: 'You are online',
  defaultOfflineTitle: 'Disconnected',
  defaultOffilneMessage: 'You are offline',
});

export default {
  name: 'App',
  components: {
    NavLinks,
    GoTopButton,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Roboto', sans-serif;
  min-width: 320px;
}
#app {
  text-align: center;
  padding: 0 15px;
}
.top {
  padding-top: 95px;
  @media (min-width: 629px) {
    padding-top: 65px;
  }
}
.hidden {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 55px;
  background-color: #fff;
  z-index: 999;
}
.toast-container {
  text-align: center !important;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
