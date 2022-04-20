<template> 
    <div class="container">
        <div class="banner">
            <p>ABOUT US</p>
            <p><a href="/home/index.html">HOME </a> ><a href="AboutUs"> ABOUT US</a></p>
        </div>
        <div class="out-mission d-flex flex-column space-around">
            <div class="d-flex flex-column space-around">
                <p>OUT</p>
                <span>&#8900;</span>
                <p>MISSION</p>
            </div>
            <div class="d-flex flex-row space-around">
                <p>Style too own civil out along. Perfectly offending this art attempted add arranging age gentleman concluded. Get who uncommonly our expression ten increasing considered occasional travelling.</p>
                <p>Name were we at hope. Remainder household direction zealously the unwilling bed sex. Lose and gay ham sake met that. Stood her place one ten spoke yet. Head case knew ever set why over.</p>
            </div>
        </div>
        <div class="about-ceo d-flex flex-row space-around">
            <div><img src="../../assets/img/ceo.jpg" alt=""></div>
            <div class="introduce-about-ceo d-flex flex-column space-around">
                <div class="title d-flex flex-column center">
                    <p>HELLO FROM</p>
                    <span>&#8900;</span>
                    <p>CEO</p>
                </div>
                <p>Turpis duis nisl iaculis tincidunt fames feugiat consequat, sed blandit. Donec tempor ut suspendisse amet. Vulputate consequat pharetra sollicitudin pellentesque tristique. Nisi, viverra volutpat tellus nisi, mauris magna quis tristique lobortis. Pharetra porta cursus facilisis non dui sed sit. Rutrum dolor varius adipiscing quam nisl etiam. Tempus tempor egestas vitae molestie pulvinar integer posuere id lobortis.</p>                   
                <p>Sit nisi diam venenatis, tortor. Vitae varius cursus augue arcu viverra ipsum semper est. Turpis rutrum lectus semper tortor ut ullamcorper mauris.</p>
            </div>

        </div>
        <div class="introduce d-flex flex-row space-around">
            <p class="flex-grow-1"></p>
            <div class="d-flex flex-column space-around">
                <p><i class="fab fa-pagelines"></i></p>
                <p>ALL NATURAL</p>
                <span>&#8900;</span>
                <p>For county now sister engage had season better had waited. Occasional mrs interested far expression.</p>
            </div>
            <div class="d-flex flex-column space-around">
                <p><i class="fas fa-crown"></i></p>
                <p>TOP QUALITY</p>
                <span>&#8900;</span>
                <p>Service get met adapted matters offence for. Principles man any insipidity age you simplicity.</p>
            </div>
            <div class="d-flex flex-column space-around">
                <p><i class="fas fa-coins"></i></p>
                <p>10% CASHBACK</p>
                <span>&#8900;</span>
                <p>Use securing confined his shutters. Delightful as he it acceptance an solicitude discretion reasonably.</p>
            </div>
            <p class="flex-grow-1"></p>
        </div>
        <div class="news d-flex flex-column space-around">
            <p>OUR LATEST</p>
            <span>&#8900;</span>
            <p>NEWS</p>
        </div>
        <div class="new-trend d-flex flex-row center">
            <div class="d-flex flex-column space-around">
                <img src="../../assets/img/new-trend1.jpg" alt="">
                <p class="date">OCTOBER 20, 2020</p>
                <a href="/blog/new-trends-in-2020">NEW TREND IN 2020</a>
                <p class="description">Use securing confined his shutters. Delightful as he it acceptance an solicitude discretion reasonably.</p>
                <a href="/blog/new-trends-in-2020">
                    <button class="btn-explore">READ MORE</button>
                </a>
            </div>
            <div class="d-flex flex-column space-around">
                <img src="../../assets/img/new-trend2.jpg" alt="">
                <p class="date">OCTOBER 20, 2020</p>
                <a href="/blog/gallery-post">GELLARY POST</a>
                <p class="description">Use securing confined his shutters. Delightful as he it acceptance an solicitude discretion reasonably.</p>
                <a href="/blog/gallery-post">
                    <button class="btn-explore">READ MORE</button>
                </a>
            </div>
        </div>
    </div>

</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";


