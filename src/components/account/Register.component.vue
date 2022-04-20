<template> 
    <div>
        <div class="container">
            <div class="banner">
                <img src="../../assets/img/banner.jpg" alt="">
                <div class="background"></div>
                <div class="register d-flex flex-column space-around" >
                    <p>CREATE AN ACCOUNT</p>
                    <input type="text" placeholder="Name" required="required" v-model="name">
                    <input type="email" placeholder="Email"  required="required" v-model="email">
                    <input type="text" placeholder="Username" required="required" v-model="username">
                    <input type="password" placeholder="Password" required="required" v-model="password">
                    <p style="font-size: 14px; color: red; margin: -2px 0">{{error}}</p>
                    <button type="submit" class="btn-explore" @click="submitForm">REGISTER</button>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import axios from 'axios';
// @ is an alias to /src
import API from '../../api';


export default {
    name: 'RegisterComponent',
    components: {
    },
    data() {
        return {
            required: [(value)=>!!value || "this file is required"],

            name: '',
            username: '',
            email: '',
            password: '',

            error: '',
        };
    },
    methods: {
        submitForm(){
            const data = {
                name: this.name,
                email: this.email,
                username: this.username,
                password: this.password
            };
            axios.post('http://localhost:5000/api/register', data)
            .then(res=>{
                console.log(res);
                this.error = '';
                this.$router.push('/account/login');
            })
            .catch(err=>{
                console.log(err.response);
                const email_err = err.response.data.err.keyValue.email;
                const username_err = err.response.data.err.keyValue.username;
                if(email_err != null){
                    this.error = 'Email already exists, please choose another email';
                }
                else{
                    this.error = 'Username already exists, please choose another username';
                }
            })
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

.btn-explore{
    border: 0.2px solid rgb(105, 90, 81);;;
    padding: 16px 139.6px;
    color: black;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
    font-size: 12px;
    letter-spacing: 2px;
    margin:30px 0;
}
.btn-explore:hover{
    background-color: black;
    color: white;
}
a{
    text-decoration: none;
    color: black;
}

.container{
    width: 100%;
    background-color: rgb(243, 243, 243);
}
.container .banner img{
    width: 100%;
}
.container .banner .background{
    position: absolute;
    height: 673.5px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.747);
    top: 120px;
    z-index: 10;
    
}
.container .register{
    width: 500px;
    margin: auto;
    padding: 20px 75px;
    background-color: white;
    box-shadow: 2px 2px 55px rgba(182, 182, 182, 0.527);
    position: absolute;
    top: 210px;
    left: 489px;
    z-index: 11;
}
.container .register p{
    font-family: Courier;
    letter-spacing: 0.5px;
    font-size: 30px;
    margin: 30px auto;
}
.container .register input{
    padding: 13px;
    margin: 8px 0;
    outline:0.5px solid silver;
    font-size: 14px;
    font-family: Courier;
}

</style>