<template>
  <div class="container">
    <div class="new-product d-flex flex-row space-between">
      <div>
        <img src="../assets/img/A1.jpg" alt="" />
        <div class="star-product">
          <p>PACKAGE</p>
          <p id="brand">PREMIUM</p>
          <a href="/shop/poudre-de-beaute-mat-naturel-powder">
          <button type="submit" name="Detail" class="btn-explore">
            EXPLORE
          </button>
          </a>
        </div>
      </div>
      <div>
        <img src="../assets/img/A2.jpg" alt="" />
        <div class="star-product">
          <p>NEW BRAND</p>
          <p id="brand">TOUCH</p>
          <a href="/store/brand/search?q=bvlgari">
          <button type="submit" name="Detail" class="btn-explore">
            EXPLORE
          </button>
          </a>
        </div>
      </div>
    </div>
    <div class="element-product d-flex flex-row space-around">
      <a
        href="/store/category/search?q=skincare"
        class="d-flex flex-column space-around"
      >
        <img src="../assets/img/skincare.jpg" alt="" />
        <p>SKINCARE</p>
      </a>
      <a
        href="/store/category/search?q=lips"
        class="d-flex flex-column space-around"
      >
        <img src="../assets/img/lips.jpg" alt="" />
        <p>LIPS</p>
      </a>
      <a
        href="/store/category/search?q=hair"
        class="d-flex flex-column space-around"
      >
        <img src="../assets/img/hair.jpg" alt="" />
        <p>HAIR</p>
      </a>
      <a
        href="/store/category/search?q=eye"
        class="d-flex flex-column space-around"
      >
        <img src="../assets/img/eye.jpg" alt="" />
        <p>EYE</p>
      </a>
      <a
        href="/store/category/search?q=makeup"
        class="d-flex flex-column space-around"
      >
        <img src="../assets/img/makeup.jpg" alt="" />
        <p>MAKEUP</p>
      </a>
      <a
        href="/store/category/search?q=fragrance"
        class="d-flex flex-column space-around"
      >
        <img src="../assets/img/fragrance.jpg" alt="" />
        <p>FRAGRANCE</p>
      </a>
    </div>
    <div class="top-product d-flex flex-column space-around">
      <p>NEW PRODUCTS</p>
      <div class="list-item-product">
        <div class="item-product grid-layout">
          <div
            class="item d-flex flex-column space-around"
            v-for="newestproduct in newestProducts"
            :key="newestproduct._id"
          >
            <div class="img-hover">
              <a :href="'/shop/' + newestproduct.slug">
                <img :src="'http://localhost:5000/' + newestproduct.image" />
              </a>
              <div class="detail-hover">
                <div id="icon">
                  <a :href="'/shop/' + newestproduct.slug"
                    ><i class="far fa-eye"></i
                  ></a>
                  <a @click="addToWishlist(newestproduct)"
                    ><i class="far fa-heart"></i
                  ></a>
                </div>
                <div class="btn">
                  <button
                    class="btn-explore btn-add-cart"
                    @click="addToCart(newestproduct)"
                  >
                    + ADD TO CART
                  </button>
                </div>
              </div>
            </div>
            <a :href="'/shop/' + newestproduct.slug">
              <p class="title">{{ newestproduct.title }}</p>
            </a>
            <p class="introduce">{{ newestproduct.introduce }}</p>
            <p class="price">${{ newestproduct.price }}</p>
          </div>
        </div>
        <a href="/shop">
          <button class="btn-explore">VIEW ALL</button>
        </a>
      </div>
    </div>
    <div class="introduce d-flex flex-row space-around">
      <div class="d-flex flex-column space-around">
        <p><i class="fas fa-gift"></i></p>
        <p>FREE SHIPPING</p>
        <span>&#8900;</span>
        <p>
          For county now sister engage had season better had waited. Occasional
          mrs interested far expression.
        </p>
      </div>
      <div class="d-flex flex-column space-around">
        <p><i class="far fa-file-alt"></i></p>
        <p>24/7 SUPPORT</p>
        <span>&#8900;</span>
        <p>
          Service get met adapted matters offence for. Principles man any
          insipidity age you simplicity.
        </p>
      </div>
      <div class="d-flex flex-column space-around">
        <p><i class="fas fa-coins"></i></p>
        <p>MONEY BACK</p>
        <span>&#8900;</span>
        <p>
          Use securing confined his shutters. Delightful as he it acceptance an
          solicitude discretion reasonably.
        </p>
      </div>
    </div>
    <div class="watch d-flex flex-row flex-start">
      <a href="/store/category/search?q=makeup" class="watch-face"
        ><p>FACE</p></a
      >
      <a href="/store/category/search?q=eye" class="watch-eye"><p>EYES</p></a>
      <a href="/store/category/search?q=lips" class="watch-lip"><p>LIPS</p></a>
    </div>
    <div class="brand-star d-flex flex-row center">
      <a href="/store/brand/search?q=chanel"
        ><img src="../assets/img/chanel-logo.png" alt=""
      /></a>
      <a href="/store/brand/search?q=dolceandgabbana"
        ><img src="../assets/img/d&g-logo.png" alt=""
      /></a>
      <a href="/store/brand/search?q=gucci"
        ><img src="../assets/img/gucci-logo.png" alt=""
      /></a>
      <a href="/store/brand/search?q=loreal"
        ><img src="../assets/img/logo-loreal.png" alt=""
      /></a>
      <a href="/store/brand/search?q=mac"
        ><img src="../assets/img/mac-logo.png" alt=""
      /></a>
    </div>
    <div class="last-container d-flex flex-column flex-start">
      <div class="d-flex flex-row flex-start">
        <img src="../assets/img/last-1.jpg" alt="" class="img-1" />
        <img src="../assets/img/last-4.jpg" alt="" class="img-2" />
        <img src="../assets/img/last-3.jpg" alt="" class="img-3" />
        <img src="../assets/img/last-2.jpg" alt="" class="img-4" />
        <img src="../assets/img/last-5.jpg" alt="" class="img-5" />
        <img src="../assets/img/last-6.jpg" alt="" class="img-6" />
      </div>
      <a
        href="https://www.instagram.com/ttam.mytam/"
        class="d-flex flex-column flex-start"
        target="_blank"
      >
        <span><i class="fab fa-instagram"></i></span>
        <span>INSTAGRAM</span>
        <span>@TTAM.MYTAM</span>
      </a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import API from "../api";
