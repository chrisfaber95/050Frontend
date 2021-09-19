<template>
  <div class="header">
    <div class="logo"><img :src="logo" /></div>
    <div class="menu">
      <div
        class="menu-list"
        v-bind:class="{ opened: openMenu, closed: !openMenu }"
      >
        <div class="menu-item" v-for="(item, index) in menu" v-bind:key="index">
          <router-link :to="item.link">{{ item.label }}</router-link>
        </div>
      </div>
      <span class="menu-item" id="cart" @click="opencart = !opencart"
        >Winkelwagen</span
      >
      <div class="menu-icon" @click="openMenu = !openMenu">
        <span class="line">&#8801;</span>
      </div>
      <div
        id="menu-overlay"
        v-bind:class="{ opened: opencart }"
        @click="opencart = !opencart"
      ></div>
      <Shoppingcart
        id="cart-block"
        v-bind:class="{ opened: opencart, closed: !opencart }"
      />
    </div>
  </div>
</template>

<script lang="js">
import Shoppingcart from "@/components/Shoppingcart.vue";

export default{
  name: "Header",
  components: {
    Shoppingcart,
  },
  data() {
    return {
      logo: process.env.BASE_URL + "logo.png",
      menu: [
        { label: "Menu item #1", link: "/" },
        { label: "Menu item #2", link: "/" },
        { label: "Menu item #3", link: "/" },
        { label: "Menu item #4", link: "/" },
      ],
      opencart: false,
      openMenu: false,
    };
  },
}
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  padding-top: 35px;
}
.logo {
  max-width: 10%;
  margin-left: 70px;
}
.logo img {
  max-width: 100%;
}
.menu-icon {
  display: none;
  background-color: #ee5f46;
  border-radius: 25% 25% 25% 25% / 50% 50% 50% 50%;
  padding: 10px 20px;
  margin-right: 20px;
}
.menu {
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 1.3rem;
}

.menu-list {
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.menu-item {
  padding: 10px;
}
.menu-item:not(:first-child) {
  padding-left: 25px;
  padding-right: 25px;
}
.menu-item a {
  color: #ffffff;
  text-decoration: none;
}
.menu-item#cart {
  background-color: #ee5f46;
  border-radius: 15% 15% 15% 15% / 50% 50% 50% 50%;
  padding: 15px 35px;
  margin-right: 70px;
}
#menu-overlay {
  background-color: #66666666;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: none;
}

#cart-block {
  position: fixed;
  display: none;
  top: 0;
  right: -20vw;
  height: 100vh;
  width: 20vw;
  z-index: 11;
}
#cart-block.opened {
  display: block;
  animation: slide 1s;
  right: 0;
}
#cart-block.closed {
  animation: closeslide 1s;
  right: -20vw;
  display: block;
}
#menu-overlay.opened {
  display: block;
  animation: visible 1s;
}
@keyframes slide {
  from {
    right: -20vw;
  }
  to {
    right: 0;
  }
}

@keyframes closeslide {
  from {
    right: 0;
  }
  to {
    right: -20vw;
    display: none;
  }
}

@keyframes visible {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media only screen and (max-width: 1200px) {
  .menu-item#cart[data-v-61dd7a3d] {
    margin-right: 20px;
  }
  #cart-block {
    right: -40vw;
    width: 40vw;
  }
  #cart-block.closed {
    right: -40vw;
  }
  @keyframes slide {
    from {
      right: -40vw;
    }
    to {
      right: 0;
    }
  }

  @keyframes closeslide {
    from {
      right: 0;
    }
    to {
      right: -40vw;
    }
  }
}

@media only screen and (max-width: 960px) {
  .logo[data-v-61dd7a3d] {
    max-width: 20%;
  }
  .menu-icon {
    display: block;
  }
  .menu-list {
    display: none;
    position: absolute;
    top: 100px;
    right: 0;
    background-color: #ee5f46;
    border-top-left-radius: 10%;
    border-bottom-left-radius: 10%;
  }

  .menu-list.opened {
    display: block;
    animation: slideDown 1s;
    opacity: 1;
  }
  #menu-list.closed {
    animation: slideUp 1s;
    opacity: 0;
    display: none;
  }
  @keyframes slideDown {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideUp {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
}

@media only screen and (max-width: 540px) {
  .logo[data-v-61dd7a3d] {
    margin-left: 20px;
  }
  .menu-item#cart[data-v-61dd7a3d] {
    padding: 5px 10px;
  }
  .menu-icon {
    padding: 5px 10px;
  }

  #cart-block {
    right: -80vw;
    width: 80vw;
  }
  #cart-block.closed {
    right: -80vw;
  }
  @keyframes slide {
    from {
      right: -80vw;
    }
    to {
      right: 0;
    }
  }

  @keyframes closeslide {
    from {
      right: 0;
    }
    to {
      right: -80vw;
    }
  }
}
</style>
