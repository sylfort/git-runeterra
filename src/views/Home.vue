<template>
  <div class="app bg-color">

    <!-- Body -->
    <div>
      <div class="main-title">Git Runeterra</div>
      <div class="main-text">Check all versions of your favorite cards in Runeterra and build decks from all patches!</div>
      <div class="cards">
        <div v-for="card in cards" :key="card.name">
          <div class="card-one">
            <img :src="card.assets[0].gameAbsolutePath" alt="">
          </div>
        </div>
      </div>

    </div>

  </div>

  <!-- <div>
    {{title}}
    <button @click="changeTitle('sou o titulo novo')">mudar titulo</button>
  </div> -->
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {},

  created() {
    console.log(this.$store.state);
  },

  computed: {
    cards() {
      console.log("xxxxxxx", this.$route.query);
      return this.$store.state.cards.filter((card) => {
        if (this.$route.query.ignore_supertype) {
          return card.supertype !== this.$route.query.ignore_supertype;
        }

        if (this.$route.query.type) {
          return card.type === this.$route.query.type;
        }

        if (this.$route.query.supertype) {
          return card.supertype === this.$route.query.supertype;
        }

        if (this.$route.query.regionRef) {
          return card.regionRef === this.$route.query.regionRef;
        }

        if (card.name.search(this.$store.state.name) > -1) {
          return true;
        }

        return true;
      });
    },
  },
});
</script>

<style lang="scss" scoped>
.app {
  // position: relative;
  display: flex;
  flex-flow: column wrap;
  text-align: center;
  border: 1px solid rgb(0, 0, 0);
  min-height: 100%;
  /* height: 100vh; */
  margin: 0 300px 0 300px;
  color: rgba(255, 255, 255, 0.9);

}

.main-title{
  padding-bottom: 20px;
  color: #dfaa43;
  font-size: 36px;
}

.cards{
  display: flex;
  /* flex-direction: row; */
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 40px;
  min-width: 495px;
}

.card-one{
  /* flex: calc(250/376); */
  width: 200px;
}

.card-two{
  /* flex: calc(300/452); */
  width: 200px;
}

</style>
