
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import { Footer } from './components/layout/Footer';
import Header from './components/layout/Header';
import { ProductDetails } from './components/products/ProductDetails';
import Dashboard from './components/admin/Dashboard';
import ProductList from './components/admin/ProductList';
import { Login } from './components/user/Login';
import { Register } from './components/user/Register';
import Cart from './components/cart/Cart';
import store from './store';
import { useEffect } from 'react';
import { loadUser } from './actions/userActions';
import { Profile } from './components/user/Profile';
import ProtectedRoute from './routes/ProtectedRoute';
import NewProduct from './components/admin/NewProduct';
import { UpdateProduct } from './components/admin/UpdateProduct';
import Shipping from './components/cart/Shipping';
import { ConfirmOrder } from './components/cart/ConfirmOrder';
import { Payment } from './components/cart/Payment';
import { Success } from './components/cart/Success';
import { ListOrder } from './components/order/ListOrder';
import { OrderDetails } from './components/order/OrderDetails';
import UsersList from './components/admin/UserList';
import OrdersList from './components/admin/OrdersList';
import ProcessOrder from './components/admin/ProccessOrder';
import ProductReviews from './components/admin/ProductReviews';
import UpdateUser from './components/admin/UpdateUser';
import { UpdateProfile } from './components/user/UpdateProfile';
import { UpdatePassword } from './components/user/UpdatePassword';
import { useSelector } from 'react-redux';

function App() {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  const {user, isAuthenticated, loading} = useSelector(state => state.auth)
  
  return (
    <Router>
    <div className="App">
     <Header />
     <div className='container container-fluid'>
      <Routes>
       <Route path='/' element={<Home />}/>
       <Route path='/Home' element={<Home />}/>
       <Route path='/producto/:id'element={<ProductDetails/>}/>
       <Route path='/admin/dashboard'element={<Dashboard/>}/>
       <Route path='/productlist'element={<ProductList/>}/>
       <Route path='/search/:keyword'element={<Home />} />
       <Route path='/login'element={<Login />} />
       <Route path='/register'element={<Register/>} />
       <Route path="/carrito"element={<Cart/>} />
       {/* <Route path='/mycount'element={<Profile/>} /> */}


       {/*Ruta protegida*/}
       <Route path="/dashboard"
       element={<ProtectedRoute isAdmin={true}><Dashboard /></ProtectedRoute>} />

       <Route path="/updateProduct/:id"
              element={<ProtectedRoute isAdmin={true}><UpdateProduct /></ProtectedRoute>} />


      <Route path="/ProductList"
              element={<ProtectedRoute><ProductList /></ProtectedRoute>} />

      <Route path="/nuevoProducto"
              element={<ProtectedRoute><NewProduct/></ProtectedRoute>} />


       <Route path="/shipping"
              element={<ProtectedRoute><Shipping /></ProtectedRoute>} />      

        <Route path="/order/confirm"
              element={<ProtectedRoute><ConfirmOrder /></ProtectedRoute>} />  

         <Route path="/payment"
              element={<ProtectedRoute><Payment /></ProtectedRoute>} />

          <Route path="/success"
              element={<ProtectedRoute><Success /></ProtectedRoute>} />

          <Route path="/myOrders"
              element={<ProtectedRoute><ListOrder /></ProtectedRoute>} />

          <Route path="/order/:id"
              element={<ProtectedRoute><OrderDetails /></ProtectedRoute>} />

          <Route path="/orderList"
              element={<ProtectedRoute isAdmin={true}><OrdersList /></ProtectedRoute>} />

           <Route path="/admin/users"
              element={<ProtectedRoute isAdmin={true}><UsersList /></ProtectedRoute>} />

            <Route path="/admin/user/:id"
              element={<ProtectedRoute isAdmin={true}><UpdateUser /></ProtectedRoute>} />

              <Route path="/admin/order/:id"
              element={<ProtectedRoute isAdmin={true}><ProcessOrder /></ProtectedRoute>} />

                <Route path="/admin/reviews"
              element={<ProtectedRoute isAdmin={true}><ProductReviews /></ProtectedRoute>} />

              <Route path="/mycount"
              element={<ProtectedRoute><Profile /></ProtectedRoute>} />

             <Route path="/yo/update"
              element={<ProtectedRoute><UpdateProfile /></ProtectedRoute>} />

              <Route path="/password/update"
              element={<ProtectedRoute><UpdatePassword /></ProtectedRoute>} />

              
     

    
      </Routes>
     </div>
      
     {!loading && (!isAuthenticated || user.role!=="admin") &&(
        <Footer />
       )}
  
    </div>
    </Router>
  );
}

export default App;
