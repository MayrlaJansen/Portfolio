import AboutContainer from './AboutContainer'
import CareerContainer from './CareerContainer'
import TechnologiesContainer from './TechnologiesContainer'

import '../styles/components/maincontent.sass'

const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer />
      <CareerContainer/>
      <TechnologiesContainer />
    </main>
  )
}

export default MainContent