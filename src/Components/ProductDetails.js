import { useSelector } from "react-redux";
import Card from "./Card"
import {useLocation} from "react-router-dom";

const Productdetails =()=>{

    const {
        Products :{ 
          productById
        }
          } =useSelector((state)=>state)

          console.log(productById ,"alexa chutiya")
   
   
    return (
        <>
        <h3>Product description</h3>
<Card images={productById.images[0]} title={productById.title}></Card>

        </>
    )
}

export default Productdetails