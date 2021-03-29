<template>
    <form @submit.prevent="handleSubmit">
        <h3>Login</h3>

        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" v-model="email" placeholder="Email"/>
        </div>

        <div class="form-group">
             <label>Password</label>
             <input type="password" class="form-control" v-model="password" placeholder="Password">
        </div>

        <button class="btn btn-primary btn-block">Login</button>
    </form>
</template>

<script>
    import axios from 'axios'


    export default {
        name: 'Login',
        data() {
            return {
                email: "",
                password: Number
            }
        },
        methods: {
            async handleSubmit() {
                // try {
                const response = await axios.post("https://training-1.chondi.net/api/auth/login", {
                    "email": this.email,
                    "password": this.password
                });

                localStorage.setItem('access_token', response.data.access_token);
                this.$router.push('/');
            }
        }        
    }
</script>