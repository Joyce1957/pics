import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID de3b38abbf6f29235eaa2a0cbfd87be92b9492d0c7b52ba8e20be93c262e6aa6'
  }
});
