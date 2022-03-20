import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import PicsView from './components/PicsView';
// import DetailsIndex from './components/DetailsIndex';
import PhotosContextProvider from './contexts/PhotosContext';


function App() {
  return (
    <div>
      <PhotosContextProvider> 
          <Header />
          <Routes>
              <Route exact path="/" element={<PicsView/>} >
                picsview
              </Route>
              {/* <Route path="/photo/:id" element={<DetailsIndex/>}>
                details
              </Route> */}
          </Routes>
        <Footer />
      </PhotosContextProvider>
    </div>
  );
}

export default App;

