<template>
    <div class="container">
        <div class="detail d-flex flex-row space-around">
            <div class="img flex-column space-around">
                <img :src="'http://localhost:5000/' +  product.image" alt="">
                <p class="name">DESCRIPTION</p>
                <p class="description">{{product.description}}</p>
            </div>
            <div class="infomation flex-column space-around">
                <p class="title">{{product.title}}</p>
                <p class="introduce">{{product.introduce}}</p>
                <p class="price">${{product.price}}</p>
                    <div class="quantity d-flex flex-row flex-start">
                        <div class="c-product__quantity quantity">
                            <input class="quantity" type="number" name="quantity" required min="1" v-model="quantity"
                                onkeypress="return event.charCode >= 48 && event.charCode <= 57" />
                        </div>
                        <button type="submit" class="btn-explore"  @click="addToCart(product)">Add to cart</button>
                    </div>
                <p class="category">CATEGORY: <a href="/shop"> {{product.category}}</a></p>
                <p class="category">BRAND: <a href="/shop"> {{product.brand}}</a></p>
                <div class="info d-flex flex-row flex-start">
                    <p>INFOMATION:</p>
                    <ul>
                        <li><a href="https://www.facebook.com/MYTAM0501/"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="https://www.instagram.com/ttam.mytam/"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="https://www.instagram.com/ttam.mytam/"><i class="fas fa-phone-square-alt"></i></a></li>
                        <li><a href="https://www.instagram.com/ttam.mytam/"><i class="fab fa-youtube"></i></a></li>
                    </ul>
                </div>  
            </div>
        </div>
    </div>
</template>




<script>
import API from '../api';
import { mapState } from "vuex";

export default {
    name: 'DetailProductComponent',
    components: {
    },
    data() {
        return {
            product: {},
            quantity: 1,
        };
    },
    async created() {
        this.product = await API.getProductByID(this.$route.params.slug);

},
mounted() {
        this.$store.commit("SET_CART");
  },
computed: {
        ...mapState(["cart","wishlist"])        
    },
  methods: {
    addToCart(product) {
      this.$store.dispatch("addToCart", {
        product: product,
        quantity: parseInt(this.quantity),
      });
    },
  },
};
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
.container .banner img{
    width: 100%;
}
.container .banner .title{
    position: absolute;
    top: 230px;
    left: 425px;
}
.container .banner .title .name{
    font-size: 130px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    letter-spacing: 15px;
    margin-bottom: 180px;
}
.container .detail{
    width: 1200px;
    margin: auto;
}
.container .detail>div{
    width: 550px;
    margin: 70px 0;
    padding-right: 150px;
}
.container .detail .img img{
    width: 500px;
}
.container .detail .img{
    width: 650px;
}
.container .detail .img .name{
    text-align: center;
    font-family: Courier;
    letter-spacing: 1.5px;
    line-height: 1.3;
    font-size: 24px;
    margin: 20px 0;
}
.container .detail .img .description{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    letter-spacing: 1.2px;
    line-height: 1.3;
    font-size: 16px;
    margin: 20px 0;
    color: rgba(24, 22, 22, 0.5);
    margin-bottom: 50px;
}
.container .detail .infomation .title{
    margin: 20px 0 !important;
    font-family: 'Times New Roman', Times, serif !important;
    letter-spacing: 15px !important;
    line-height: 1.3 !important;
    font-size: 35px !important;
}
.container .detail .infomation .introduce{
    font-family: Courier;
    letter-spacing: 2px;
    line-height: 1.3;
    font-size: 17px;
    color: rgba(24, 22, 22, 0.5);
}
.container .detail .infomation .price{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    letter-spacing: 2px;
    font-size: 23px;
    font-weight: 500;
    margin: 50px 0;
}
.container .detail .infomation .quantity{
    background-color: white;
    padding: 18px;
}
.container .detail .infomation .quantity input{
    padding: 11.5px;
    width: 90px;
    border: 0.2px solid rgba(43, 43, 43, 0.829);
    outline: none;
}
.container .detail .infomation .quantity .btn-explore{
    border: 0.2px solid rgb(105, 90, 81);
    color: rgb(255, 255, 255);
    background-color: rgb(0, 0, 0);
    cursor: pointer;
    font-size: 17px;
    letter-spacing: 2px;
    padding: 12.5px 40px;
    height: 49.5px;
    margin: auto 0;
}
.container .detail .infomation .quantity .btn-explore:hover{
    background-color: rgba(43, 43, 43, 0.829);
    color: white;
}
.container .detail .infomation .category{
    font-family: Courier;
    letter-spacing: 2px;
    line-height: 1.3;
    font-size: 17px;
    color: rgba(24, 22, 22, 0.5);
    margin-top: 40px;
}
.container .detail .infomation .category a{
    text-decoration: none;
    color: rgba(24, 22, 22, 0.5);
}
.container .detail .info{
    background-color: rgb(243, 243, 243) !important;
}
.container .detail .info p{
    font-family: Courier;
    letter-spacing: 1.5px;
    line-height: 1.3;
    font-size: 17px;
    margin: 17.5px 0;
}
.container .detail .infomation .category a:hover,
.container .detail .info a:hover{
    color: rgb(190, 154, 138);
}
ul { 
    list-style-type: none;
    margin: 0; 
    padding: 0; 
    overflow: hidden; 
}
li { 
    float: left;
}
li a {
    display: block; 
    color:black;
    text-align: center; 
    margin: 15px;
    text-decoration: none; 
}

</style>