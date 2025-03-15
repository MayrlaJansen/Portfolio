import Avatar from "../images/img2.jpeg"
import SocialNetworks from "./SocialNetworks"
import InformationContainer from "./InformationContainer"

import "../styles/components/sidebar.sass"

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Mayrla Jansen" width={200}/>
      <p className="title">Desenvolvedora front-end</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="#" className="btn" download="curriculo_MayrlaJansen.pdf">Download currículo</a>
    </aside>
  )
}

export default Sidebar