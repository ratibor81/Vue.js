<template>
  <div>Ok !!</div>
</template>
<script>
export default {
  name: 'MovieGenrePage',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  mounted() {
    console.log(this.$route.params.id);
  },
};
</script>
