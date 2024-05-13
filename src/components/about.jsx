import avatar from "../assets/avatar.png";

function About() {
  return (
    <section
      id="about"
      className="w-full flex flex-col justify-center items-center md:flex md:flex-row md:gap-10 md:w-full md:justify-center md:align-middle pt-28 md:pt-56"
    >
      <div className="avatar">
        <img
          src={avatar}
          alt="cat coding avatar icon"
          className="h-72 w-72 md:h-100 md:w-100 rounded-full"
        />
      </div>
      <div className="text w-3/5 mt-12 text-center md:text-start md:w-2/5 ">
        <h1 className="text-4xl font-bold mb-5 md:text-6xl md:font-bold">
          Welcome
        </h1>
        <p className="text-lg md:text-xl">
          I am primarily studying web development, but I am also interested in
          other areas of programming. This will be a page where I will showcase
          the projects I build. I will update the page as I progress in my
          learning and as I create new projects.
        </p>
      </div>
    </section>
  );
}

export default About;
