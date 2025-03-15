import '../styles/components/careercontainer.sass'

const CareerContainer = () => {
  return (
    <section id="career-container">
      <h2>Carreira</h2>
      <div className="career-container-item">
        <p className="title-career">Desenvolvedora Front-end Pleno</p>
        <p className="subtitle-career">Zenvia (Movidesk) | ago/2022 - atual </p>
        <p>Responsável pelo desenvolvimento de funcionalidades para o sistema e a componentização do novo Design System. Assim como a manutenção e resolução de bugs do sistema legado. Atuando com stack em React, typescript e principalmente, javascript.</p>
      </div>
      <div className="career-container-item">
        <p className="title-career">Desenvolvedora Web</p>
        <p className="subtitle-career">Americanas SA | out/2021 - maio/2022</p>
        <p>Responsável pelo desenvolvimento de funcionalidades para o sistema de backoffice do time de atuação. Atuando com stack em React e typescript.</p>
      </div>
      <div className="career-container-item">
        <p className="title-career">Estágio Tech</p>
        <p className="subtitle-career">Americanas SA | abr/2021 - out/2021</p>
        <p>Job rotation em diversos times da empresa, aulas e práticas. Atuando com diferentes tecnologias em cada time, como React, Python, Django… </p>
      </div>
      <div className="career-container-item">
        <p className="title-career">Estágio em desenvolvimento web</p>
        <p className="subtitle-career">Unasus-UFMA | ago/2019 - mar/2021</p>
        <p>Responsável pelo desenvolvimento e manutenção de sistemas escaláveis. Atuando com stack em Angular e JavaScript é React e Typescript.</p>
      </div>
    </section>
  )
}

export default CareerContainer