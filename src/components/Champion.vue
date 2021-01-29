<template>
          <div class="types" @click="clickHandler('Champion')">
            <img class="img" src="https://cdn-lor.mobalytics.gg/production/images/svg/card-type/champion.svg" alt="">
            <span>Champions</span>
            </div>
</template>

<script>
export default {
  methods: {
    clickHandler(supertype) {
      console.log("clicked", supertype);
      // colocar algum estilo

      // Adicionar o tipo ao query da pagina
      console.log(this);
      this.$router.push(`/?supertype=${supertype}`);
    },
  },
  components: {

  },
};
</script>

<style>

</style>
