<template>
  <div class="favoriting">
    <label
      class="favorite__heart"
      :class="{'favorite__heart__selected': value}"
      @click.stop.prevent="favorite"
    >
      <input
        v-model="value"
        class="favorite__checkbox"
        type="checkbox"
      >
      ❤
    </label>
  </div>
</template>
<script>
export default {
  name: 'FavoriteBtn',
  props: {
    movie: {
      type: Object,
      required: true,
    },
    value: {
      type: Boolean,
      required: true,
    },
    //   name: {
    //     type: String,
    //     default: 'favorite',
    //   },
    //   disabled: {
    //     type: Boolean,
    //     default: false,
    //   },
  },
  // data() {
  //   return {
  //     value: this.value,
  //   };
  // },
  // computed: {
  //   changeValue() {
  //     return this.value;
  //   },
  // },
  methods: {
    favorite() {
      // if (this.value) {
      //   this.$store.dispatch('REMOVE_FROM_WATCHLIST', this.movie.id);
      // }
      // this.$store.dispatch('ADD_TO_WATCHLIST', this.movie);
      this.value = !this.value;
    },
  },
};
</script>
<style scoped>
/* Favorite heart styles */
.favoriting {
  display: inline-block;
  position: absolute;
  top: 20px;
  left: 15px;
}
.favorite__heart {
  display: inline-block;
  padding: 3px;
  vertical-align: middle;
  line-height: 1;
  font-size: 30px;
  color: yellow;
  cursor: pointer;
  -webkit-transition: color 0.2s ease-out;
  transition: color 0.2s ease-out;
}
.favorite__heart.is-disabled:hover {
  cursor: default;
}
.favorite__checkbox {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
}
.favorite__heart__selected {
  color: #df470b;
}
</style>
