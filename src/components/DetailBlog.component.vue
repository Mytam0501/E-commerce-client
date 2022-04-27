<template>
    <div class="container">
        <div class="banner">
            <img src="../assets/img/background-blog-detail.jpg" alt="">
            <div class="title">
                <p>{{blog.title}}</p>
                <p><a href="/">HOME </a> ><a href="/blog"> BLOG</a> ><a :href="'/blog/' + blog.slug"> {{blog.title}}</a></p>
            </div>
        </div>
        <div class="container-center d-flex flex-row space-between">
            <div class="main">
                <img :src="'https://ttstore-cosmetic.herokuapp.com/' + blog.image" alt="">
                <div class="infomation d-flex flex-column space-between">
                    <div class="time d-flex flex-row space-between">
                        <p>By {{blog.author}}</p>
                        <span>&#8900;</span>
                        <p>{{blog.time}}</p>
                        <span>&#8900;</span>
                        <p>{{blog.caregory}}, Fashion</p>
                    </div>
                    <div class="description">
                        {{blog.description}}
                    </div>
                    <div class="qoute">
                        <i class="fas fa-quote-left"></i>
                        <p>{{blog.qoute}}</p>
                        <p class="qoute-auther">--- {{blog.qouteAuthor}}</p>
                    </div>
                    <div class="brand-history">
                        <p class="title">BRAND HISTORY</p>
                        <p>{{blog.brandHistoryDescription}}</p>
                    </div>
                    <div class="caregory d-flex flex-row space-between">
                        <div class="left d-flex flex-row space-between">
                            <p>{{blog.caregory}}</p>
                            <span>&#8900;</span>
                            <p>Trend</p>
                        </div>
                        <div class="right d-flex flex-row space-between">
                            <p>INFOMATION</p>
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
            <div class="list">
                <p>ALL POSTS</p>
                <div class="item d-flex flex-row flex-start">
                    <a href="/blog/new-trends-in-2020">
                        <img src="../assets/img/new-trend1.jpg" alt="">
                    </a>
                    <div class="infoma d-flex flex-column space-between">
                        <a href="/blog/new-trends-in-2020">
                            <p class="title">NEW TRENDS IN 2020</p>
                        </a>
                        <p class="time">OCTOBER 20, 2021</p>
                    </div>
                </div>
                <div class="item d-flex flex-row flex-start">
                    <a href="/blog/gallery-post">
                        <img src="../assets/img/new-trend2.jpg" alt="">
                    </a>
                    <div class="infoma d-flex flex-column space-between">
                        <a href="/blog/gallery-post">
                            <p class="title">GALLERY POST</p>
                        </a>
                        <p class="time">OCTOBER 20, 2020</p>
                    </div>
                </div>
                <div class="item d-flex flex-row flex-start">
                    <a href="/blog/gallery-post-8LkQ_KR6s8">
                        <img src="../assets/img/new-trend3.jpg" alt="">
                    </a>
                    <div class="infoma d-flex flex-column space-between">
                        <a href="/blog/gallery-post-8LkQ_KR6s8">
                            <p class="title">GALLERY POST</p>
                        </a>
                        <p class="time">OCTOBER 20, 2020</p>
                    </div>
                </div>
                <div class="item d-flex flex-row flex-start">
                    <a href="/blog/new-post">
                        <img src="../assets/img/new-trend4.jpg" alt="">
                    </a>
                    <div class="infoma d-flex flex-column space-between">
                        <a href="/blog/new-post">
                            <p class="title">NEW POST</p>
                        </a>
                        <p class="time">OCTOBER 20, 2020</p>
                    </div>
                </div>
                <div class="item d-flex flex-row flex-start">
                    <a href="/blog/video-post">
                        <img src="../assets/img/new-trend5.jpg" alt="">
                    </a>
                    <div class="infoma d-flex flex-column space-between">
                        <a href="/blog/video-post">
                            <p class="title">VIDEO POST</p>
                        </a>
                        <p class="time">OCTOBER 20, 2020</p>
                    </div>
                </div>
                <div class="item d-flex flex-row flex-start">
                    <a href="/blog/post">
                        <img src="../assets/img/new-trend6.jpg" alt="">
                    </a>
                    <div class="infoma d-flex flex-column space-between">
                        <a href="/blog/post">
                            <p class="title">POST</p>
                        </a>
                        <p class="time">OCTOBER 20, 2020</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import API from '../api';

