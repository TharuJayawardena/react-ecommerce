import React, {useState} from 'react';
import data from './components/back/Data/Data';
import Header from './components/front/Header/Header';
import Products from './components/front/Products/Products';
import Signup from './components/front/Signup/Signup';
import Cart from './components/front/Cart/Cart';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';

const App = () => {
  const { productItems } = data;
  const [cartItems, setCartItems] = useState([]);
  
  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist){
      setCartItems(cartItems.map((item) => item.id === product.id ?
      {...ProductExist, quantity: ProductExist.quantity + 1} : item
    ));
    }else {
      setCartItems([...cartItems, {...product, quantity: 1}]);    }
  };

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist.quantity === 1){
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
         setCartItems(
          cartItems.map((item) => item.id === product.id ? {...ProductExist, quantity: ProductExist.quantity - 1} : item)
         );
    }
  };

  const handleCartClearance = () => {
    setCartItems([]);
  }
  
  return (
    <div>
      <Router>
         <Header cartItems= {cartItems} />
         {/* <Products productItems={productItems} />
         <Cart cartItems={cartItems} />
         <handleAddProduct handleAddProduct={handleAddProduct}/> */}
         <Routes>

         {/* <Route path="/" element={<Home />} /> */}
         <Route path="/" exact element={<Products productItems={productItems} cartItems={cartItems} handleAddProduct= {handleAddProduct} handleRemoveProduct= {handleRemoveProduct}/>} />
         <Route path="/signup" exact element={<Signup />}  />
         <Route path="/cart" exact element={<Cart cartItems={cartItems} handleAddProduct= {handleAddProduct}  handleRemoveProduct= {handleRemoveProduct} handleCartClearance={handleCartClearance} />} />
         </Routes>
      </Router>
      
    </div>
  );
};

export default App;