<template>
<div class="types-block">
    <span>Types</span>
    <div class="types-grid">
        <champion />
        <follower />
        <div class="types" @click="clickHandler('Spell')">
            <img class="img" src="https://cdn-lor.mobalytics.gg/production/images/svg/card-type/spell.svg" alt="">
            <span>Spell</span>
        </div>
        <div class="types" @click="clickHandler('Landmark')">
            <img class="img" src="https://cdn-lor.mobalytics.gg/production/images/svg/card-type/landmark.svg" alt="">
            <span>Landmark</span>
        </div>
    </div>
</div>
</template>

<script>
import Champion from "@/components/Champion.vue";
import Follower from "@/components/Follower.vue";

export default {
  methods: {
    clickHandler(type) {
      console.log("clicked", type);
      // colocar algum estilo

      // Adicionar o tipo ao query da pagina
      console.log(this);
      this.$router.push(`/?type=${type}`);
    },
  },
  components: {
    Champion,
    Follower,
  },
};
</script>

<style>
.types-block{
    margin-bottom: 20px;
}

.types-grid{
    position: relative;
    display: grid;
    grid-template-rows: repeat(2, auto);
    grid-auto-flow: column;
    gap: 24px 12px;
    margin-top: 15px;
}

.img{
    display: inline-block;
    transition: opacity 0.3s ease 0s;
    width: 24px;
    height: 24px;
}

.types{
    /* display: flex; */
    align-items: center;
    cursor: pointer;
    overflow: hidden;
}
</style>
