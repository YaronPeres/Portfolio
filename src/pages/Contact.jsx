import Form from "../components/Form";

function Contact() {
  return (
    <div name="contact" className="w-full h-full xl:pt-20 bg-custom-background">
      <div className="max-w-[1080px] mx-auto p-4 flex-col items-center justify-center w-full h-full">
        <div className="text-center md:text-start">
          <p className="inline md:text-middle border-b-4 sm:text-5xl text-4xl lg:text-6xl mb-1 font-bold text-primary-950 border-primary-950 dark:text-secondary-300 dark:border-secondary-300">
            Contact
          </p>
        </div>
        <Form />
      </div>
    </div>
  );
}

export default Contact;
