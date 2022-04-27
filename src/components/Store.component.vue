<template>
    <div class="container">
        <div class="d-flex flex-row space-between">
            <img src="../assets/img/banner-shop3.jpg" alt="">
            <img src="../assets/img/banner-shop.jpg" alt="">
        </div>
        <div class="banner">
            <p class="name">{{title}}</p>
            <p><a href="/">HOME</a> > <a href="/shop">SHOP</a> > <a :href="'/store/brand/search?q=' + link">{{title}}</a></p>
        </div>
        <div class="main d-flex flex-column flex-start">
            <p class="count">There are {{count}} products in all</p>
            <div class="all-products grid-layout">
                <div class="item d-flex flex-column space-around" v-for="product in products" :key="product._id" v-show="product.brand">
                    <div  class="img-hover">
                        <a :href="'/shop/' + product.slug">
                            <img :src="'https://ttstore-cosmetic.herokuapp.com/' + product.image"/>
                        </a>
                        <div class="detail-hover">
                            <div>
                                <a :href="'/shop/' + product.slug"><i class="far fa-eye"></i></a>
                                <a @click="addToWishlist(product)"><i class="far fa-heart"></i></a>
                            </div>
                            <div class="btn">
                                <button class="btn-explore btn-add-cart" @click="addToCart(product)">+ ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                    <a :href="'/shop/' + product.slug">
                        <p class="title">{{product.title}}</p>
                    </a>
                    <p class="introduce">{{product.introduce}}</p>
                    <p class="price">${{product.price}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
import API from '../api'

import { mapState } from "vuex";
export default {
    name: 'StoreComponent',
    components: {
    },
    data() {
        return {
            products: [],
            title: '',
            link: '',
            count: '',
        };
    },
    async created() {
        const response = await API.getAllProducts();
        const brandProduct = [];
        const search = this.$route.query.q;
        //console.log(search);
        for (const item in response) {
            const brandName = response[item].brand.replace(/ +/g, "").toLowerCase();
            if(brandName == search){
                brandProduct.push(response[item]);
            }
        }

        //console.log(brandProduct[0].brand);
        if (brandProduct[0].brand == "DOLCE AND GABBANA") {
            this.title = "D & G"
        }
        else if (brandProduct[0].brand.toLowerCase() == "loreal") {
            this.title = "L'ORÉAL"
        }
        else this.title = brandProduct[0].brand.toUpperCase();
        this.link = brandProduct[0].brand.replace(/ +/g, "").toLowerCase();
        this.count = brandProduct.length;
        this.products = brandProduct;
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
}
</script>
<style scoped>

.d-flex{
    display: flex;
}
.flex-row{
    flex-direction: row;
}
.flex-column{
    flex-direction: column;
}
.flex-start{
    justify-content: flex-start;
}
.space-between{
    justify-content: space-between;
}
.space-around{
    justify-content: space-around;
}
.flex-grow-1{
    flex-grow: 1;
}
.center{
    align-items: center;
    text-align: center;
    justify-content: center;
}
.container{
    width: 100%;
    background-color: rgb(243, 243, 243);
}
.container .banner{
    color: black;
}
.container .banner p:first-child{
    font-size: 130px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    letter-spacing: 15px;
    text-align: center;
    margin-top: -400px;
}
.container .banner p:last-child{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    letter-spacing: 5px;
    font-size: 13px;
    text-align: center;
    margin-top: 120px;
    margin-bottom: 150px;
}
.container .banner p:last-child a{
    text-decoration: none;
    color: black;
}
.container .main{
    width: 1200px;
    margin: auto;
    margin-top: 90px;
}
.container div img{
   width: 100%;
}
.grid-layout{
    display:grid;
    grid-template-columns: 260px 260px 260px 260px;
    grid-gap: 50px;
}
.container .all-products{
    margin: auto;
    text-align: center;
}
.container .all-products .item{
    width: 280px;
    margin: 20px;
    font-family: Courier;
    letter-spacing: 1px;
    line-height: 2;
    background-color: white;
    height: 530px;
}
.container .all-products .item img{
    border-width: 0 0 1px 0;
    border-style: solid;
    border-color: rgba(24, 22, 22, 0.5);
    width: 280px;
}
.container .all-products div .title{
    font-size: 35px;
    margin-top: 20px;
}
.container .all-products div>a{
    text-decoration: none;
    color: black;
}
.container .all-products div>a:hover{
    color: rgb(190, 154, 138);
}
.container .all-products div .introduce{
    width: 270px;
    font-size: 16px;
    color: rgba(24, 22, 22, 0.5);
    margin-top: -10px;
}
.container .all-products div .price{
    font-size: 24px;
    margin-bottom: 40px;
}
.container .count{
    font-family: Courier;
    letter-spacing: 1px;
    line-height: 1.2;
    font-size: 20px;
    color: rgba(24, 22, 22, 0.5);
    margin: 5px 10px 10px 20px;
}
.detail-hover a{
    color: black;
    border: 1px solid black;
    background-color: white;
    padding: 15px;
    margin: 10px 0;
    font-size: 20px;
}
.detail-hover a:hover{
    border-color: rgb(228, 193, 177);
    color: rgb(228, 193, 177);
}
.detail-hover .btn{
    margin-top: 50px;
}
.detail-hover .btn-add-cart{
    font-size: 17px;
    background-color: white;
    padding:10px 72.7px;
    border: 1px solid black;
}
.detail-hover .btn-add-cart:hover{
    background-color: black;
    color: white;
}
.detail-hover{
    display: none;
    position: absolute;
    z-index: 5;
    color: black;
    margin-top: -157px;
}
.img-hover:hover .detail-hover {
  display: block;
}
</style>