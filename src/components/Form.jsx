import Button from "../components/Button";

const style =
  "border-2 rounded-lg p-3 flex focus:outline-none text-secondary-800 dark:text-secondary-200 dark:focus:border-primary-500 focus:border-primary-500 border-primary-950 dark:border-secondary-200 dark:bg-secondary-800";

function Form() {
  return (
    <>
      <form
        action="https://getform.io/f/a81b7450-1b65-49dd-b1b7-4e70587c75fb"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm text-secondary-800 dark:text-secondary-200 py-2">
              Name
            </label>
            <input className={style} type="text" name="name" required />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm text-secondary-800 dark:text-secondary-200 py-2">
              Phone
            </label>
            <input className={style} type="text" name="phone" minLength="8" />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm text-secondary-800 dark:text-secondary-200 py-2">
            Email
          </label>
          <input className={style} name="email" required />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm text-secondary-800 dark:text-secondary-200 py-2">
            Subject
          </label>
          <input className={style} type="text" name="subject" required />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm text-secondary-800 dark:text-secondary-200 py-2">
            Message
          </label>
          <textarea
            className={style}
            rows="5"
            name="message"
            required
          ></textarea>
        </div>
        <div>
          <Button type="send">Send Message</Button>
        </div>
      </form>
    </>
  );
}

export default Form;
