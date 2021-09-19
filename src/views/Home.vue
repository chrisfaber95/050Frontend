<template>
  <div class="home">
    <div class="banner">
      <div class="banner-text">{{ bannerText }}</div>
    </div>
    <div class="content">
      <Slides />
      <div class="other-content"></div>
    </div>
  </div>
</template>

<script>
import Slides from "@/components/Slides.vue";

export default {
  name: "Home",
  components: {
    Slides,
  },
  data() {
    return {
      bannerImage: process.env.BASE_URL + "header.jpg",
      bannerText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    };
  },
};
</script>
<style lang="scss">
.banner {
  height: 56vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
}
.banner::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  transform: translateY(-32%);
  background-image: url("~@/assets/header.jpg");
}
.banner-image {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  transform: scale(1.6) translateY(-10.5%);
}
.banner-text {
  font-size: 5rem;
  padding: 40px;
  width: 80%;
  text-align: left;
  text-shadow: 2px 2px 1px rgb(116, 116, 116);
}
.content {
  min-height: 36vh;
  position: relative;
}
.other-content {
  background-color: #ffffff;
  min-height: 100vh;
}

@media only screen and (max-width: 1200px) {
  .banner-text {
    font-size: 3em;
  }
}

@media only screen and (max-width: 640px) {
  .banner {
    height: 40vh;
  }
}

@media only screen and (max-width: 540px) {
  .banner-text {
    font-size: 2em;
  }
  .banner {
    height: 40vh;
  }
  .slide-item[data-v-2dfbde12] {
    margin: 15px 0px;
  }
}
</style>