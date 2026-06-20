import profileImage from './profile.png';

const skills = [
  'AWS y servicios cloud',
  'Docker y Kubernetes',
  'Terraform e infraestructura como código',
  'CI/CD con GitHub Actions y GitLab CI',
  'Linux, Bash y automatización',
  'Observabilidad con Prometheus, Grafana y ELK',
];

const experience = [
  {
    period: '2024 - Actualidad',
    role: 'Senior DevOps Engineer',
    company: 'CloudForge Labs',
    details: [
      'Diseñé pipelines CI/CD para aplicaciones web y APIs con despliegues más confiables y repetibles.',
      'Estandaricé infraestructura en Terraform y reduje el tiempo de aprovisionamiento de entornos.',
      'Implementé observabilidad con alertas accionables y tableros para monitoreo de servicios críticos.',
    ],
  },
  {
    period: '2023 - 2024',
    role: 'DevOps Engineer',
    company: 'Nexa Systems',
    details: [
      'Automatizé despliegues en Kubernetes y coordiné migraciones desde servidores monolíticos.',
      'Fortalecí seguridad operacional con gestión de secretos, hardening básico y control de accesos.',
      'Colaboré con desarrollo para bajar incidentes de release y mejorar la trazabilidad de cambios.',
    ],
  },
  {
    period: '2022 - 2023',
    role: 'DevOps Analyst',
    company: 'InfraWorks',
    details: [
      'Apoyé la estandarización de entornos locales y productivos con scripts y plantillas reutilizables.',
      'Documenté procesos operativos para acelerar onboarding y reducir dependencia manual del equipo.',
      'Gestioné tareas de soporte para plataformas Linux y herramientas de integración continua.',
    ],
  },
];

const highlights = [
  '3 años de experiencia enfocando estabilidad, automatización y escalabilidad.',
  'Perfil orientado a entregar plataformas confiables y fáciles de operar.',
  'Experiencia práctica en cloud, contenedores, infraestructura y monitoreo.',
];

function App() {
  return (
    <main className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <section className="hero card reveal">
        <div className="hero-copy">
          <p className="eyebrow">Currículum Vitae</p>
          <h1>Oscar Murguia</h1>
          <h2>DevOps Engineer</h2>
          <p className="summary">
            Especialista en automatización de infraestructura, pipelines de entrega continua y
            observabilidad. Desarrollo soluciones prácticas para que equipos de software entreguen
            con más velocidad y menos fricción operativa.
          </p>

          <div className="hero-badges">
            <span>3 años de experiencia</span>
            <span>Cloud + Kubernetes</span>
            <span>CI/CD</span>
          </div>
        </div>

        <div className="profile-frame">
          <img className="profile-image" src={profileImage} alt="Foto de perfil de Oscar Murguia" />
        </div>
      </section>

      <section className="grid-layout">
        <article className="card reveal delay-1">
          <p className="section-label">Perfil</p>
          <h3>Lo que aporto</h3>
          <ul className="list-grid">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="card reveal delay-2">
          <p className="section-label">Skills</p>
          <h3>Stack principal</h3>
          <div className="skill-cloud">
            {skills.map((skill) => (
              <span key={skill} className="skill-pill">
                {skill}
              </span>
            ))}
          </div>
        </article>
      </section>

      <section className="card reveal delay-3">
        <p className="section-label">Experiencia laboral</p>
        <h3>Trayectoria profesional</h3>
        <div className="timeline">
          {experience.map((item) => (
            <article key={item.role} className="timeline-item">
              <div className="timeline-marker" />
              <div>
                <p className="timeline-period">{item.period}</p>
                <h4>{item.role}</h4>
                <p className="timeline-company">{item.company}</p>
                <ul className="timeline-list">
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="card reveal delay-4">
        <p className="section-label">Formación</p>
        <h3>Educación y enfoque</h3>
        <div className="education-grid">
          <div>
            <h4>Ingeniería / Sistemas</h4>
            <p>Base técnica enfocada en automatización, administración de plataformas y trabajo colaborativo.</p>
          </div>
          <div>
            <h4>Certificaciones y práctica continua</h4>
            <p>Aprendizaje continuo en cloud, contenedores, seguridad operativa y monitoreo de servicios.</p>
          </div>
        </div>
      </section>

      <footer className="contact card reveal delay-5">
        <p className="section-label">Contacto</p>
        <h3>Hablemos</h3>
        <div className="contact-links">
          <a href="tel:+59177133301">Celular: +591 771 33301</a>
          <a href="https://www.linkedin.com/in/oscarmurguias/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;