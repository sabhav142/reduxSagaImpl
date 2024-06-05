import axios from "axios"
import { GET_ALL_PRODUCTS, GET_PRODUCTS_BY_ID } from "./constants"

export const listProducts =async ()=>{

  const response   =  await axios(`${GET_ALL_PRODUCTS}`)
  console.log(response,"response")
  return response

}

export const listProductsById =async (params)=>{
    console.log(params,"iddddd")
const {id} =params

    const response   =  await axios(`${GET_PRODUCTS_BY_ID}/${id}`)
    console.log(response,"response3")
    return response
  
  }

