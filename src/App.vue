<template>
  <v-app id="app">
    <dl>
        <div>
            <div class="header-top d-flex flex-row space-between">
                <div class="header-top-left">
                    <ul>
                        <li><a href="https://www.facebook.com/MYTAM0501/"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="https://www.instagram.com/ttam.mytam/"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="https://www.instagram.com/ttam.mytam/"><i class="fas fa-phone-square-alt"></i></a></li>
                        <li><a href="https://www.instagram.com/ttam.mytam/"><i class="fab fa-youtube"></i></a></li>
                    </ul>
                </div>
                <div class="header-top-right d-flex flex-row space-between">
                    <p><i class="fas fa-phone-alt"></i> +84 32 533 0355</p>
                    <p><i class="far fa-envelope"></i> mytamlh0501@gmail.com</p>
                    <p><i class="fas fa-map-marker-alt"></i>325/69 Bach Dang, Ward 15, Binh Thanh District, Ho Chi Minh City</p>
                    <p><i class="far fa-clock"></i> {{date_time}} </p>
                    <div class="dropdown">
                        <p class="dropbtn">Language <i class="fas fa-angle-down"></i></p>
                        <div class="dropdown-content">
                            <a href="#">English</a>
                            <a href="#">Vietnamese</a>
                            <a href="#">French</a>
                        </div>
                    </div>
                </div>
            </div>
            <dt>
                <div class="header d-flex flex-row space-around">
                    <div class="header-left d-flex flex-row space-between">
                        <div id="logo"><a href="/"><img src="./assets/logo.png" alt="TT"></a></div>
                        <div id="brand-name"><router-link to='/'><a href="">TT</a></router-link></div>
                    </div>
                    <div class="header-center">
                        <ul>
                            <li><a href="/">HOME</a></li>
                            <li><a href="/shop">SHOP</a></li>
                            <li class="header-dropdown">
                                <a>BRANDS</a>
                                <div class="dropdown-item dropdown-brands">
                                    <div class="d-flex flex-column space-around">
                                        <a href="/store/brand/search?q=chanel">CHANEL</a>
                                        <a href="/store/brand/search?q=gucci">GUCCI</a>
                                        <a href="/store/brand/search?q=dior">DIOR</a>
                                        <a href="/store/brand/search?q=saintlaurent">SAINT LAURENT</a>
                                        <a href="/store/brand/search?q=loreal">LOREAL</a>
                                        <a href="/store/brand/search?q=mac">MAC</a>
                                        <a href="/store/brand/search?q=calvinklein">CALVIN KLEIN</a>
                                        <a href="/store/brand/search?q=bvlgari">BVLGARI</a>
                                        <a href="/store/brand/search?q=versace">VERSACE</a>
                                        <a href="/store/brand/search?q=dolceandgabbana">DOLCE &#38; GABBANA</a>
                                        <a href="/store/brand/search?q=burberry">BURBERRY</a>
                                    </div>
                                </div>
                            </li>
                            <li><a href="/mega">MEGA</a></li>
                            <li><a href="/blog">BLOG</a></li>
                            <li  class="header-dropdown">
                                <a>PAGES</a>
                                <div class="dropdown-item dropdowns">
                                    <div class="d-flex flex-column space-around">
                                        <a href="/page/about-us">ABOUT US</a>
                                        <a href="/page/our-team">OUR TEAM</a>
                                        <a href="/page/faq">FAQ</a>
                                        <a href="/contact">CONTACT</a>
                                    </div>
                                </div>
                                
                            </li>
                            <li><a href="/contact">CONTACT</a></li>
                        </ul>
                    </div>
                    <div class="header-right">
                        <ul>
                            <li class="search-dropdown">
                                <a><i class="fas fa-search"></i></a>
                                <div class="dropdown-search-item">
                                    <p>WHAT ARE YOU LOOKING FOR??</p>
                                    <input type="text" autocomplete="off" name="" v-model="search" 
                                            placeholder="Start typing..." @change="getSearchItems()" value="">
                                    <div v-if="searchItem.length != 0" >
                                            <a :href="'/shop/' + item.slug" v-for="item in searchItem" :key="item._id" 
                                                class="d-flex flex-row space-around" style="background-color: rgba(0, 0, 0, 0.1); overflow: auto; padding: 14px 0">
                                                <img :src="'https://ttstore-cosmetic.herokuapp.com/' + item.image" style="object-fit: cover;height: 40px; width: 70px;"/>
                                                <div style="width: 270px; font-size: 16px; font-family: Courier;">
                                                    <span>{{item.title}}</span>
                                                </div>
                                                <p class="price">
                                                     ${{item.price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}} 
                                                </p>
                                            </a>
                                    </div>
                                    <div v-else>
                                        {{check_search}}
                                    </div>
                                </div>
                            </li>
                            <li class="login-dropdown">
                                <a><i class="far fa-user"></i></a>
                                <div class="dropdown-login-item" v-if="check_user === null">
                                    <a href="/account/register"><i class="far fa-registered"></i> Register</a>
                                    <a href="/account/login"><i class="fas fa-sign-in-alt"></i> Log in</a>
                                </div>
                                <div class="dropdown-login-item" v-else>
                                    <p>Hello {{name}}</p>
                                    <p>Your email: {{email}}</p>
                                    <a href="" @click="Logout"><i class="fas fa-sign-out-alt"></i> Log out</a>
                                </div>
                            </li>
                            <li>
                                <a href="/wishlist"><i class="far fa-heart"></i></a>
                                <div v-if="wishlist.length != 0" style="position: absolute; top: 17px; right: 75px; font-size: 12px; background-color: rgb(230, 171, 181); color: black; border-radius: 50%; padding: 2px 5px;">{{wishlist.length}}</div>
                            
                            </li>
                            <li>
                                <a href="/shopping-cart"><i class="fas fa-shopping-cart"></i></a>

                                <div v-if ="cart.length != 0" style="position: absolute; top: 17px; right: 75px; font-size: 12px; background-color: rgb(230, 171, 181); color: black; border-radius: 50%; padding: 2px 5px;">{{cart.length}}</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </dt>
            <dd>
                <router-view></router-view>
                <div class="footer">
                  <div class="d-flex flex-column space-around">
                      <div class="all d-flex flex-row space-around">
                          <div class="flex-grow-1"></div>
                          <a href="/page/about-us">ABOUT US</a>
                          <a href="/page/our-team">OUR TEAM</a>
                          <a href="/page/faq">FAQ</a>
                          <a href="/contact">CONTACT</a>
                          <div class="flex-grow-1"></div>
                      </div>
                      <div class="footer-detail d-flex flex-row space-around">
                          <div class="d-flex flex-column space-around">
                              <p><i class="fas fa-phone-alt"></i> +84 32 533 0355</p>
                              <p><i class="fas fa-map-marker-alt"></i> 123/45 street, ward, distric, city</p>
                              <p><i class="far fa-envelope"></i> mytamlh0501@gmail.com</p>
                              <p><i class="far fa-clock"></i> {{date_time}} </p>
                          </div>
                          <div class="d-flex flex-column space-around">
                              <div id="brand-name"><a href="#">TT</a></div>
                              <ul  class="d-flex flex-row space-around">
                                  <li><a href="https://www.facebook.com/MYTAM0501/"><i class="fab fa-facebook-f"></i></a></li>
                                  <li><a href="https://www.facebook.com/MYTAM0501/"><i class="fab fa-instagram"></i></a></li>
                                  <li><a href="https://www.facebook.com/MYTAM0501/"><i class="fab fa-twitter"></i></a></li>
                                  <li><a href="https://www.facebook.com/MYTAM0501/"><i class="fab fa-youtube"></i></a></li>
                              </ul>
                          </div>
                          <div class="d-flex flex-column space-around">
                              <p>Style too own civil out along. Perfectly offending attempted add arranging age gentleman. 
                                  Get who uncommonly our expression ten increasing considered.</p>
                              <a href="/page/about-us">READ MORE</a>
                          </div>
                      </div>
                      <div class="last d-flex flex-row space-around">
                          <p>&copy; 2020 LUCHIANA Theme. All rights reserved.</p>
                          <div class="d-flex flex-row space-around">
                              <a href="/privacy-policy">PRIVACY POLICY</a>
                              <a href="/page/faq">FAQ</a>
                          </div>
                      </div>
                  </div>
                </div>
            </dd>
        </div>
    </dl>
  </v-app>
