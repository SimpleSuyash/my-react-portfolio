// import React from "react";
import FullPhoto from "../assets/images/full_photo.jpg";

const About = () => {
  const clickHandler = () => {
    window.open(
      "http://docs.google.com/gview?url=https://simplesuyash.github.io/my-portfolio/assets/docs/Suyash-Resume-2021.docx&embedded=true"
    );
  };
  return (
    <section id="about" className="section bg-secondary">
      <div className="container mx-auto ">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={FullPhoto}
            alt="My full photo"
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-25 before:-top-[2rem] before:hidden before:lg:block">
                Suyash Maharjan
              </h2>
              <p className="text-accent">Javascript Web Developer</p>
              <hr className=" mb-8 opacity-25" />
              <p className="mb-8 text-center lg:text-justify">
                Hi, I&apos;m Suyash Maharjan. Originally from Nepal, I now live in Tallawong, NSW. I&apos;m a dad of two little boys 😊, and although I&apos;m not sure if coding can be considered a hobby, I absolutely love it. When I&apos;m not coding, I enjoy reading high fantasy books, walking and strolling. Currently, I work full-time at the South Eastern Local Health District as a Patient Services Assistant. I hold a Bachelor&apos;s degree of IT with major in software application development.
              </p>
              <p className="mb-8 text-center lg:text-justify">
                Additionally, I&apos;m participating in a Web Development coding bootcamp collaboratively provided by the University of Sydney and edX, with the hope that it will help me secure a coding job.
              </p>
            </div>
            <button className="btn btn-md bg-accent hover:bg-accent-hover transition-all" onClick = {clickHandler}>
              Download My Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
