import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from "views/Home/Home";
import { ToastContainer } from 'react-toastify';
import { AnimatePresence } from 'framer-motion';
import Portal from 'views/Portal/Portal';
function AnimatedRoutes() {
    const location = useLocation()
    
  return (
    <>
      <div className="App">
        <ToastContainer />
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
              <Route path='/' element={<Portal/>}>
                <Route path='' element={<Home/>}/>
            </Route>
          </Routes>
        </AnimatePresence>
      </div>
    </>
  )
}

export default AnimatedRoutes