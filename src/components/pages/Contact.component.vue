<template>
    <div class="container">
        <div class="banner-img">
            <img src="../../assets/img/Capture.png" alt="">
            <div class="banner">
                <p class="name">CONTACT</p>
                <p><a href="/">HOME</a> > <a href="/contact">CONTACT</a></p>
            </div>
        </div>
        <div class="country">
            <p>VIETNAM</p>
        </div>
        <div class="detail-infomation d-flex flex-row space-around">
            <div class="info d-flex flex-row space-around">
                <div class="d-flex flex-column flex-start">
                    <p class="title">PHONE</p>
                    <p>012-345-678</p>
                    <p>012-345-678</p>
                    <p class="title">EMAIL</p>
                    <p>mytamlh0501@gmail.com</p>
                </div>
                <div class="d-flex flex-column flex-start">
                    <p class="title">ADDRESS</p>
                    <p>9 East 40th Street, 3rd Floor, New York City</p>
                    <p class="title">SOCIAL NETWORKS</p>
                    <ul>
                        <li><a href="https://www.facebook.com/MYTAM0501/"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="https://www.instagram.com/ttam.mytam/"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="https://www.instagram.com/ttam.mytam/"><i class="fas fa-phone-square-alt"></i></a></li>
                        <li><a href="https://www.instagram.com/ttam.mytam/"><i class="fab fa-youtube"></i></a></li>
                    </ul>
                </div>
            </div>
            <div>
                <img src="../../assets/img/location.png" alt="">
            </div>
        </div>
        <div class="question d-flex flex-row space-around">
            <div>
                <img src="../../assets/img/contact.jpg" alt="">
            </div>
            <div class="form-aks">
                <form method="POST" action="mailto:mytamlh0501@gmail.com" class="d-flex flex-column space-around">
                    <p>SEND YOUR QUESTION</p>
                    <input type="text" placeholder="Your name">
                    <input type="text" placeholder="Your email">
                    <textarea name="your-message" id="" cols="40" rows="4" placeholder="Your message"></textarea>
                    <button type="submit" class="btn-explore">SEND</button>
                </form>
            </div>
        </div>

    </div>
</template>
<script>
// @ is an alias to /src

import { mapState } from "vuex";
export default {
    name: 'ContactComponent',
    components: {
    },
    data() {
        return {
            
        };
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
.btn-explore{
    border: 0.2px solid rgb(105, 90, 81);
    padding: 16px 28px;
    color: white;
    background-color: rgb(0, 0, 0);
    cursor: pointer;
    font-size: 12px;
    letter-spacing: 2px;
    margin-top: 10px;
}
.btn-explore:hover{
    border: 0.2px solid rgb(161, 161, 161);
    background-color: rgb(105, 105, 105);
    color: rgb(255, 255, 255);
}
.container{
    width: 100%;
    background-color: rgb(243, 243, 243);
}
.container .banner-img{
    margin-bottom: 150px;
}
.container .banner-img img{
    width: 100%;
}
.container .banner-img .banner{
    position: absolute;
    top: 480px;
    left: 425px;
    color: black;
    background-color: #eaeaea;
    padding: 0 50px;
}
.container .banner-img .banner p:first-child{
    font-size: 130px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    letter-spacing: 15px;
}
.container .banner-img .banner p:last-child{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    letter-spacing: 5px;
    font-size: 13px;
    margin-left: 240px;
}
.container .banner-img .banner p:last-child a{
    text-decoration: none;
    color: black;
}
.container .country{
    text-align: center;
    font-family: Courier;
    letter-spacing: 1px;
    line-height: 2;
    font-size: 35px;
    margin-bottom: 20px;
}
.detail-infomation{
    width: 1100px;
    margin: auto;
}
.container .detail-infomation img{
    height: 385px;
}
.container .detail-infomation .info{
    background-color: white !important;
    border-color: white !important;
    width: 550px;
    height: 385px;
}
.container .detail-infomation .info>div{
    width: 250px;
    padding: 20px 10px 20px 40px;
}
.container .detail-infomation .info>div p{
    margin-top: 10px;
}
.container .detail-infomation .info>div .title{
    font-family: Courier;
    letter-spacing: 1px;
    line-height: 2;
    font-size: 20px;
    margin-top: 30px;
    margin-left: -10px;
}
.container .question{
    width: 1100px;
    margin: auto;
    margin-top: -7px;
}
.container .question img{
    width: 550px;
    margin-bottom: 60px;
}
.container .question .form-aks{
    background-color: white;
    width: 550px;
    padding: 30px 60px;
    height: 433.5px;
}
.container .question .form-aks p{
    font-family: Courier;
    letter-spacing: 2px;
    font-size: 32px;
    margin-bottom: 24px;
}
.container .question .form-aks textarea,
.container .question .form-aks input{
    border: none;
    background-color: rgba(218, 218, 218, 0.5);
    padding: 13px;
    font-family: Courier;
    letter-spacing: 2px;
    font-size: 14px;
    margin: 4.5px 0;
}
.container .question .form-aks textarea:focus,
.container .question .form-aks input:focus{
    background-color: rgba(218, 218, 218, 0.25);
    outline: none;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(218, 218, 218, 0.5);
}



</style>