import NavBar from './componets/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './componets/ItemListConteiner/ItemListConteiner';
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import { CartProvider } from './Contexto/CartContext';
import Cart from './componets/Cart/Cart';
import Checkout from './componets/Checkout/Checkout';



function App() {
  return (
    <BrowserRouter >
      {/* <CartProvider> */}
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={<ItemListContainer greetings={"Tienda de confianza"} />}
          />
          <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
          <Route exact path="/detail/:productId" element={<ItemDetailContainer />} />
          <Route exact path='/cart' element= {<Cart/>}/>
          <Route exact path='/checkout' element= {<Checkout/>}/>
        </Routes>
      {/* </CartProvider> */}
    </BrowserRouter>
  );
}

export default App;
