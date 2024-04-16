import Skills from "../components/UI/Skills";

const Resume = () => {
  const clickHandler = () => {
    window.open(
      "http://docs.google.com/gview?url=https://simplesuyash.github.io/my-portfolio/assets/docs/Suyash-Resume-2021.docx&embedded=true"
    );
  };
  return (
    <section className="bg-secondary section py-24  h-[100vh] flex  items-center justify-center" id="resume">

      <div className="container mx-auto">
      <h2 className="section-title text-center pb-5">
        My Technical Proficiencies
      </h2>
        <p className="text-lg text-justify">
          I am learning a full-stack web development, specializing in both
          frontend and backend technologies. My expertise lies in modern
          frontend frameworks like React. On the backend, I&apos;ve learned
          about technologies such as NodeJS and Express. Additionally, I&apos;m
          well-versed in version control using Git, and I have hands-on
          experience with databases like MySQL and MongoDB
        </p>
        <Skills stack={"frontend"} />
        <Skills stack={"backend"} />
        <Skills stack={"neither"} />
        <div className="flex justify-center my-5">
          <button
            className="btn btn-md bg-accent hover:bg-accent-hover transition-all min-w-fit"
            onClick={clickHandler}
          >
            Download My Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resume;
