<script>
import Vue from 'vue';
// import VueTypes from 'vue-types';

export default Vue.component('blog-post', {
  props: {
    title: {
      type: String,
      default: '',
      required: false,
    },
  },
  template: '<h3>{{ title }}</h3>',
});
</script>
