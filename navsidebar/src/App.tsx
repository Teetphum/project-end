import React from 'react';
import {BrowserRouter , Switch , Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/app.css';

import UserRoute from './UserRoute';
import AdminRoute from './AdminRoute';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

import Home from './pages/home/Home'
import Howto from './pages/howtoshipping/Howto';
import Aboutus from './pages/aboutus/Aboutus';
import Contact from './pages/contact/Contact';

import AddUser from './pages/addUser/AddUser';
import AddProduct from './pages/addProduct/AddProduct';
import AddCategory from './pages/addCategory/AddCategory';

import Categories from './pages/showCategories/Categories';
import Showproducts from './pages/showProducts/Showproducts';
import Singleproduct from './pages/singleProduct/Singleproduct';
import Showcatepro from './pages/showCateproducts/Showcatepro';
import Showsearch from './pages/showsearchproducts/Showsearch';

import Managecategory from './pages/manageCategory/Managecategory';
import Manageuser from './pages/manageUser/Manageuser';
import Manageproduct from './pages/manageProduct/Manageproduct';

import Editproduct from './pages/editProduct/Editproduct';
import Edituser from './pages/editUser/Edituser';
import Editcategory from './pages/editCategory/Editcategory';

import Signin from './pages/signin/Signin';

import Profile from './pages/profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="contain">
        <Sidebar />
        <div className='other'>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/showCategories" component={Categories}/>
            <Route exact path="/showProducts" component={Showproducts}/>
            <Route exact path="/howtoshipping" component={Howto}/>
            <Route exact path="/aboutus" component={Aboutus}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/signin" component={Signin}/>
            <Route exact path="/addUser" component={AddUser}/>

            <AdminRoute exact path="/addProduct" component={AddProduct}/>
            <AdminRoute exact path="/addCategory" component={AddCategory}/>
            <AdminRoute exact path="/managecategory" component={Managecategory}/>
            <AdminRoute exact path="/manageuser" component={Manageuser}/>
            <AdminRoute exact path="/manageproduct" component={Manageproduct}/>
            <Route exact path="/singleproduct/:_id" component={Singleproduct}/>
            <AdminRoute exact path="/product/edit/:_id" component={Editproduct}/>
            <AdminRoute exact path="/user/edit/:_id" component={Edituser}/>
            <AdminRoute exact path="/category/edit/:_id" component={Editcategory}/>

            <Route exact path="/showProducts/category/:_id" component={Showcatepro}/>
            <Route exact path="/showProducts/search/:bookname" component={Showsearch}/>
            

            <UserRoute exact path="/user/profile" component={Profile}/>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