import { mapState } from "vuex";

export default {
  name: "HomeComponent",
  components: {},
  data() {
    return {
      newestProducts: [],
    };
  },
  async created() {
    this.link = process.env.localURL;
    const res = await API.getAllProducts();
    const product = [];
    var count = 0;
    var date = new Date().getMonth() + 1;

    //console.log(date)
    for (var i = date; i > 0; i--) {
      if ( i == 1){
        i = 13;
      }
      for (const item in res.reverse()) {
        var dateProduct = new Date(res[item].createdAt);
        if (dateProduct.getMonth() + 1 == i) {
          product.push(res[item]);
          count++;
        }
        if (count > 15) {
          count = 100;
          break;
        }
      }
      if (count == 100) {
        break;
      }
    }
    this.newestProducts = product;
  },
  mounted() {
        this.$store.commit("SET_CART");
  },
  computed: {
    ...mapState(["cart"])        
  },
  methods: {
    
    addToCart(product) {
      this.$store.dispatch("addToCart", {
        product: product,
        quantity: 1,
      });
    },
    addToWishlist(product) {
      this.$store.dispatch("addToWishlist", {
        product: product,
        quantity: 1,
      });
    },
  },
};
</script>
<style  scoped>
.d-flex {
  display: flex;
}
.flex-row {
  flex-direction: row;
}
.flex-column {
  flex-direction: column;
}
.flex-start {
  justify-content: flex-start;
}
.space-between {
  justify-content: space-between;
}
.space-around {
  justify-content: space-around;
}
.flex-grow-1 {
  flex-grow: 1;
}
.center {
  align-items: center;
  text-align: center;
  justify-content: center;
}
.container {
  width: 100%;
  background-color: rgb(243, 243, 243);
}
.container .new-product img {
  width: 100%;
}
.container .new-product .star-product {
  margin-top: -320px;
  margin-left: 80px;
  margin-bottom: 215px;
  text-align: left;
  font-family: sans-serif;
  letter-spacing: 15px;
}
.container .new-product .star-product #brand {
  font-size: 60px;
  margin: 25px 0 40px;
  font-family: Arial, Helvetica, sans-serif;
}
.btn-explore {
  border: 0.2px solid rgb(105, 90, 81);
  padding: 16px 28px;
  color: black;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  font-size: 12px;
  letter-spacing: 2px;
}
.btn-explore:hover {
  background-color: black;
  color: white;
}
.container .new-product > div:first-child .star-product {
  left: 80px;
}
.container .new-product > div:last-child .star-product {
  left: 854.1px;
}
.container .element-product {
  margin: 0 180px;
}
.container .element-product img {
  width: 100px;
  border-radius: 50%;
}
.container .element-product a {
  align-items: center;
  text-decoration: none;
  color: black;
}
.container .element-product p {
  text-align: center;
  letter-spacing: 2px;
  margin: 30px 0;
  font-size: 19px;
}
.container .element-product a:hover {
  color: rgb(190, 154, 138);
}
.container .top-product {
  width: 100%;
}
.container .top-product > p {
  font-size: 35px;
  text-align: center;
  margin-top: 70px;
  font-family: sans-serif;
  letter-spacing: 3px;
}

