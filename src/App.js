import React from 'react';
import './App.css';
import { BrowserRouter ,Link, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import ColorButtons from './components/ColorButtons';
import PicsView from './components/PicsView';
import Details from "./components/Details"
import PhotosContextProvider from './contexts/PhotosContext';


function App() {
  return (
    <BrowserRouter>
      <Header />
     
      <Switch>
        <Route >
          <PhotosContextProvider> 
             <PicsView>
             <ColorButtons /> 
             </PicsView>
          </PhotosContextProvider>
        </Route>
        <Route>
          <Details />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

