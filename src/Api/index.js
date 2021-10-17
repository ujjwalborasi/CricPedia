import axios from 'axios';
const url = 'http://localhost:5000/posts';
const FetchPosts = () => axios.get(url);
