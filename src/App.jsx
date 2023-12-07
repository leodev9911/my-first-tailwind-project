import HeaderSection from './components/HeaderSection'
import NavBar from './components/NavBar'
import Header from './containers/Header'
import './index.css'

export default function App () {
  return (
    <>
      <Header>
        <NavBar />
        <HeaderSection />
      </Header>
    </>
  )
}

