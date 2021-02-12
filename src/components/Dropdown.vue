<template>
  <div class="dropdown">
    <button class="dropbtn btn btn-primary" @click="isOpen = !isOpen">Search Filters</button>
      <div v-if="isOpen" class="dropdown-content">
        <div>
          <sets />
          <regions />
          <mana />
          <types />
          <rarity />
          <keyword />
          <tags />
        </div>
      </div>
  </div>
</template>

<script>
import Sets from "@/components/Sets.vue";
import Regions from "@/components/Regions.vue";
import Mana from "@/components/Mana.vue";
import Types from "@/components/Types.vue";

export default {
  components: {
    Sets,
    Regions,
    Mana,
    Types,
  },
  data() {
    return {
      isOpen: false,
    };
  },
};

</script>

<style scoped>
 /* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
  margin: 5px;
  /* border: 1px solid green; */
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
  margin-top: 37px;
  padding-right: 5px;
  padding-top: 20px;
  background-color:rgba(5, 17, 29, 0.973);
  color:rgb(179, 180, 208);
  min-width: 360px;
  min-height: 100%;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
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
.dropbtn:hover, .dropbtn:focus {
  background-color: #2980B9;
}

</style>
