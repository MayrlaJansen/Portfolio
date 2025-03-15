import {FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'

import '../styles/components/socialnetworks.sass'

const socialNetworks = [
    {name: "linkedin", href:"https://www.linkedin.com/in/mayrla-jansen-a329a01b1/", icon: <FaLinkedinIn />},
    {name: "github", href:"https://github.com/MayrlaJansen/", icon: <FaGithub />},
    {name: "instagram", href:"https://www.instagram.com/_mayrla.jansen/", icon: <FaInstagram />},
]

const SocialNetworks = () => {
  return (
    <section id="social-networks">
        {socialNetworks.map((network) => (
            <a href={network.href} className="social-btn" id={network.name} key={network.name} target="_blank">
                {network.icon}
            </a>
        ))}
    </section>
  )
}

export default SocialNetworks