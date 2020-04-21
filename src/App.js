import React from 'react';
import './App.css';
import Header from './componets/Header';
import Shop from './componets/Header/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './componets/review/Review';
import Manage from './componets/manage/Manage';
import Notfound from './componets/notfound/Notfound';
import ProductDetail from './ProductDetail/ProductDetail';
function App() {
  return (
    <div>
     <Header></Header>
     <Router>
       <Switch>
         <Route path = "/shop">
          <Shop></Shop>
         </Route>
         <Route path ="/review">
           <Review></Review>
         </Route>
         <Route path ="/manage">
          <Manage></Manage>
         </Route>
         <Route exact path ="/">
           <Shop></Shop>
         </Route>
         <Route path="/product/:productkey">
           <ProductDetail></ProductDetail>
         </Route>
         <Route path="/*">
          <Notfound></Notfound>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
