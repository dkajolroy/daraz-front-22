import Home from './Pages/Home';
import ViewProduct from './Pages/ViewProduct';
import Profile from './Pages/Profile';
import Cart from './Pages/Cart';
import Empty from './Pages/Empty';
import Sign from './Pages/Sign';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Vendor from './Pages/Vendor';
import Admin from './Pages/Admin';
import Dashboard from './Components/Vendor/Dashboard';
import Products from './Components/Vendor/Products';
import AddProduct from './Components/Vendor/AddProduct';
import SellProduct from './Components/Vendor/SellHistory';
import Customer from './Components/Vendor/Customer';
import ViewStore from './Components/Vendor/ViewStore';
import Payment from './Components/Vendor/Payment';
import Reviews from './Components/Vendor/Reviews';
import Order from './Components/Vendor/Order';
import Support from './Components/Vendor/Support';
import Setting from './Components/Vendor/Setting';
import { useState } from 'react';
import VLogin from './Components/Vendor/Auth/VLogin';
import VSignUp from './Components/Vendor/Auth/VSignUp';
import { useSelector } from 'react-redux';
function App() {

  const { vendor } = useSelector(x => x.vendorAuth)

  return (
    <div className="container-fluid gx-0">
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<ViewProduct />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/auth" element={<Sign />} />
          <Route path="/vendor" element={vendor ? <Dashboard /> : <VLogin />} />
          <Route path="/vendor/sign_up" element={<VSignUp />} />
          <Route path="/vendor/products" element={<Products />} />
          <Route path="/vendor/add-product" element={<AddProduct />} />
          <Route path="/vendor/sell" element={<SellProduct />} />
          <Route path="/vendor/payment" element={<Payment />} />
          <Route path="/vendor/customer" element={<Customer />} />
          <Route path="/vendor/store" element={<ViewStore />} />
          <Route path="/vendor/reviews" element={<Reviews />} />
          <Route path="/vendor/order" element={<Order />} />
          <Route path="/vendor/support" element={<Support />} />
          <Route path="/vendor/setting" element={<Setting />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/*" element={<Empty />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
