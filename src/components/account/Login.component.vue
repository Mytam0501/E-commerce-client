<template> 
    <div class="container">
        <div class="banner">
            <img src="../../assets/img/banner.jpg" alt="">
            <div class="background"></div>
            <div class="register d-flex flex-column space-around">
                <p>LOG IN</p>
                <p style="float: left; font-size: 15px; margin: -2px 0">{{error}}</p>
                <input type="text" placeholder="Username" required="required" v-model="username">
                <input type="password" placeholder="Password" required="required" v-model="password">
                <div class="d-flex flex-row space-between">
                    <button type="submit" class="btn-explore" @click="LogIn">LOG IN</button>
                    <input type="checkbox" id="Remember" name="Remember" value="Remember" class="checkbox">
                    <label for="Remember"> Remember me</label>
                </div>
                <a href="/account/forgot-password" ><i>Lost your password?</i></a>
                <span>Don’t have an account?</span>
                <div class="btn">
                    <a href="/account/register" class="btn-explore">CREATE AN ACCOUNT</a>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios';
// @ is an alias to /src
import API from '../../api'


export default {
    name: 'LoginComponent',
    components: {
    },
    data() {
        return {
            required: [(value)=>!!value || "this file is required"],
            username: '',
            password: '',
            error: '',
        };
    },
    methods: {
        LogIn(){
            const user = {
                username: this.username,
                password: this.password
            }

            axios.post('http://localhost:5000/api/login', user)
            .then(res=>{
                if(res.status === 200){
                    localStorage.setItem('token', res.data.token);
                    console.log(localStorage);
                    this.$router.go(this.$router.push('/'));
                    
                }
            })
            .catch(err=>{
                console.log(err.response);
                this.error = err.response.data.err;
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
    padding: 14.5px 30px;
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
    top: 190px;
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
    border: 1px solid rgba(182, 182, 182, 0.527);;
}
.container .register input:focus{
    outline: none;
}
.container .register .checkbox{
    margin-right: -50px;
    margin-top: 20px;
}
.container .register label{
    margin-right:65px ;
    margin-top: 14.5px;
}
.container .register>a{
    text-decoration: none;
    color: rgba(0, 0, 0, 0.7);
    font-size: 17px;
    margin: 30px 0;
}
.container .register span{
    text-align: center;
    background-color: rgba(44, 44, 44, 0.815);
    margin: auto;
    font-family: Courier;
    letter-spacing: 0.5px;
    font-size: 17px;
    color: white;
    margin-top: 10px;
}
.container .register .btn{
    margin: 40px auto;
}
.container .register .btn a{
    text-decoration: none;
    letter-spacing: 0.5px;
}
.container .register .btn .btn-explore{
    border: 0.2px solid rgb(105, 90, 81);;;
    padding: 16px 100px;
    color: black;
    background-color: rgba(0, 0, 0, 0);
    font-size: 12px;
    letter-spacing: 0.7px;
}
.container .register .btn .btn-explore:hover{
    background-color: black;
    color: white;
}


</style>