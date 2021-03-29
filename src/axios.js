import axios from 'axios'

axios.defaults.baseURL = 'https://training-1.chondi.net/api/auth/';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');