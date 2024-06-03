import { useEffect, useState } from "react";
import Card from "./Card"
import { fetchProductsSuccess } from "../Slice/userSlice";
import { useDispatch } from "react-redux";
import { GET_ALL_PRODUCTS } from "../Services/constants";

const ListPage = (data) => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const filteredData = searchTerm === "" ? data.data : data.data.filter((item) => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  useEffect(()=>{

    dispatch(fetchProductsSuccess({type:GET_ALL_PRODUCTS}))
  },[])
  return (
    <>
      <span style={{ marginLeft: "auto", marginRight: "auto" }}>

        <input type="text" onChange={handleOnChange}></input>
        <div style={{ display: "inline-flex", flexDirection: "row", flexWrap: "wrap", cursor: "pointer" }}>


          {filteredData.map((item, index) => {
            return (
              <Card key={index} title={item.title} images={item.images[0]} />
            )
          })}
        </div>


      </span>
    </>

  )
}

export default ListPage