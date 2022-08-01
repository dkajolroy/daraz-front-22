import { BrowserRouter, Router, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ViewProduct from './Pages/ViewProduct';
import Profile from './Pages/Profile';
import Cart from './Pages/Cart';
import Empty from './Pages/Empty';
import Sign from './Pages/Sign';
function App() {
  return (
    <BrowserRouter >
      <Router>
        <Route path="/" component={Home} />
        <Route path="/product/:productId" component={ViewProduct} />
        <Route path="/profile" component={Profile} />
        <Route path="/cart" component={Cart} />
        <Route path="/auth" component={Sign} />
        <Route path="/*" component={Empty} />
      </Router>
    </BrowserRouter>
  );
}

export default App;
