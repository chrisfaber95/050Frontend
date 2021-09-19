<template>
  <div class="shoppingcart">
    <div class="header">
      <span>Winkelwagen ({{ Object.keys(cartproducts).length }})</span>
      <span @click="openCart()">X</span>
    </div>
    <div class="content">
      <div
        class="item-data"
        v-for="(item, index) in cartproducts"
        v-bind:key="index"
      >
        <div class="image">
          <img :src="item.image" />
        </div>
        <div class="info">
          <div class="title" v-html="item.title" :to="item.url"></div>
          <div class="price">
            <span>&euro; {{ formatPrice(item.price) }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="footer"><span>Bekijk winkelwagen</span></div>
  </div>
</template>

<script lang="js">
import $ from "jquery";

export default{
  name: "Shoppingcart",
  data() {
    return {
      products: new Object(null),
    };
  },
  methods: {
    openCart() {
      this.$parent.opencart = !this.$parent.opencart;
    },
    getProducts(dataURL) {
      $.getJSON(dataURL, (data) => {  
		data.forEach((product) => {  
			this.$store.commit('updateMand', product)
		})
      });
    },
    formatPrice(amount) {
      return (amount / 100)
        .toFixed(2)
        .replace(".", ",");
    },
  },
  mounted() {    
    this.getProducts(
      "https://60cafc33af40b8287ffb-1a032c1af87160c7fc01b9de8fd3221e.ssl.cf3.rackcdn.com/shoppingcart.json"
    );
  },
  computed: {
    cartproducts(){
      return this.products;
    },
  },
	watch:{
		'$store.state.winkelmand':{
			immediate: true,
			deep: true,
			handler(){
				this.products = this.$store.state.winkelmand
			}
		}
	}
};
</script>

<style scoped lang="scss">
.shoppingcart {
  color: #000000;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 90%;
  height: 5%;
  margin: 0 20px;
  overflow: hidden;
}
.content {
  width: 100%;
  height: 88%;
  overflow-y: scroll;
}
.content .item-data {
  display: flex;
  margin: 0px 20px;
  padding: 10px 30px;
  border-bottom: 1px solid #dfdfdf;
  align-content: center;
  align-items: center;
}
.item-data .image {
  width: 30%;
}
.image img {
  width: 100%;
  height: auto;
}
.item-data .info {
  width: 70%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: flex-start;
  justify-content: space-around;
  text-align: left;
  padding: 10px 20px;
  font-size: 1rem;
}
.info .title {
  font-weight: 600;
  color: #444444;
}
.item-data .info .price {
  padding-top: 15px;
  color: #777777;
}
.footer span {
  color: #ffffff;
  background-color: #ee5f46;
  border-radius: 10% 10% 10% 10% / 50% 50% 50% 50%;
  padding: 15px 25px;
}

@media only screen and (max-width: 1500px) {
  .content .item-data[data-v-f650ee90] {
    margin: unset;
    padding: 10px 10px;
  }
}

@media only screen and (max-width: 540px) {
  .content {
    width: 100%;
    height: 80%;
    overflow-y: scroll;
  }
}
</style>
