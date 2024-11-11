import NavBar from './componets/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './componets/ItemListConteiner';
import ItemDetailContainer from './componets/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer greetings={"Tienda de confianza"} />}
        />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/detail/:productId" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
