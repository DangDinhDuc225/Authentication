<template>
    <div>
        <h3 v-if="user">Hi, {{ user.full_name }}</h3>
        <h3 v-if="!user">You are not logged in!</h3>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'Home',
        data() {
            return {
                user: null,
            }
        },
        async created() {
            const response = await axios.get("https://training-1.chondi.net/api/users/account");

            this.user = response.data;
        }
        // created() {
            // const response = axios.get('users', {
            //     headers: {
            //         'content-Type': 'application/json',
            //         Authorization: 'bearer ' + localStorage.getItem('access_token')
            //     }
            // }).then(res => {
            //     console.log(res)
            // });

            // console.log(response);

        //     axios.post("https://training-1.chondi.net/api/auth/login", {
        //         "email": "admin@gmail.com",
        //         "password": 12345678
        //     }).then(res => console.log(res)).catch(err => console.log(err))
        // }
        
    }

</script>