</template>
<script>
import { mapState } from "vuex";
import axios from 'axios'
import API from './api';
export default {
    data() {
        return {
            check_user:'',
            name: '',
            email: '',
            username: '',
            date_time: '',
            search: '',
            searchItem: [],
            product: [],
            check_search: '',
            client_URL:'',
        }
    },
    async created() {
        this.product = await API.getAllProducts();
        this.check_user = localStorage.getItem('token');
        var date = new Date();
        date =  date + 'date'; 
    },
    mounted() {
        
        axios.get('https://ttstore-cosmetic.herokuapp.com/api/login', {headers: {token: localStorage.getItem('token')}})
            .then(res=>{
                this.name = res.data.user.name;
                this.email = res.data.user.email;
                this.username = res.data.user.username;
            })
            .catch(err=>{
                console.log(err.response);
            })
    },
    computed: {
        ...mapState(['cart', 'wishlist'])
    },
    methods: {
        Logout(){
            localStorage.clear();
        },
        removeVietnameseTones(str) {
            str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
            str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
            str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
            str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
            str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
            str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
            str = str.replace(/đ/g,"d");
            str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
            str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
            str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
            str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
            str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
            str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
            str = str.replace(/Đ/g, "D");
            // Some system encode vietnamese combining accent as individual utf-8 characters
            // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
            str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
            str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
            // Remove extra spaces
            // Bỏ các khoảng trắng liền nhau
            str = str.replace(/ + /g," ");
            str = str.trim();
            // Remove punctuations
            // Bỏ dấu câu, kí tự đặc biệt
            str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
            return str;
        },
        getSearchItems() {
            const arr = [];
            let a = this.removeVietnameseTones(this.search).toLowerCase();
            if(a != "" && a != null){
                for(const i in this.product){
                    // console.log(this.product[i].title.toLowerCase());
                    // console.log(a);
                    // console.log(this.product[i].title.toLowerCase().includes(a))
                    if(this.product[i].title.toLowerCase().includes(a) == true){
                        arr.push(this.product[i]);
                    }
                }
            }
            this.searchItem = arr;
            if(a == "" || a == null){
                this.check_search = "Please enter product name!!"
            }
            else this.check_search = "Product does not exist!!"
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
.btn-explore{
    border: 0.2px solid rgb(105, 90, 81);
    height: 50px;
    padding: 0px 25px;
    color: black;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
    font-size: 12px;
    letter-spacing: 2px;
}
.btn-explore:hover{
    background-color: black;
    color: white;
}
.center{
    align-items: center;
    text-align: center;
    justify-content: center;
}
.header-top{
    background-color: rgb(228, 193, 177);
    height: 45px;
    font-size: 14px;
    font-style: normal;
}
.header-top .header-top-left{
    margin-left: 30px;
}
.header-top .header-top-left i{
    color: white;
}
.header-top .header-top-left i:hover{
    color: rgb(105, 90, 81);
}

.header-top .header-top-right{
    margin-right: 30px;
}
.header-top .header-top-right>p{
    margin: 13px;
    color: rgb(105, 90, 81);
}

.header{
    z-index: 3;
    height: 90px;
    background-color: white;
    font-size: 17px;
    align-items: center;
    font-family:Arial, Helvetica, sans-serif;
    letter-spacing: 2px;
}
.header-center a:hover,
.header-right i:hover{
    color: rgb(190, 154, 138);
}
#logo img{
    height: 65px;
    width: 65px;
}
#brand-name{
    margin: auto;
    font-size: 50px;
}
#brand-name a{
    color:black;
    text-decoration: none;
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
.dropbtn {
    padding: 13px 0;
    font-size: 14px;
    border: none;
    cursor: pointer;
    color: rgb(105, 90, 81);;
  }
  .dropbtn:hover{
      color: white;
  }
  
  .dropdown {
    position: relative;
    display: inline-block;
  }
  
  .dropdown-content {
    display: none;
    position: absolute;
    right: 0.1px;
    background-color: rgb(228, 193, 177);
    min-width: 190px;
    z-index: 101;
    top: 40px;
  }
  
  .dropdown-content a {
    color: rgb(105, 90, 81);;
    text-align: left;
    text-decoration: none;
    display: block;
    margin: 5px;
    padding: 8px 25px;
  }
  
  .dropdown-content a:hover {color: #f1f1f1}
  

.dropdown-item{
    display: none;
    position: absolute;
    background-color: rgb(255, 255, 255);
    z-index: 1;
    padding: 0 20px;
    color: black;
    width: 250px;
}
.dropdown-brands{
    right: 730px;
}
.dropdowns{
    right: 442px;
}
.dropdown-item a{
    text-align: left;
    font-size: 12px;
    font-family: 'Tahoma';
}
.dropdown-item a:last-child{
    padding-bottom: 20px;
}

.dropdown-login-item,
.dropdown-search-item{
    display: none;
    position: absolute;
    background-color: rgb(255, 255, 255);
    z-index: 1;
    padding: 30px 50px;
    color: black;
    right: 50px;
}
.dropdown-login-item a{
    text-align: left;
    margin-right: 15px;
}
.dropdown-login-item a:hover{
    color: rgb(190, 154, 138);
}
.dropdown-search-item p{
    font-size: 20px;
    text-align: left;
    font-family:Georgia, 'Times New Roman', Times, serif;
    letter-spacing: 5px;
}
.dropdown-search-item input{
    border-width: 0 0 1px 0;
    font-size: 14px;
    letter-spacing: 2px;
    margin-top: 30px;
    margin-bottom: 10px;
    padding: 0 350px 7px 0;
}
.dropdown-search-item input:focus
{
    border: 0 0 1px 0 ;
    outline: none;
}
.login-dropdown:hover .dropdown-login-item,
.search-dropdown:hover .dropdown-search-item,
.header-dropdown:hover .dropdown-item,
.dropdown:hover .dropdown-content {
  display: block;
}

.footer{
    background-image: url("./assets/background-footer.jpg");
    background-repeat: repeat-x;
}
.footer .all a{
    text-decoration: none;
    color: black;
    font-size: 14px;
    margin: 40px 30px;
    font-family:sans-serif;
    letter-spacing: 2px;
}
.footer .all a:hover{
    color: rgb(190, 154, 138);
}
.footer .footer-detail{
    width: 1200px;
    margin: 50px auto;
    font-family: Arial, Helvetica, sans-serif;
}
.footer .footer-detail>div{
    width: 320px;
}
.footer .footer-detail>div p{
    color: rgba(24, 22, 22, 0.5);
    font-size: 13px;
    margin-top: 10px;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 2px;
    line-height: 1.5;
}
.footer .footer-detail>div p>i{
    color: black;
    margin-right: 7px;
}
.footer .footer-detail>div ul a{
    color: rgb(190, 154, 138);
    font-size: 20px;
}
.footer .footer-detail>div ul a:hover{
    color: rgba(24, 22, 22, 0.5);
}
.footer .footer-detail>div:last-child{
    text-align: right;
}
.footer .footer-detail>div>a{
    text-decoration: none;
    color: black;
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 2px;
}
.footer .last div a:hover,
.footer .footer-detail>div>a:hover{
    color: rgb(190, 154, 138);
}
.footer .last div a,
.footer .last p{
    text-decoration: none;
    color: rgba(24, 22, 22, 0.5);
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 2px;
    line-height: 1.5;
    margin: 20px 20px 40px 20px;
}







dt {
    position: -webkit-sticky;
    position: sticky;
    top: -1px;
    z-index: 100;
}
/* dd {
    white-space: nowrap;
} */
  

</style>