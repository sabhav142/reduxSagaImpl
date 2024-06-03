// import images from './asset/images.jpeg'
const Card = ({title,images})=>{
  
    
    return(
        <>
        <div style={{textAlign:"left", border:"2px solid red", height:"321px", width:"252px" ,marginTop:"10px" ,marginLeft:"10px"}}>
            <img width="100%" height="190px" src={images}/>
            <p>{title}</p>
      <h1 style={{fontSize:"small"}}>Chutia</h1>
        </div>
        </>
    )
}

export default Card