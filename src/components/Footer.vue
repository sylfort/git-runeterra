<template>
  <div class="footer bg-color">Footer</div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>

.footer {
  // border: 1px solid green;
  position: relative;
  padding: 5px;
  width: 100%;
  height: 3rem;
  // left: 0;
  bottom: 0;
  z-index: 100;
  color: white;
  display: flex;
  align-items: center;

    @media only screen and (max-width: 800px) {
    position: relative;
    margin-top: 0;
  }
}

</style>
