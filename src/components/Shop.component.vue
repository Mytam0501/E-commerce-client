<template>
    <div class="container">
        <div class="d-flex flex-row space-between">
            <img src="../assets/img/banner-shop3.jpg" alt="">
            <img src="../assets/img/banner-shop.jpg" alt="">
        </div>
        <div class="banner">
            <p class="name">SHOP</p>
            <p><a href="/">HOME</a> > <a href="/shop">SHOP</a></p>
        </div>
        <div class="main d-flex flex-row space-between">
            <div class="category d-flex flex-column flex-start">
                <div>
                    <p class="title">PRODUCT CATEGORIES</p>
                    <p class="product-line"><a href="/store/category/search?q=fragrance">Fragrance</a></p>
                    <p class="product-line"><a href="/store/category/search?q=makeup">Makeup</a></p>
                    <p class="product-line-child"><a href="/store/category/search?q=eye">Eye Palettes</a></p>
                    <p class="product-line-child"><a href="/store/category/search?q=hair">Hair Health</a></p>
                    <p class="product-line-child"><a href="/store/category/search?q=lips">Lips Gloss</a></p>
                    <p class="product-line"><a href="/store/category/search?q=skincare">Skincare</a></p>
                </div>
                <div>
                    <p class="title">PRICE</p>
                    <p class="product-line-child"><a @click="Ascending()"><i class="far fa-arrow-alt-circle-up"></i>  Ascending</a></p>
                    <p class="product-line-child"><a @click="Decrease()"><i class="far fa-arrow-alt-circle-down"></i>  Decrease</a></p>
                </div>
            </div>
            <div class="d-flex flex-column flex-start">
                <p class="count">There are {{count}} products in {{cate}} products</p>
                <div class="all-products grid-layout" v-if="check == 0">
                    <div class="item d-flex flex-column space-around"  v-for="product in products" :key="product._id" >
                        <div  class="img-hover">
                            <a :href="'/shop/' + product.slug">
                                <img :src="'http://localhost:5000/' + product.image"/>
                            </a>
                            <div class="detail-hover">
                                <div>
                                    <a :href="'/shop/' + product.slug"><i class="far fa-eye"></i></a>
                                    <a @click="addToWishlist(product)"
                                        ><i class="far fa-heart"></i>
                                    </a>
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
                
                <div class="all-products grid-layout" v-else-if="check == 1">
                    <div class="item d-flex flex-column space-around"  v-for="product in products" :key="product._id" >
                        <div  class="img-hover">
                            <a :href="'/shop/' + product.slug">
                                <img :src="'http://localhost:5000/' + product.image"/>
                            </a>
                            <div class="detail-hover">
                                <div>
                                    <a :href="'/shop/' + product.slug"><i class="far fa-eye"></i></a>
                                    <a @click="addToWishlist(product)"
                                        ><i class="far fa-heart"></i>
                                    </a>
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

                <div class="all-products grid-layout" v-else>
                    <div class="item d-flex flex-column space-around"  v-for="product in products" :key="product._id" >
                        <div  class="img-hover">
                            <a :href="'/shop/' + product.slug">
                                <img :src="'http://localhost:5000/' + product.image"/>
                            </a>
                            <div class="detail-hover">
                                <div>
                                    <a :href="'/shop/' + product.slug"><i class="far fa-eye"></i></a>
                                    <a @click="addToWishlist(product)"
                                        ><i class="far fa-heart"></i>
                                    </a>
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
    </div>

</template>
<script>
// @ is an alias to /src
import API from '../api'
import { mapState } from "vuex";


export default {
    name: 'ShopComponent',
    components: {
    },
    data() {
        return {
            products: [],
            count: '',
            cate: '',
            check: 0,
        };
    },
    async created() {
        const res = await API.getAllProducts();
        const search = this.$route.query.q;

        if(search==null){
            this.count = res.length;
            this.cate = 'all';
            this.products = res;
        }
        else{
            this.cate = this.$route.query.q;
            const categoryProduct = [];
            for (const item in res) {
                const categoryName = res[item].category.replace(/ +/g, "").toLowerCase();
                if (categoryName == search){
                    categoryProduct.push(res[item]);
                }
            }
            this.count = categoryProduct.length;
            this.products = categoryProduct;
        }
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
        Ascending(){
            this.check = 1;
            const pro = this.products;
            for (const i in pro) {
                for (const j in pro) {
                    if (pro[j].price > pro[i].price){
                        let temp = pro[j];
                        pro[j] = pro[i];
                        pro[i] = temp;
                    }
                }
            }
            this.products = pro;
        },
        Decrease(){
            this.check = -1;
            const pro = this.products;
            for (const i in pro) {
                for (const j in pro) {
                    if (pro[j].price < pro[i].price){
                        let temp = pro[j];
                        pro[j] = pro[i];
                        pro[i] = temp;
                    }
                }
            }
            this.products = pro;
        }
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
    position: absolute;
    top: 280px;
    left: 575px;
    color: black;
}
.container .banner p:first-child{
    font-size: 130px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    letter-spacing: 15px;
}
.container .banner p:last-child{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    letter-spacing: 5px;
    font-size: 13px;
    margin-left: 115px;
    margin-top: 100px;
}
.container .banner p:last-child a{
    text-decoration: none;
    color: black;
}
.container .main{
    width: 1150px;
    margin: auto;
    margin-top: 90px;
}
.container div img{
   width: 100%;
}
.grid-layout{
    display:grid;
    grid-template-columns: 260px 260px 260px;
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
.container .main .category{
    background-color: white;
    height: 620px;
    margin-top: 7px;
}
.container .main .category div{
    margin: 40px;
}
.container .main .category div .title{
    font-family: Courier;
    letter-spacing: 1px;
    line-height: 1.2;
    font-size: 20px;
    font-weight: bold;
}
.container .main .category div .product-line{
    font-family: Courier;
    letter-spacing: 1px;
    font-size: 20px;
    margin: 7px 0;
}
.container .main .category div .product-line-child{
    font-family: Courier;
    letter-spacing: 1px;
    font-size: 17px;
    margin: 10px;
}
.container .main .category div p a{
    text-decoration: none;
    color: rgba(24, 22, 22, 0.5);
}
.container .main .category div p a:hover{
    color: rgb(190, 154, 138);
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