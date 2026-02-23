import "./About.css"

function About() {
  return (
    <div className="about-container">

      {/* Hero 大标题 */}
      <section className="about-hero">
        <h1>About Me</h1>
      </section>

      {/* 文字内容 */}
      <section className="about-text">
        <p>
          Welcome to my photography portfolio. I specialize in capturing
          moments that tell a story. My work focuses on composition,
          lighting, and color to create striking visuals.
        </p>
        <p>
          I’ve been working in photography for over 5 years, collaborating
          with artists and brands to bring ideas to life. My goal is to
          create images that resonate and inspire.
        </p>
        <p>
          Thank you for visiting my site. Feel free to browse my gallery
          and contact me for collaborations or inquiries.
        </p>
      </section>

    </div>
  )
}

export default About