import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import SectionAboutUs from './components/Sider/SectionAboutUs/SectionAboutUs';
import SectionCatalog from './components/Sider/SectionCatalog/SectionCatalog';
import SectionContacts from './components/Sider/SectionContacts/SectionContacts';
import SectionForm from './components/Sider/SectionForm/SectionForm';
import SectionQuestions from './components/Sider/SectionQuestions/SectionQuestions';
import SectionSelecting from './components/Sider/SectionSelecting/SectionSelecting';
import SectionTeam from './components/Sider/SectionTeam/SectionTeam';

function App() {
  return (
    <>
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
    </>
  )
}

export default App