.container .top-product .list-item-product {
  margin: auto;
  text-align: center;
}
.grid-layout {
  display: grid;
  grid-template-columns: 260px 260px 260px 260px;
  grid-gap: 30px;
}
.grid-layout > div {
  margin: 20px;
}
.container .top-product .list-item-product .item-product {
  margin: 50px 0;
}
.container .top-product .list-item-product .item-product .item {
  width: 260px;
  font-family: Courier;
  letter-spacing: 1px;
  line-height: 2;
  background-color: white;
  height: 530px;
}
.container .top-product .list-item-product .item-product .item img {
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: rgba(24, 22, 22, 0.5);
  width: 260px;
}
.container .top-product .list-item-product .item-product .item > a {
  font-size: 35px;
  margin-bottom: 20px;
  text-decoration: none;
  color: black;
}
.container .top-product .list-item-product .item-product div .introduce {
  width: 270px;
  font-size: 16px;
  color: rgba(24, 22, 22, 0.5);
  margin-top: -10px;
}
.container .top-product .list-item-product .item-product div .price {
  font-size: 24px;
  margin-top: -30px;
  margin-bottom: 40px;
}
.detail-hover #icon > a {
  color: black;
  border: 1px solid black;
  background-color: white;
  padding: 15px;
  margin: 10px 0;
  font-size: 20px;
}
.detail-hover .btn > a {
  text-decoration: none;
  color: black;
}
.detail-hover .btn > a:hover {
  color: white;
}
.container .top-product .list-item-product .item-product .item > a:hover {
  color: rgb(228, 193, 177);
}
.detail-hover #icon > a:hover {
  border-color: rgb(228, 193, 177);
  color: rgb(228, 193, 177);
}
.detail-hover .btn {
  margin-top: 50px;
}
.detail-hover .btn-add-cart {
  font-size: 17px;
  background-color: white;
  padding: 10px 49.7px;
}
.detail-hover .btn-add-cart:hover {
  background-color: black;
  color: white;
}
.detail-hover {
  display: none;
  position: absolute;
  z-index: 5;
  color: black;
  margin-top: -157px;
}
.img-hover:hover .detail-hover {
  display: block;
}
.container .introduce {
  width: 1200px;
  margin: 50px auto;
}
.container .introduce > div {
  width: 270px;
  align-items: center;
  color: rgb(190, 154, 138);
}
.container .introduce > div p {
  margin: 10px 0;
  font-size: 27px;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 4px;
}
.container .introduce > div p:last-child {
  text-align: center;
  font-family: unset;
  font-size: 17px;
  letter-spacing: 2px;
}
.container .watch a {
  text-decoration: none;
  padding: 100px 200px;
  width: 33.3333333333%;
  height: 300px;
  font-size: 40px;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 4px;
  color: white;
}
.container .watch .watch-face {
  background-image: url(../assets/img/face.jpg);
  margin-top: 30px;
  background-repeat: no-repeat;
}
.container .watch .watch-eye {
  background-image: url(../assets/img/eye-2.jpg);
  margin-top: 15px;
}
.container .watch .watch-lip {
  background-image: url(../assets/img/lips-2.jpg);
}
.container .brand-star {
  margin: 150px;
}
.container .brand-star img {
  width: 170px;
  margin: 0 20px;
}
.container .brand-star img:hover {
  opacity: 20%;
}
.container .last-container img {
  width: 16.66666666%;
  height: 290px;
  margin: 40px 0;
}
.container .last-container .img-1 {
  margin-top: 140px;
}
.container .last-container .img-2 {
  margin-top: 230px;
}
.container .last-container .img-4 {
  margin-top: 280px;
}
.container .last-container .img-5 {
  margin-top: 90px;
}
.container .last-container .img-6 {
  margin-top: 170px;
}
.container .last-container a {
  font-size: 20px;
  font-family: "Times New Roman", Times, serif;
  letter-spacing: 7px;
  color: black;
  text-decoration: none;
  border: 0.2px solid white;
  padding: 100px 0;
  text-align: center;
  width: 330px;
  background-color: white;
  margin: 0 auto;
  margin-top: -450px;
  margin-bottom: 170px;
}
.container .last-container a span {
  margin: 9px;
}
.container .last-container a span:first-child {
  font-size: 27px;
}
.container .last-container a span:last-child {
  font-size: 15px;
}
.container .last-container a:hover {
  color: rgb(190, 154, 138);
}
</style>