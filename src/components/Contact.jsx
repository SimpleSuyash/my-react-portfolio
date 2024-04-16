import { useRef, useState } from "react";
import { contact } from "../data";
import { validateEmail } from "../utils/helpers";
import emailjs from "@emailjs/browser";



const Contact = () => {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const form = useRef();
  const SERVICE_ID = "service_m0kbhwe";
  const TEMPLATE_ID = "template_e3g7059";
  const USER_ID = "yb34HQ4L0hnY_5E2s";

  //handle input blur
  const handleInputBlur = (e) => {
    switch (e.target.name) {
      case "email":
        if(!email){
          setErrorMessage("Email is required");
        }else if(!validateEmail(email)){
          setErrorMessage("Invalid email");
        }else{
          setErrorMessage("");
        }
        break;
      case "name":
        if(!name){
          setErrorMessage("Name is required");
        }else{
          setErrorMessage("");
        }
        break;
      case "message":
        if(!message){
          setErrorMessage("Message is required");
        }else{
          setErrorMessage("");
        }
        break;
      default:
        break;
    }
  }
  //based on the name of the input field, update the corresponding state variable
  const handleInputChange = (e) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "name":
        setName(e.target.value);
        break;
      case "subject":
        setSubject(e.target.value);
        break;
      case "message":
        setMessage(e.target.value);
        break;
      default:
        break;
    }
  };

  // Handle the form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try{
        const result = await emailjs.sendForm(SERVICE_ID,TEMPLATE_ID, form.current, USER_ID)
        if(result.text === "OK"){
          alert("Message received successfully!\nThank you for reaching out to me. I will get back to you as soon as possible.📧🙏");
          setEmail("");
          setName("");
          setSubject("");
          setMessage("");
        }
    }catch(err){
        console.log(err.text);
        alert("An error occurred, Please try again later");
    }
  };

  return (
    <section className="section bg-leather" id="contact">
      {/* section title  */}
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className=" section-title before:content-contact relative before:absolute before:opacity-25 before:-top-7 before:-left-40 before:hidden before:lg:block">
            Contact Me
          </h2>
          <p className="subtitle">
            If you have any questions or need clarification regarding the source
            code of any of the repositories, please don&apos;t hesitate to ask.
            I&apos;m here to assist! 👩‍💻
          </p>
        </div>

        <div className="flex flex-col lg:gap-x-8 lg:flex-row">
          {/* contact info */}
          <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div key={index} className="flex flex-col lg:flex-row gap-x-4">
                  <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-body text-xl mb-1">{title}</h4>
                    <p className="mb-1">{subtitle}</p>
                    <p className="text-accent font-normal">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* contact form */}
          <form ref={form} className="space-y-8 w-full max-w-[780px]">
            <span className="italic text-sm">
              Fields marked with * are required
            </span>
            <div className="flex gap-8">
              <input
                type="text"
                className="input"
                placeholder="Your name *"
                name="name"
                value={name}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
              />
              <input
                type="email"
                className="input"
                placeholder="Your email *"
                name="email"
                value={email}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
              />
            </div>
            <input
              type="text"
              className="input"
              placeholder="Subject"
              name="subject"
              value={subject}
              onChange={handleInputChange}
            />
            <textarea
              className="textarea"
              placeholder="Your message *"
              name="message"
              value={message}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            ></textarea>
            {errorMessage && (
              <p className="text-red-500 text-md italic">{errorMessage}</p>
            )}
            <button
              type="button"
              className="btn btn-lg bg-accent hover:bg-accent-hover disabled:opacity-50 disabled:bg-gray-700 disabled:cursor-not-allowed transition-all"
              onClick={handleFormSubmit}
              disabled={
                !email || !name || !message || !validateEmail(email)
              }
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
