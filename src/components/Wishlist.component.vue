<template>
    <div class="container">
        <div class="banner">
            <img src="../assets/img/Capture2.png" alt="">
            <div class="title">
                <p>WISHLIST</p>
                <p><a href="/">HOME </a> ><a href="/wishlist"> WISHLIST</a></p>
            </div>
        </div>
        <div v-if="wishlist.length == 0" style="text-align: center; font-size: 50px; font-weight: bold;">
            {{checkWishlist}}
            <br/><a href="/"><button class="btn-explore" > KEEP SHOPPING</button></a>
        </div>
        <div class="main" v-else>
            <div class="d-flex flex-column space-around">
                <div class="name d-flex flex-row space-between">
                    <p>PRODUCT</p>
                    <p class="price">PRICE</p>
                    <p>STOCK STATUS</p>
                </div>
                <div class="list-product d-flex flex-column space-around">
                    
                    <div class="item d-flex flex-row space-between" v-for="(wishlist_item, index) in wishlist" :key="wishlist_item.product.id">
                        <img :src="'http://localhost:5000/' + wishlist_item.product.image"/>
                        <p class="title">{{wishlist_item.product.title}}</p>
                        <p class="price">${{wishlist_item.product.price}}</p>
                        <p class="stock">IN STOCK</p>
                        <button class="btn-explore" style="margin-right: -60px" @click="addToCart(wishlist_item.product)" >+ ADD TO CART</button>
                        <button class="btn-explore" @click="removeItem(index)">X</button>
                    </div>
                </div>
                <div class="link d-flex flex-row space-between">
                    <p>SHARE LINK:</p>
                    <a href="#tab">http://localhost:8080/wishlist</a>
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
// @ is an alias to /src
import { mapState } from "vuex";

export default {
    name: 'WishlistComponent',
    components: {
    },
    data() {
        return {
            checkWishlist: "Your wishlist is currently empty!!"
        };
    },
    
    mounted() {
        this.$store.commit("SET_WISHLIST", "SET_CART");
    },
    computed: {
        ...mapState(["cart","wishlist"])        
    },
    methods: {
        addToCart(product) {
            this.$store.dispatch("addToCart", {
                product: product,
                quantity: 1,
            });
        },
        removeItem(index) {
            let newCart = JSON.parse(window.localStorage.wishlist);
            newCart.splice(index, 1);
            window.localStorage.wishlist = JSON.stringify(newCart);
            this.$store.commit("SET_WISHLIST");
            
        },
    },
    async created() {
        console.log('ahihi')
        console.log(typeof (JSON.parse(window.localStorage.wishlist)))
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
.container{
    width: 100%;
    background-color: rgb(243, 243, 243);
}
.container .banner img{
    width: 100%;
    height: 400px;
    object-fit: cover;
}
.container .banner .title p:first-child{
    font-size: 80px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    letter-spacing: 15px;
    text-align: center;
    margin-top: -250px;
    margin-bottom: 200px;
    color: rgb(0, 0, 0);
}

.container .banner p:last-child{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    letter-spacing: 5px;
    font-size: 13px;
    text-align: center;
    margin-top: -70px;
    margin-bottom: 100px;
    color: rgb(0, 0, 0);
}
.container .banner p:last-child a{
    text-decoration: none;
    color: rgb(0, 0, 0);
}
.container .banner p:last-child a:hover{
    color: rgb(190, 154, 138);
}
.container .main{
    width: 1100px;
    margin: auto;
}
.container .main .name{
    width: 800px;
}
.container .main .name p{
    color: rgba(24, 22, 22, 0.5);
    letter-spacing: 1px;
    font-size: 17px;
    font-family: Courier;
    font-weight: bold;
}
.container .main .name .price{
    margin-right: -440px;
}
.container .main .list-product{
    border-width: 1px 0 1px 0;
    border-style: solid;
    border-color: rgba(24, 22, 22, 0.5);
    margin: 10px 0;
    padding: 15px 0;
}
.container .main .list-product img{
    height: 60px;
    width: 80px;
    object-fit: cover;
    margin: 20px 0;
}
.container .main .list-product p{
    margin: 40px 0;
    letter-spacing: 1px;
    font-size: 18px;
    font-family: Courier !important;
}
.container .main .list-product .title{
    margin-left: -60px ;
    margin-top: 20px;
    width: 400px;
    color: rgba(0, 0, 0, 0.7) !important;
}
.container .main .list-product .price{
    font-weight: bold;
}
.container .main .list-product .stock{
    font-size: 16px;
    color: rgba(0, 0, 0, 0.5);
    font-weight: 700;
}
.btn-explore{
    border: 0.2px solid rgb(105, 90, 81);;;
    padding: 16px 30px !important;
    color: black;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
    font-size: 12px;
    letter-spacing: 2px;
    margin: 32px 0;
}
.btn-explore:hover{
    background-color: black;
    color: white;
}
.container .main .link{
    margin-bottom: 50px;
}
.container .main .link p{
    color: rgba(24, 22, 22, 0.5);
    margin-top: 15px;
}
.container .main .link>a{
    text-decoration: none;
    margin: 15px 350px 0 0;
    color: rgba(24, 22, 22, 0.5);
}
.container .main .link a:hover{
    color: rgb(190, 154, 138);
}
</style>