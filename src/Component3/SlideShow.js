import { useEffect, useState } from "react"

const SlideShow = () => {
const [count ,setCount] = useState(0)


  const img1 =  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCAHD6qpSmpxCR6YPM2lQUxe7pBGGe8kr17g&s"
  const img2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ1ipeQbFseUM_GzxwMoQj45w9HtAnu4eu5w&s"
  const img3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYNkjHLKtpNvuXpLcHXfRtNzOwbc2E8EUWbQ&s"
  const img4="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfNmgGBtBRXw5kyk-t3ed76sJ9xwxthjdomA&s"
  const img5="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPYuijaNPmw2QV-Lp96jlXbZMGbkySuZ_5XA&s"

      const arr = [img1 ,img2,img3,img4,img5] 

      useEffect(()=>{
        const interval = setInterval(() => {
            setCount((prevCount) => (prevCount + 1) % arr.length);
          }, 2000);
      
         
          return () => clearInterval(interval);
      },[arr.length])

const handelPrev =()=>{
    if(count===0){
        setCount(arr.length-1)
    }
    else{

        setCount((prevCount) => prevCount -1)
    }
}
const handelNext =(e)=>{
    if(count===arr.length-1){
        setCount(0)
    }
    else{

        setCount((prevCount) => prevCount + 1);
    }
}


    
    return (
        <>
            <div className="slideshow-container" >
                <button   className="slideshow-button" onClick={handelPrev}>Prev</button>

    <img  className="slideshow-image"  src={arr[count]}  ></img>

 <button  className="slideshow-button" onClick={handelNext}>Next</button>
            </div>
        </>
    )
}

export default SlideShow