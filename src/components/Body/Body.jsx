'use client';
import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { CrearProyecto } from '../../page/CrearProyecto';
import { Home } from '../../page/Home';
import {ProbComp} from '../../page/ProbarComp';
import {Donate} from "../Proyecto/Donate.jsx"
import {Allp} from "../../page/Allproject"
import {Mint} from '../Mint.jsx'
function Body() {
  return (
    <div className="bg-gray-900 ">
      <div className="container mx-auto">
        <BrowserRouter>
        <Routes>
            <Route path="/create-project" element={  <CrearProyecto />}/>
            <Route path="/Probar" element={  <ProbComp />}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/donate" element={<Donate/>}/>
            <Route path="/all" element={<Allp/>}/>
            <Route path="/xd" element={<Mint/>}/>

        </Routes>
        </BrowserRouter>
        
      </div>
    </div>
  );
}

export { Body };
