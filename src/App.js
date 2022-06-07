import './App.css';
import React, {useEffect} from 'react';
import { collection, getDocs } from "firebase/firestore";
import db from './firebase/firebaseConfig';
import {Route, Routes} from 'react-router-dom';
import { HomePage } from './Pages.js/HomePage';
import { ProductosPage } from './Pages.js/ProductosPage';
import { Navbar } from './Componentes/Navbar';



function App() {

  {/*useEffect(() => {

      const obtenerDatos = async() => {
      const datos = await getDocs(collection(db, "usuarios")); 

        datos.forEach((docs) => {
          console.log(`${docs.id} => ${docs.data()}`);
        });
        
      }

      obtenerDatos();
    }, []);
  */}

  return (
    <>
    <Navbar />

    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/productos" element={<ProductosPage />}></Route>
    </Routes>
    
    </>
  );
}

export default App;