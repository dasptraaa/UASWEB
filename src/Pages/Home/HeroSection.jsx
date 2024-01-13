export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Das</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">photographer</span>{" "}
            <br />
            & Visual Art
          </h1>
          <p className="hero--section-description">
          I work in the creative industry.
            <br /> do you want to communicate with me?
          </p>
        </div>
        <button className="btn btn-primary">Contact Me</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/home.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
