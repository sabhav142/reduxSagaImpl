import axios from 'axios';
import { GET_ALL_PRODUCTS } from './constants';

const fetchProducts = async () => {
    
  try {
    const response = await axios.get(GET_ALL_PRODUCTS);
    console.log(response.data ,"res")
    return response.data;
    
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default fetchProducts;