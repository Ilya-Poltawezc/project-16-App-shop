import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import SectionAboutUs from './components/Sider/SectionAboutUs/SectionAboutUs';
import SectionCatalog from './components/Sider/SectionCatalog/SectionCatalog';
import SectionContacts from './components/Sider/SectionContacts/SectionContacts';
import SectionForm from './components/Sider/SectionForm/SectionForm';
import SectionQuestions from './components/Sider/SectionQuestions/SectionQuestions';
import SectionSelecting from './components/Sider/SectionSelecting/SectionSelecting';
import SectionTeam from './components/Sider/SectionTeam/SectionTeam';
import { useState } from 'react';
import { CartContext } from './context/CartContext';
import ModalCart from './components/Header/ModalCart/ModalCart';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product])
  }

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  return (
    <CartContext.Provider value={{ cart, 
          addToCart, 
          removeFromCart, 
          isCartOpen,  
          openCart: () => {setIsCartOpen(true)}, 
          closeCart: () => setIsCartOpen(false), }}>
    <Header />
    <main>
      <SectionCatalog />
      <SectionAboutUs />
      <SectionSelecting />
      <SectionTeam />
      <SectionQuestions />
      <SectionContacts />
      <SectionForm />
    </main>
    <Footer />
    <ModalCart />
    </CartContext.Provider>
  )
}

export default App