import { mapState } from "vuex";
export default {
    name: 'DetailBlogComponent',
    components: {
    },
    data() {
        return {
            blog: {},
        };
    },
    mounted() {
        this.$store.commit("SET_CART");
  },
    computed: {
        ...mapState(["cart","wishlist"])        
    },
    async created() {
        const res = await API.getBlogByID(this.$route.params.slug);
        this.blog = res;
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
.container .banner{
    margin-bottom: 50px;
}
.container .banner .title p:first-child{
    font-size: 100px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    letter-spacing: 15px;
    text-align: center;
    margin-top: -230px;
    margin-bottom: 250px;
}

.container .banner p:last-child{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    letter-spacing: 5px;
    font-size: 13px;
    position: absolute;
    top: 400px;
    left: 590px;
}
.container .banner p:last-child a{
    text-decoration: none;
    color: black;
}
.container .banner p:last-child a:hover{
    color: rgb(190, 154, 138);
}
.container .container-center{
    width: 1250px;
    margin: auto;
}
.container .main img{
    width: 900px;
    height: 400px;
    object-fit: cover;
}
.container .main .infomation{
    color: rgba(24, 22, 22, 0.5);
    background-color: white;
    margin-top: -5px;
    margin-bottom: 50px;
    width: 900px;
}
.container .main .infomation .time{
    width: 600px;
    margin: 50px;
    font-family: Courier;
    letter-spacing: 1.5px;
    font-size: 14px;
}
.container .main .infomation .description{
    margin: 0 50px;
    font-family: Courier;
    font-size: 17px;
    letter-spacing: 1px;
    line-height: 30px;
}
.container .main .infomation .qoute{
    margin: 40px 100px;
    font-size: 20px;
    font-family: Courier;
    letter-spacing: 0.5px;
    color: rgb(24, 22, 22);
}
.container .main .infomation .qoute i{
    color: rgb(190, 154, 138);
    margin-left: -50px;
} 
.container .main .infomation .qoute p:first-child{
    line-height: 35px;
}
.container .main .infomation .qoute .qoute-auther{
    font-size: 14px;
    font-family: Courier;
    letter-spacing: 0.5px;
    color: rgba(24, 22, 22, 0.5);
    margin: 40px 0;
}
.container .main .infomation .brand-history .title{
    margin: 0 50px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 35px;
    letter-spacing: 5px;
    color: rgba(24, 22, 22, 1);
}
.container .main .infomation .brand-history p:last-child{
    font-size: 17px;
    font-family: Courier;
    letter-spacing: 1px;
    margin: 50px;
    line-height: 30px;
}
.container .main .infomation .caregory{
    margin: 20px 50px;
}
.container .main .infomation .caregory .left{
    font-size: 14px;
    font-family: Courier;
    letter-spacing: 0.5px;
}
.container .main .infomation .caregory .left span{
    margin: 0 15px;
}
.container .main .infomation .caregory .right ul{
    margin-top: -15px;
}
.container .list{
    background-color: white;
    padding: 30px;
    margin-left: 40px;
    margin-bottom: 50px;
    height: 700px;
}
.container .list>p{
    font-size: 27px;
    font-family: Courier;
    letter-spacing: 0.5px;
}
.container .list .item{
    margin: 20px 0;
}
.container .list .item a{
    text-decoration: none;
    color: black;
}
.container .list .item a:hover{
    color: rgb(190, 154, 138);
}
.container .list .item img{
    width: 70px;
    height: 70px;
    object-fit: cover;
    margin-right: 20px;
}
.container .list .item .infoma .title{
    font-size: 15px !important;
    font-family: Courier !important;
    letter-spacing: 0.5px !important;
    line-height: 1;
    margin-top: 5px;
}
.container .list .item .infoma .time{
    font-size: 12px;
    font-family: Courier;
    letter-spacing: 0.5px;
    color: rgba(24, 22, 22, 0.5);
    margin-top: -8px;
}
</style>