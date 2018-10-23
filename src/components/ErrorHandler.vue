<template>
  <div class="ErrorMessage">
    <h2>Internet connection error :(</h2>
    <Button
      class="btn-standart"
      type="button"
      @click.prevent="tryAgain"
    >
      Try again
    </Button>
  </div>
</template>
<script>
export default {
  name: 'ErrorHandler',
  props: {
    tryAgain: {
      type: Function,
      required: false,
      default: null,
    },
  },
};
</script>
<style lang="scss" scoped>
.ErrorMessage {
  text-align: center;
  color: red;
  h2 {
    margin-bottom: 15px;
  }
}
</style>
