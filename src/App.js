import Home from './Pages/Home';
import ViewProduct from './Pages/ViewProduct';
import Profile from './Pages/Profile';
import Cart from './Pages/Cart';
import Empty from './Pages/Empty';
import Sign from './Pages/Sign';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Vendor from './Pages/Vendor';
import Admin from './Pages/Admin';
function App() {


  return (
    <div className="container-fluid gx-0">
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<ViewProduct />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/auth" element={<Sign />} />
          <Route path="/vendor" element={<Vendor />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/*" element={<Empty />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
