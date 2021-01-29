<template>
    <div class="set-select">
        <div class="set-select-flex">
            <div>
                Sets
            </div>
            <div>
                <button class="dropset" @click="isOpen = !isOpen">
                    All Sets
                </button>
            </div>
            <div v-if="isOpen" class="dropdown-sets">
                <div class="sets">Launch Set</div>
                <div class="sets">Rising Tides</div>
                <div class="sets">Call of the Mountain</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style>
    .set-select {
  position: relative;
  display: inline-block;
  outline: 1px solid yellow;
  min-width: 100%;
  margin-bottom: 15px;
}

.set-select-flex{
    display: flex;
    flex-direction: column;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-sets {
  display: flex;
  flex-direction: column;
  /* position: absolute; */
  left: 0px;
  margin-top: 0px;
  padding-top: 20px;

  background-color:rgba(5, 17, 29, 0.973);
  color:rgb(179, 180, 208);
  min-width: 160px;
  min-height: 100%;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.sets{
    /* display: flex; */
    align-items: center;
    cursor: pointer;
    overflow: hidden;
}
</style>
