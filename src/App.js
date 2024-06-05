
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
import { Provider } from 'react-redux';
import Productdetails from './Components/ProductDetails';






function App() {
  
  

  
  const router = [
    {
      path: "/List",
      element: <ListPage />,

      
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
    {
      path: "/List/:id",
      element: < Productdetails/>,

      
    },
   
    
  ];







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
    

    </div>
  );
}

export default App;
