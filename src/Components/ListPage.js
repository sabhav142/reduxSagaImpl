import { useEffect, useState } from "react";
import Card from "./Card"
import { useDispatch, useSelector } from "react-redux";
import { requestToGetAllProducts, requestToGetProductsById } from "../store/productSlice";
import { useParams, useNavigate } from "react-router-dom";





const ListPage = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');
  const {
    Products :{ isGetAll,
      allProducts:{products}
    }
      } =useSelector((state)=>state)
  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const {id} = useParams();
  const filteredData = searchTerm === "" ? products : products.filter((item) => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

console.log(id);

const handleClick=(id)=>{
  dispatch(requestToGetProductsById({id}))
  Navigate(`/List/${id}`)
  
console.log(id ,"idmili")
}

  useEffect(()=>{
dispatch(requestToGetAllProducts())
  },[dispatch])



  return (
    <>
      <span style={{ marginLeft: "auto", marginRight: "auto" }}>

        <input type="text" onChange={handleOnChange}></input>
        <div style={{ display: "inline-flex", flexDirection: "row", flexWrap: "wrap", cursor: "pointer" }}>


          {filteredData.map((item, index) => {
            return (
              <Card  onClick={()=>handleClick(item.id)} key={index} title={item.title} images={item.images[0]} />
            )
          })}
        </div>


      </span>
    </>

  )
}

export default ListPage