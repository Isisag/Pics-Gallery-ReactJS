import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import PicsView from './components/PicsView';
import Details from "./components/Details"
import PhotosContextProvider from './contexts/PhotosContext';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={PicsView} >
          <PhotosContextProvider> 
             <PicsView />
          </PhotosContextProvider>
        </Route>
        <Route path="/photo/:id" component={Details}>
          <Details />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

