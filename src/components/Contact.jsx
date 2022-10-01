import React from "react";
import contacts from "./api/Contact.api";

const Contact = () => {
  return (
    <section id={"contact"} className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-600 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto
        "
        >
          <form action="" className="flex flex-col flex-1 gap-5">
            <input type="text" className="" placeholder="Your Name" />
            <input type="text" className="" placeholder="Your Email Address" />
            <textarea
              name="message"
              id="message"
              rows="10"
              className=""
            ></textarea>
            <button className="btn-primary w-fit">Send Message</button>
          </form>
          <div className="flex flex-col gap-7">
            {contacts?.map((contact_info, i) => (
              <div className="flex gap-4 w-full items-center" key={i}>
                <div
                  className="min-w-[2rem] text-2xl min-h-[2rem] flex items-center justify-center text-center  rounded-full
              "
                >
                  <ion-icon name={contact_info?.logo}></ion-icon>
                </div>
                <p
                  className="font-semibold text-base
              "
                >
                  {contact_info?.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
