import Header from './components/Header/Header';
import SectionAboutUs from './components/Sider/SectionAboutUs/SectionAboutUs';
import SectionCatalog from './components/Sider/SectionCatalog/SectionCatalog';
import SectionSelecting from './components/Sider/SectionSelecting/SectionSelecting';

function App() {
  return (
    <>
    <Header />
    <main>
      <SectionCatalog />
      <SectionAboutUs />
      <SectionSelecting />
    </main>
    </>
  )
}

export default App
