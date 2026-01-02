import Header from './components/Header/Header';
import SectionAboutUs from './components/Sider/SectionAboutUs/SectionAboutUs';
import SectionCatalog from './components/Sider/SectionCatalog/SectionCatalog';

function App() {
  return (
    <>
    <Header />
    <main>
      <SectionCatalog />
      <SectionAboutUs />
    </main>
    </>
  )
}

export default App
