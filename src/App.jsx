import Header from './components/Header/Header';
import SectionAboutUs from './components/Sider/SectionAboutUs/SectionAboutUs';
import SectionCatalog from './components/Sider/SectionCatalog/SectionCatalog';
import SectionContacts from './components/Sider/SectionContacts/SectionContacts';
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
    </main>
    </>
  )
}

export default App
