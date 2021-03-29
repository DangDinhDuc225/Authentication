<template>
    <div class="">
        <div class="">
            <form @submit.prevent="handleSubmit">
                <h3>Sign Up</h3>

                <div class="form-group">
                    <label>First Name</label>
                    <input type="text" class="form-control" v-model="first_name" placeholder="First Name"/>
                </div>

                <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" class="form-control" v-model="last_name" placeholder="Last Name"/>
                </div>
                <div class="form-group">
                    <label>Full Name</label>
                    <input type="text" class="form-control" v-model="full_name" placeholder="Full Name"/>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model="email" placeholder="Email">
                </div>

                <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" v-model="password" placeholder="Password">
                </div>

                <div class="form-group">
                    <label>Confirm Password</label>
                    <input type="password" class="form-control" v-model="password_confirm" placeholder="Confirm Password">
                </div>

                <button class="btn btn-primary btn-block">Sign Up</button>
            </form>
        </div>

        <!-- <div class="row">
            <div class="col-4" v-for="(item, key) in articles" :key="key">
                <a :href="item.url">
                    <img :src="item.urlToImage" class="w-100" alt="">
                    <h3>{{ item.title }}</h3>
                </a>
            </div>
        </div> -->
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'Register',
        data() {
            return {
                first_name: "",
                last_name: "",
                full_name: "",
                email: "",
                password: Number,
                password_confirm: Number,
                // articles: []
            }
        },
        // created() {
        //     axios.get('https://newsapi.org/v2/everything?q=tesla&from=2021-02-26&sortBy=publishedAt&apiKey=1c944047a36c43e18a7df1e01d226c40').then(res => {
        //         this.articles = res.data.articles
        //     })
        // },
        methods: {
            async handleSubmit(){
                axios.post("https://training-1.chondi.net/api/auth/register", {
                    "firstName": this.first_name,
                    "lastName": this.last_name,
                    "fullName": this.full_name,
                    "email": this.email,
                    "password": this.password,
                    "confirmPassword": this.password_confirm
                }).then(res => console.log(res)).catch(err => console.log(err))
                
                // get account
                // axios.get("https://training-1.chondi.net/api/user/account").then(res => console.log(res)).catch(err => console.log(err));

                // await axios.post('register', {
                //     first_name: this.first_name,
                //     last_name: this.last_name,
                //     email: this.email,
                //     password: this.password,
                //     password_confirm: this.password_confirm
                // });
                // await axios.post('https://training-1.chondi.net/api/auth/register', {
                //     // first_name: this.first_name,
                //     // last_name: this.last_name,
                //     // email: this.email,
                //     // password: this.password,
                //     // password_confirm: this.password_confirm
                //     "first_name" : 'duc',
                //     "last_name" : 'dang',
                //     "email": 'duc@gmail.com',
                //     "password":'duc12345',
                //     "password_confirm": 'duc12345'

                // }).then(res => console.log(res)).catch(err => console.log(err));



                // login with user from register
                this.$router.push('/login');
                
                
            }
        }
        // created() {
        //     axios.post("https://training-1.chondi.net/api/auth/register", {
        //         "email": "admin@gmail.com",
        //         "password": 12345678,
        //         "confirmPassword": 123456789,
        //         "fullName": "kieu tuan anh"
        //     }).then(res => console.log(res)).catch(err => console.log(err))
        // }
    }
</script>