import './App.css'
import WelcomeMessage from "./components/WelcomeMessage"
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from "./components/UserProfile";



function App() {
  
  return (
    <>
      <Header />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <MainContent />
      <WelcomeMessage />       
      <Footer />
    </>
  )
}

export default App