export default {
    name: 'AboutUsComponent',
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

.container{
    background-color: rgb(243, 243, 243);
}

.container .banner{
    background-image: url(../../assets/img/about-us.jpg);
    padding: 220px;
    color: white;
    width: 100%;
    height: 400px;
    object-fit: cover;
}
.container .banner p:first-child{
    font-size: 100px;
    margin-top: -100px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    letter-spacing: 15px;
}
.container .banner p:last-child{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    letter-spacing: 5px;
    margin-top: 100px;
    margin-bottom: -200px;
    font-size: 13px;
}
.container .banner p:last-child a{
    text-decoration: none;
    color: white;
}
.container .out-mission{
    margin: 70px;
}
.container .out-mission div:first-child{
    align-items: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    letter-spacing: 5px;
    font-size: 13px;
}
.container .out-mission div:first-child p:first-child{
    font-size: 20px;
    margin: 5px;
}
.container .out-mission div:first-child p:last-child{
    font-size: 40px;
    margin: 5px;
}
.container .out-mission div:last-child{
    width: 1100px;
    margin: auto;
}
.container .out-mission div:last-child p{
    width: 460px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    letter-spacing: 0.3px;
    font-size: 17px;
    margin: 30px;
    line-height: 2;
    color: rgba(24, 22, 22, 0.5);
}
.container .about-ceo{
    width: 1100px;
    margin: auto;
}
.container .about-ceo>div{
    width: 600px;
}
.container .about-ceo div img{
    height: 720px;
    margin-top: 40px;
}
.container .about-ceo .introduce-about-ceo{
    background-color: white;
    padding: 50px;
    margin-bottom: 40px;
}
.container .about-ceo .introduce-about-ceo .title{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    letter-spacing: 5px;
    font-size: 13px;
}
.container .about-ceo .introduce-about-ceo .title p:first-child{
    font-size: 20px;
    margin: 5px;
}
.container .about-ceo .introduce-about-ceo .title p:last-child{
    font-size: 40px;
    margin: 5px;
}
.container .about-ceo .introduce-about-ceo>p{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    letter-spacing: 0.3px;
    font-size: 17px;
    line-height: 2;
    color: rgba(24, 22, 22, 0.5);
    margin: 9px 0;
}

.container .introduce{
    background-color: white;
    padding: 70px;
    margin-top: 100px;

}
.container .introduce i{
    color: rgb(190, 154, 138);
    font-size: 40px;
    margin-bottom: 10px;
}
.container .introduce>div{
    width: 290px;
    align-items: center;
    color: black;
    margin: 0 40px;
}
.container .introduce>div p{
    margin: 10px 0;
    font-size: 27px;
    font-family:Arial, Helvetica, sans-serif;
    letter-spacing: 4px;
}
.container .introduce>div p:last-child{
    text-align: center;
    font-family: Courier;
    font-size: 16px;
    letter-spacing: 0px;
    line-height: 2;
    color: rgba(24, 22, 22, 0.5);
}
.container .news {
    align-items: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 13px;
    margin: 70px;
}
.container .news  p:first-child{
    font-size: 20px;
    margin: 5px;
    letter-spacing: 10px;
}
.container .news  p:last-child{
    font-size: 40px;
    letter-spacing: 5px;
    margin: 5px;
}
.btn-explore{
    border: 0.2px solid rgb(105, 90, 81);;;
    padding: 13px 32px;
    color: black;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
    font-size: 13px;
    letter-spacing: 2px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.btn-explore:hover{
    background-color: black;
    color: white;
}
.container .new-trend div{
    width: 600px;
    margin: 20px;
    background-color: white;
    margin-bottom: 100px;
}
.container .new-trend div .date{
    border: 0.1 solid black;
    background-color: black;
    color: white;
    padding: 13px;
    width: 205px;
    font-size: 16px;
    font-family: Courier;
    letter-spacing: 0px;
    line-height: 2;
    margin: auto;
    margin-top: -30px;
}
.container .new-trend div>a{
    text-decoration: none;
    color: black;
    font-size: 36px;
    font-family: Courier;
    letter-spacing: 0px;
    line-height: 2;
    margin: 30px;
}
.container .new-trend div a:hover{
    color: rgb(190, 154, 138);
}
.container .new-trend div .description{
    margin: 0 35px;
    font-size: 16px;
    font-family: Courier;
    letter-spacing: 1px;
    line-height: 2;
}
.container .new-trend div .btn-explore{
    margin: 50px auto;
    width: 170px;
}
.container .new-trend div button a{
    text-decoration: none;
    color: #000;
}

</style>
