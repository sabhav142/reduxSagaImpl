import { Link } from "react-router-dom"



const Header = ()=>{
    
    return(


        <>
<div style={{display:"flex",
    justifyContent:"flex-end",
    backgroundColor:"black",
    padding: "8px"

   

}}>

    <ul style={{
        display:"inline-flex"
    }}>
      <Link to="details">  <li style={{listStyle:"none", color:"white", marginLeft:"10px" ,cursor:"pointer"}}>Details</li></Link>
       <Link to="todo"> <li  style={{listStyle:"none",color:"white",marginLeft:"10px"}}> Todo</li></Link>
       <Link to="List"> <li  style={{listStyle:"none",color:"white",marginLeft:"10px"}}>List</li></Link>
       <Link to="slideshow"><li  style={{listStyle:"none",color:"white",marginLeft:"10px"}}>Slide Show</li></Link> 
    </ul>
</div>


        </>

    )
    
}

export default Header