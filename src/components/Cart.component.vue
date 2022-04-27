<template>
    <div class="container">
        <div class="banner">
            <img src="../assets/img/background-cart.jpg" alt="">
            <div class="title">
                <p>SHOPPING CART</p>
                <p><a href="/">HOME </a> ><a href="/shopping-cart"> CART</a></p>
            </div>
        </div>
        <div v-if="cart.length == 0" style="text-align: center; font-size: 50px; font-weight: bold;">
            {{checkCart}}
            <br/><a href="/"><button class="btn-explore" > KEEP SHOPPING</button></a>
        </div>
        <div class="main" v-else>
            <div class="d-flex flex-column space-around">
                <div class="name d-flex flex-row space-between">
                    <p>PRODUCT</p>
                    <p class="price">PRICE</p>
                    <p>QUANTITY</p>
                    <p>SUBTOTAL</p>
                    <p>DELETE</p>
                </div>
                <div class="list-product d-flex flex-column space-around">
                    <div class="item d-flex flex-row space-between"  v-for="(cart_item, index) in cart" :key="index">
                        <img :src="'https://ttstore-cosmetic.herokuapp.com/' + cart_item.product.image"/>
                        <p class="title">{{cart_item.product.title}}</p>
                        <p class="price">${{cart_item.product.price}}</p>
                        <p class="qty">
                            <input class="quantity" type="number" name="quantity" required min="1" v-model="cart_item.quantity"
                                onkeypress="return event.charCode >= 48 && event.charCode <= 57" />
                        </p>
                        <p class="stock">${{cart_item.product.price * cart_item.quantity}}</p>
                        <button class="btn-explore" @click="removeItem(index)">X</button>
                    </div>
                    <div class="total d-flex flex-row flex-end">
                        <div>
                            <div class=" d-flex flex-row flex-end">
                                <p>TOTAL: </p>
                                <h1 style="margin-left: 5px;margin-top: -8px;">
                                    ${{getTotal().toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}
                                </h1>
                            </div>
                            <p><i>Above prices include delivery fee</i></p>
                            <div class="d-flex flex-row space-around">
                                <a href="/"><button class="btn-explore" style="margin: 0 10px;"> KEEP SHOPPING</button></a>
                                <button class="btn-explore" style="margin: 0;"> PLACE ORDER </button>
                            </div>
                        </div>
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
    name: 'CartComponent',
    components: {
    },
    data() {
        return {
            checkCart: "Your cart is currently empty!!"
        };
    },
    mounted() {
        this.$store.commit("SET_CART");
    },
    computed: {
        ...mapState(["cart"])        
    },
    methods: {
        removeItem(index) {
            let newCart = JSON.parse(window.localStorage.cart);
            newCart.splice(index, 1);
            window.localStorage.cart = JSON.stringify(newCart);
            this.$store.commit("SET_CART");
        },
        getTotal() {
            let total = 0;
            if (this.cart.length > 0) {
                this.cart.forEach((item) => {
                    total += item.product.price * item.quantity;
                });
            }
            return total;
        },
    },
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.d-flex{
    display: flex;
}
.flex-row{
    flex-direction: row;
}
.flex-column{
    flex-direction: column;
}
.flex-end{
    justify-content: flex-end;
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
    object-fit:cover;
}
.container .banner .title p:first-child{
    font-size: 100px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    letter-spacing: 15px;
    text-align: center;
    margin-top: -230px;
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
    width: 1200px;
    margin: auto;
}
.container .main .name .price{
    margin-left: 430px;
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
    margin: 15px 0;
}
.container .main .list-product p{
    margin: 40px 0;
    letter-spacing: 1px;
    font-size: 18px;
    font-family: Courier;
}
.container .main .list-product .item input{
    padding: 10px 5px 10px 17px;
    width: 70px;
    border: 1px solid black;
    outline: none;
}
.container .main .list-product .qty{
    margin-top: 30px;
    margin-right: 20px;
}
.container .main .list-product .title{
    color: rgba(0, 0, 0, 0.7);
    width: 400px;
    margin-left: -90px;
    margin-top: 16px !important;
}
.container .main .list-product .price{
    font-weight: bold;
}
.container .main .list-product .stock{
    font-size: 16px;
    color: rgba(0, 0, 0, 0.5);
    font-weight: 700;
}
.container .main .list-product .total{
    float: right;
    margin: 20px 0;
}
.container .main .list-product .total p {
    margin: 10px 0;
    font-size: 14px;
    text-align: right;
}
.btn-explore{
    border: 0.2px solid rgb(105, 90, 81);
    height: 50px;
    padding: 0px 25px;
    color: black;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
    font-size: 12px;
    letter-spacing: 2px;
    margin: 25px 0;
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
    margin: 15px 390px 0 0;
    color: rgba(24, 22, 22, 0.5);
}
.container .main .link a:hover{
    color: rgb(190, 154, 138);
}
</style>