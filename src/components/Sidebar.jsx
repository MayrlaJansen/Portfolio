import Avatar from "../images/img2.jpeg"
import SocialNetworks from "./SocialNetworks"

import "../styles/components/sidebar.sass"

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Mayrla Jansen" width={200}/>
      <p className="title">Desenvolvedora front-end</p>
      <SocialNetworks />
      <p>informações de contato</p>
      <a href="" className="btn">Download currículo</a>
    </aside>
  )
}

export default Sidebar