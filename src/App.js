import Home from './Pages/Home';
import ViewProduct from './Pages/ViewProduct';
import Profile from './Pages/Profile';
import Cart from './Pages/Cart';
import Empty from './Pages/Empty';
import Sign from './Pages/Sign';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TotalNav from './Components/Common/TotalNav';
import Footer from './Components/Footer/Footer';
function App() {


  return (
    <div className="container-fluid gx-0">
      <BrowserRouter >
        <TotalNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<ViewProduct />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/auth" element={<Sign />} />
          <Route path="/*" element={<Empty />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
