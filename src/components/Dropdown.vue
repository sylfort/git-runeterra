<template>
  <div class="dropdown">
    <div class="dropbtn" @click="toggleOpen">Search Filters</div>
    <div v-if="isOpen" class="dropdown-content">
      <div>
        <sets />
        <regions @click="toggleOpen" />
        <!-- <mana @click="toggleOpen" /> -->
        <types @click="toggleOpen" />
        <!-- <rarity @click="toggleOpen" />
        <keyword @click="toggleOpen" />
        <tags @click="toggleOpen" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import Sets from "@/components/Sets.vue";
import Regions from "@/components/Regions.vue";
// import Mana from "@/components/Mana.vue";
import Types from "@/components/Types.vue";

export default {
  components: {
    Sets,
    Regions,
    // Mana,
    Types,
  },
  data: () => ({
    isOpen: false,
  }),

  methods: {
    toggleOpen() {
      this.isOpen = !this.isOpen;
    },
  },

};
</script>

<style lang="scss">
/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
  /* border: 1px solid green; */
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
  margin-top: 37px;
  // margin-right: 1rem;
  padding-right: .5rem;
  padding-top: 20px;
  background-color: rgba(5, 17, 29, 0.973);
  color: rgb(179, 180, 208);
  min-width: 360px;
  min-height: 100%;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  @media only screen and (max-width: 850px) {
    margin: 1rem 0;
    padding: 0;
    min-width: 0;
    position: relative;
  }
}

/* Links inside the dropdown */
.dropdown-content a {
  color: rgb(179, 180, 208);
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
/* .dropdown-content a:hover {background-color: #ddd} */

/* Dropdown Button */
.dropbtn {
  /* background-color: #3498DB;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer; */
}

/* Dropdown button on hover & focus */
.dropbtn:hover,
.dropbtn:focus {
  cursor: pointer;
}
</style>
