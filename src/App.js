
import { useEffect, useState } from 'react';
import './App.css';
import Card from './Components/Card';
import Header from './Components/Header';
import ListPage from './Components/ListPage';
import {
  createBrowserRouter,
  RouterProvider,
  Routes, Route
} from "react-router-dom";
import AddToDos from './Component2/AddToDos';
import SlideShow from './Component3/SlideShow';
import RegForm from './Component4/RegForm';
import About from './About';




function App() {
  const [data , setdata] = useState([]);
  

  // const router = createBrowserRouter([
  //   {
  //     path: "/List",
  //     element: <ListPage data={data} />,

      
  //   },
  //   {
  //     path: "/todo",
  //     element: < AddToDos />,

      
  //   },
  //   {
  //     path: "/slideshow",
  //     element: < SlideShow/>,

      
  //   },
  //   {
  //     path: "/details",
  //     element: < RegForm/>,

      
  //   },
    
    
  // ]);

  const router = [
    {
      path: "/List",
      element: <ListPage data={data} />,

      
    },
    {
      path: "/todo",
      element: < AddToDos />,

      
    },
    {
      path: "/slideshow",
      element: < SlideShow/>,

      
    },
    {
      path: "/details",
      element: < RegForm/>,

      
    },
   
    
  ];

  useEffect(()=>{
    async function fetchData(){

     const response = await  fetch('https://dummyjson.com/products')
     const newData = await response.json();
     setdata(newData.products)
  
  
    }
    fetchData()

    
  },[])





  return (
    <div className="App">
      
      <Header/>
      <Routes>
     {
      router.map((value, i) => {
        return <Route path={value.path} element={value.element} />
      })
     }
      </Routes>
      {/* <RouterProvider 
      
      router={router}>
   
    </RouterProvider> */}
  
    </div>
  );
}

export default App;
