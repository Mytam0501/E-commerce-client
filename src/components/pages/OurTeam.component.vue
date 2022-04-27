<template>
    <div class="container">
        <div class="banner">
            <img src="../../assets/img/background-our-team.jpg" alt="">
            <div class="title">
                <p>OUR TEAM</p>
                <p><a href="/">HOME </a> ><a href="/page/our-team"> OUR TEAM</a></p>
            </div>
        </div>
        <div class="main grid-layout">
            <div v-for="member in team" :key="member._id">
                <div class="item d-flex flex-column space-around">
                    <img :src="'https://ttstore-cosmetic.herokuapp.com/' + member.image"/>
                    <div class="infomation-detail d-flex flex-column space-around">
                        <p class="name">{{member.name}}</p>
                        <span>&#8900;</span>
                        <p class="job">{{member.job}}</p>
                        <p class="description">{{member.description}}</p>
                        <div class="infoma">
                            <ul>
                                <li><a :href="'https://www.facebook.com/' + member.facebook + '/'"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a :href="'https://www.instagram.com/' + member.instagram + '/'"><i class="fab fa-instagram"></i></a></li>
                                <li><a :href="'https://www.instagram.com/' + member.instagram + '/'"><i class="fas fa-phone-square-alt"></i></a></li>
                                <li><a :href="'https://www.instagram.com/' + member.instagram + '/'"><i class="fab fa-youtube"></i></a></li>
                            </ul>
                        </div>
                        <div class="phone d-flex flex-row space-around">
                            <p><i class="fas fa-phone-alt"></i> + {{member.phoneNumber}}</p>
                            <p><i class="far fa-envelope"></i> {{member.emailAddress}}@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import API from '../../api'

import { mapState } from "vuex";
export default {
    name: 'OurTeamComponent',
    components: {
    },
    data() {
        return {
            team: [],
        };
    },
    async created(){
        try {
            this.team = await API.getAllOurTeams();
            console.log(team)
        } catch (error) {
            console.log(error)
        }
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
.grid-layout{
    display:grid;
    grid-template-columns: 500px 500px;
    grid-column-gap: 80px;
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
    font-size: 100px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    letter-spacing: 15px;
    text-align: center;
    margin-top: -250px;
    color: white;
}

.container .banner p:last-child{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    letter-spacing: 5px;
    font-size: 13px;
    text-align: center;
    margin-top: 130px;
    margin-bottom: 100px;
    color: white;
}
.container .banner p:last-child a{
    text-decoration: none;
    color: white;
}
.container .banner p:last-child a:hover{
    color: rgb(0, 0, 0);
}
.container .main{
    width: 1080px;
    margin: auto;
}
.container .main .item{
    margin: 40px 0;
}
.container .main img{
    width: 100%;
    height: 100%;
}
.container .main .infomation-detail{
    text-align: center;
    background-color: white;
}
.container .main .infomation-detail .name{
    font-family: Courier;
    letter-spacing: 5px;
    font-size: 35px;
    margin-top: 40px;
}
.container .main .infomation-detail span{
    margin-top: -10px;
    margin-bottom: 10px;
}
.container .main .infomation-detail .job{
    font-family: 'Times New Roman', Times, serif;
    letter-spacing: 5px;
    font-size: 17px;
    color: rgba(24, 22, 22, 0.5);
}
.container .main .infomation-detail .description{
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    letter-spacing: 1px;
    font-size: 14px;
    color: rgba(24, 22, 22, 0.5);
    margin: 40px;
}
.container .main .infomation-detail .infoma{
    margin: auto;
}
.container .main .infomation-detail .infoma a:hover{
    color: rgb(190, 154, 138);
}
.container .main .infomation-detail .phone{
    margin: 10px 50px 40px 50px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    letter-spacing: 2px;
    font-size: 12px;
    color: rgba(24, 22, 22, 0.5);
}
</style>