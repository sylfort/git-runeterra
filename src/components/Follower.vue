<template>
          <div class="types" @click="clickHandler('Unit')">
            <img class="img" src="https://cdn-lor.mobalytics.gg/production/images/svg/card-type/follower.svg" alt="">
            <span>Follower</span>
        </div>
</template>

<script>
export default {
  methods: {
    clickHandler(type) {
      console.log("clicked", type);

      console.log(this);
      // this.$router.push(`/?supertype=${supertype}&type=${type}`);
      this.$router.push(`/?ignore_supertype=Champion&type=${type}`);
    },
  },
};
</script>

<style>

</style>
