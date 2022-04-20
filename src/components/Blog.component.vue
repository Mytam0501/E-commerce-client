<template>
    <div class="container">
        <div class="banner">
            <p>BLOG</p>
            <p><a href="/">HOME </a> ><a href="/blog"> BLOG</a></p>
        </div>
        <div class="flex-column space-around" v-for="blog in blogs" :key="blog._id">
            <div class="item-blog d-flex flex-row space-around">
                <img :src="'http://localhost:5000/' + blog.image" alt="">
                <div class="item d-flex flex-column space-around">
                    <p class="title">{{blog.title}}</p>
                    <p class="description">For county now sister engage had season better had waited. Occasional mrs interested far expression.</p>
                    <p class="caregory">{{blog.caregory}} * Fashion</p>
                    <a :href="'/blog/' + blog.slug">
                        <button class="btn-explore">READ MORE</button>
                    </a>
                </div>
                <div class="time">{{blog.time}}</div>
            </div>
        </div>
        <div style="height: 50px"></div>
    </div>
</template>

<script>
// @ is an alias to /src
import API from '../api'
import { mapState } from "vuex";

export default {
    name: 'BlogComponent',
    components: {
    },
    data() {
        return {
            blogs: [],
        };
    },
    async created(){
        this.blogs = await API.getAllBlogs();
    },
    mounted() {
        this.$store.commit("SET_CART");
  },
    computed: {
        ...mapState(["cart"])        
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
    background-image: url(../assets/img/background-blog.jpg);
    color: black;
    height: 600px;
    margin-top: -90px;
}
.container .banner p:first-child{
    font-size: 120px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    letter-spacing: 15px;
    position: absolute;
    top: 260px;
    left: 610px;
    position: absolute;
    top: 260px;
    left: 600px;
}

.container .banner p:last-child{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    letter-spacing: 5px;
    font-size: 13px;
    position: absolute;
    top: 530px;
    left: 690px;
}
.container .banner p:last-child a{
    text-decoration: none;
    color: black;
}
.container .banner p:last-child a:hover{
    color: rgb(190, 154, 138);
}
.container .item-blog{
    width: 950px;
    margin: 40px auto;
}
.container .item-blog img{
    width: 350px;
    height: 350px;
    object-fit: cover;
}
.container .item-blog .item{
    background-color: white;
    padding: 40px;
    width: 600px;
    height: 350px;
}
.container .item-blog .item .title{
    font-family: 'Times New Roman', Times, serif;
    letter-spacing: 1px;
    line-height: 2;
    font-size: 27px;
}
.container .item-blog .item .description{
    font-family: Courier;
    line-height: 2;
    font-size: 17px;
    color: rgba(24, 22, 22, 0.5);
}
.container .item-blog .item .caregory{
    font-family: Courier;
    line-height: 2;
    font-size: 14px;
    color: rgba(24, 22, 22, 0.5);
    margin: 20px 0;
}
.container .item-blog .time{
    padding: 16px;
    color: white;
    background-color: black;
    cursor: pointer;
    font-size: 17px;
    letter-spacing: 2px;
    margin-top: 20px;
    width: 210px;
    height: 50px;
    position: absolute;
    left: 450px;
}
.btn-explore{
    border: 0.2px solid rgb(105, 90, 81);;;
    padding: 16px;
    color: black;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
    font-size: 12px;
    letter-spacing: 2px;
    margin-top: 20px;
    width: 160px;
}
.btn-explore:hover{
    background-color: black;
    color: white;
}

</style>