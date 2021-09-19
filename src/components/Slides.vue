<template>
  <div class="slides">
    <div
      class="slide-item"
      v-for="(item, index) in slide"
      v-bind:key="index"
    ></div>
  </div>
</template>

<script lang="js">
export default {
  name: "Slides",
  data() {
    return {
      slide: [{}, {}, {}, {}],
    };
  },
}
</script>

<style scoped lang="scss">
.slides {
  display: inline-flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-evenly;
  align-items: center;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    183deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 37%,
    rgba(255, 255, 255, 1) 38%,
    rgba(255, 255, 255, 1) 100%
  );
  width: 100%;
}
.slide-item {
  width: 20vw;
  margin: 15px;
  height: calc(20vw * 0.66);
  background-color: #ffffff;
  border: #cccccc 1px solid;
  -webkit-box-shadow: 1px 4px 9px 3px rgba(99, 99, 99, 0.75);
  box-shadow: 1px 4px 9px 3px rgba(99, 99, 99, 0.75);
}

@media only screen and (max-width: 768px) {
  .slide-item {
    width: 45vw;
    height: calc(45vw * 0.66);
  }
}

@media only screen and (max-width: 640px) {
  .slide-item[data-v-2dfbde12] {
    margin: 15px 0px;
  }
}

@media only screen and (max-width: 540px) {
  .slides {
    background: linear-gradient(
      183deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0) 10%,
      white 11%,
      white 100%
    );
  }
  .slide-item[data-v-2dfbde12] {
    width: 75vw;
    height: calc(75vw * 0.66);
  }
}
</style>
