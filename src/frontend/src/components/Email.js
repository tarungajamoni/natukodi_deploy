import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Email() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email, message };
    try {
      await axios.post("/api", data);
      toast.success("Your message has been sent!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast.error("Failed to send message. Please try again!");
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="text-center">
          <h2 className="text-xl font-bold tracking-tight text-[#ff0000] pt-2">
            Please share your details
          </h2>
        </div>
        <form className="mx-3 my-3 max-w-xl max-w-96" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-x-2 gap-y-2 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block text-sm font-semibold leading-6 text-[#ff0000]"                
              >
                Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="name"
                  id="name"
                  // value={formData.name}
                  // onChange={handleChange}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="given-name"
                  required
                  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-[#ff0000]"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  // value={formData.email}
                  // onChange={handleChange}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2 ">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-[#ff0000]"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  // value={formData.message}
                  // onChange={handleChange}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 resize-none"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="mt-6 px-7">
            <button
              type="submit"
              //onClick={handleChange}
              className="block w-full rounded-md bg-[#ff6100] p-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#ff0000] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Email;
