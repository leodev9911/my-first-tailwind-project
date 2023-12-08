import FirstSection from './components/FirstSection'
import FooterLinksSection from './components/FooterLinksSection'
import FooterSocialSection from './components/FooterSocialSection'
import HeaderSection from './components/HeaderSection'
import NavBar from './components/NavBar'
import SecondSection from './components/SecondSection'
import Footer from './containers/Footer'
import Header from './containers/Header'
import Main from './containers/Main'
import './index.css'

export default function App () {
  return (
    <>
      <Header>
        <NavBar />
        <HeaderSection />
      </Header>
      <Main>
        <FirstSection />
        <SecondSection />
      </Main>
      <Footer>
        <FooterSocialSection />
        <FooterLinksSection />
      </Footer>
    </>
  )
}

