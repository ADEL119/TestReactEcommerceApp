import { useState } from 'react'

import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

import './App.css'
import Menu from './components/Menu';
import Editarticle from "./components/articles/Editarticle";
import Insertarticle from "./components/articles/Insertarticle";
import Listarticles from "./components/articles/Listarticles";
import Editcategorie from "./components/categories/Editcategorie";
import Insertcategorie from "./components/categories/Insertcategorie";
import Listcategories from "./components/categories/Listcategories";
import Editscategorie from "./components/scategories/Editscategorie";
import Insertscategorie from "./components/scategories/Insertscategorie";
import Listscategories from "./components/scategories/Listscategories";
import Viewarticle from "./components/articles/Viewarticle";
import Viewcategorie from "./components/categories/Viewcategorie";
import Viewscategorie from "./components/scategories/Viewscategorie";

const App=()=>{

  return (
  <div>



<Router>
<Menu/>
<Routes>
<Route path="/articles" element={<Listarticles/>}/>
<Route path="/articles/add" element={<Insertarticle/>}/>
<Route path="/article/edit/:id" element={<Editarticle/>}/>
<Route path="/article/view/:id" element={<Viewarticle/>}/>
<Route path="/categories" element={<Listcategories/>}/>
<Route path="/categories/add" element={<Insertcategorie/>}/>
<Route path="/categories/edit/:id" element={<Editcategorie/>}/>
<Route path="/categories/view/:id" element={<Viewcategorie/>}/>
<Route path="/scategories" element={<Listscategories/>}/>
<Route path="/scategories/add" element={<Insertscategorie/>}/>
<Route path="/scategories/edit/:id" element={<Editscategorie/>}/>
<Route path="/scategories/view/:id" element={<Viewscategorie/>}/>
</Routes>
</Router>

  </div>

  );
}


export default App
