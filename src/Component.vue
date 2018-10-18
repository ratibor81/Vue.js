<script>
import Vue from 'vue';

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
