<template>
    <div class="container">
        <div class="image-baner d-flex flex-row space-around">
            <img src="../assets/img/privace.jpg" alt="">
            <img src="../assets/img/privace1.jpg" alt="">
        </div>
        <div class="main d-flex flex-column space-around">
            <div class="header-container">
                <p class="page">PRIVACY POLICY</p>
                <p class="introduce">WHO WE ARE</p>
                <p class="link">Our website address is: <a href="#tab">http://localhost:8080/</a></p>
                <p class="introduce"> WHAT PERSONAL DATA WE COLLECT</p>
            </div>
            <div>
                <p class="title">COMMENTS</p>
                <div class="content">
                    <p>When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.</p>
                        <p>An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.</p>
                </div>
                <p class="title">MEDIA</p>
                <div class="content">
                    <p>If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.</p>
                </div>
                <p class="title">COOKIES</p>
                <div class="content">
                    <p> If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.</p>

                    <p> If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.</p>
                    
                    <p> When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.</p>
                    
                    <p> If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.</p>
                </div>
                <p class="title">EMBEDDED CONTENT FROM OTHER WEBSITES</p>
                <div class="content">
                    <p> Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.</p>

                    <p> These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.</p>
                    
                    <p> IF YOU LEAVE A COMMENT, THE COMMENT AND ITS METADATA ARE RETAINED INDEFINITELY. THIS IS SO WE CAN RECOGNIZE AND APPROVE ANY FOLLOW-UP COMMENTS AUTOMATICALLY INSTEAD OF HOLDING THEM IN A MODERATION QUEUE.</p>
                    <p> For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.</p>
                </div>
            </div>

        </div>
        <div style="height: 1900px;">

        </div>

    </div>    
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";

export default {
    name: 'PrivaceComponent',
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
.container .image-baner img{
    width: 50%;
}
.container .main{
    width: 1150px;
    margin: auto;
    padding: 70px 200px;
    background-color: white;
    position: absolute;
    top: 380px;
    left: 173px;
    margin-bottom: 500px;
}
.container .main .header-container{
    text-align: center;
    width: 490px;
    margin: auto;
    margin-bottom: 50px;
}
.container .main .header-container .page{
    margin: 20px;
    /* font-family: Courier; */
    font-family: sans-serif;
    letter-spacing: 5px;
    line-height: 2;
    font-size: 45px;
}
.container .main .header-container .introduce{
    margin: 20px;
    font-family: Courier;
    letter-spacing: 5px;
    line-height: 2;
    font-size: 28px;
}
.container .main .header-container .link{
    margin-left: -150px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 15px;
    color: rgba(24, 22, 22, 0.5);
}
.container .main .header-container .link a{
    color: rgba(24, 22, 22, 0.5);
}
.container .main>div:last-child div{
    margin-bottom: 50px;
}
.container .main div .title{
    margin: 20px 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    letter-spacing: 5px;
    line-height: 2;
    font-size: 22px;
}
.container .main div .content p{
    letter-spacing: 1px;
    line-height: 1.5;
    font-size: 17px;
    margin: 15px 0;
    color: rgba(24, 22, 22, 0.5);
}


</style>