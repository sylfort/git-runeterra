<template>
<div class="regions-block">
    <div class="regions-title">
                <span>Regions</span>
                <span class="dropdown-clean" @click="clickHandler('clear')">clear</span>
            </div>
  <div class="regions-grid">
      <div class="region-card" @click="clickHandler('Bilgewater')">
          <img class="img" src="https://cdn-lor.mobalytics.gg/production/images/svg/region/BW.svg">
          <span>Bilgewater</span>
      </div>
      <div class="region-card" @click="clickHandler('Demacia')">
          <img class="img" src="https://cdn-lor.mobalytics.gg/production/images/svg/region/DE.svg">
          <span>Demacia</span>
      </div>
      <div class="region-card" @click="clickHandler('Freljord')">
          <img class="img" src="https://cdn-lor.mobalytics.gg/production/images/svg/region/FR.svg">
          <span>Freljord</span>
      </div>
      <div class="region-card" @click="clickHandler('Ionia')">
          <img class="img" src="https://cdn-lor.mobalytics.gg/production/images/svg/region/IO.svg">
          <span>Ionia</span>
      </div>
      <div class="region-card" @click="clickHandler('Noxus')">
          <img class="img" src="https://cdn-lor.mobalytics.gg/production/images/svg/region/NX.svg">
          <span>Noxus</span>
      </div>
      <div class="region-card" @click="clickHandler('PiltoverZaun')">
          <img class="img" src="https://cdn-lor.mobalytics.gg/production/images/svg/region/PZ.svg">
          <span>Piltover & Zaun</span>
      </div>
      <div class="region-card" @click="clickHandler('ShadowIsles')">
          <img class="img" src="https://cdn-lor.mobalytics.gg/production/images/svg/region/SI.svg">
          <span>Shadow Isles</span>
      </div>
      <div class="region-card" @click="clickHandler('Targon')">
          <img class="img" src="https://cdn-lor.mobalytics.gg/production/images/svg/region/MT.svg">
          <span>Targon</span>
      </div>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    clickHandler(regionRef) {
      console.log("clicked", regionRef);
      // colocar algum estilo

      if (regionRef === "clear") {
        this.$router.push("");
        return;
      }

      // Adicionar o tipo ao query da pagina
      console.log(this);
      this.$router.push(`/?regionRef=${regionRef}`);
    },
  },

};
</script>

<style lang="scss">
.regions-block{
    display: block;
    margin-bottom: 20px;
}

.regions-title{
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}

.dropdown-clean{
  font-weight: 600;
  font-size: 0.7rem;

  &:hover{
    cursor: pointer;
    color: darken(#dfaa43, 10%);
  }
}

.regions-grid{
    position: relative;
    display: grid;
    grid-template-rows: repeat(4, auto);
    grid-auto-flow: column;
    gap: 24px 12px;
    min-width: 0;
    min-height: 0;
    margin-top: 15px;
}

.region-card{
    display: flex;
    align-items: center;
    cursor: pointer;
    overflow: hidden;
    min-width: 0;
    max-width: 100%;
}

.img{
    display: inline-block;
    transition: opacity 0.3s ease 0s;
    width: 24px;
    height: 24px;
    opacity: 0.8;
    margin-right: 12px;
}
</style>
