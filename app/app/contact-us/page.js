"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { contact } from "../../constants";
import CTA from "../../components/CTA";

const createInitialFormState = () => ({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Page = () => {
  const [formData, setFormData] = useState(createInitialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState({});

  const validate = () => {
    const newErrors = {};
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedSubject = formData.subject.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName) newErrors.name = "Name is required";
    else if (trimmedName.length < 2)
      newErrors.name = "Name can't be less than 2 characters";

    if (!trimmedSubject) newErrors.subject = "Subject is required";

    if (!trimmedEmail) newErrors.email = "Please enter an email";
    else if (!emailPattern.test(trimmedEmail))
      newErrors.email = "Please enter a valid email";

    if (!trimmedMessage) newErrors.message = "Message is required";
    else if (trimmedMessage.length <= 10)
      newErrors.message = "Message too short, message must be more than 10 characters";

    setError(newErrors);
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error[name]) {
      setError((prev) => {
        const { [name]: _removed, ...rest } = prev;
        return rest;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    try {
      setIsSubmitting(true);
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const responseBody = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(responseBody.error || "Failed to send message");
      }

      toast.success("Thanks! We'll be in touch shortly.",
         {
          style: {
            border: "1px solid bg-[#0A58A2]",
            padding: "16px",
            color: "#0A58A2",
          },
          iconTheme: {
            primary: "#0A58A2",
            secondary: "#ffffff",
          },
        }
      );
      setFormData(createInitialFormState());
      setError({});
    } catch (err) {
      toast.error(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "p-3 rounded-md border border-gray-300 w-full";

  return (
    <div className="conatiner mx-auto flex flex-col justify-start items-center">
      <div className="flex flex-col gap-3 justify-center items-center text-center w-full my-10">
        <h1 className="text-3xl font-semibold">Get In Touch</h1>
        <p>
          Ready to experience the Total Touch difference? <br></br> Contact us
          today for a free estimate or to schedule your service.
        </p>
      </div>
      <div className="container  w-full flex flex-col-reverse md:flex-col-reverse lg:flex-row items-center justify-start px-4 lg:px-40 ">
        <div className="w-full  lg:w-1/2 m-7 grid grid-cols-1 sm:grid-cols-2 gap-3 ">
          {contact.map((items, index) => {
            return (
              <div
                key={index}
                className="flex justify-start items-center shadow-sm rounded-sm gap-2 p-2 lg:p-5 bg-white mb-5"
              >
                <div className="p-2 w-fit rounded-lg bg-blue-200 text-blue-900">
                  {items.icon}
                </div>
                <div className="flex flex-col justify-start items-start min-w-0 w-full">
                  <h1 className="font-semibold text-xs">{items.title}</h1>
                  <h2 className="font-normal text-[12px] break-words whitespace-normal">
                    {items.heading}
                  </h2>
                  <p className="text-xs text-gray-500">{items.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="bg-white p-10 rounded-md shadow-md m-5 w-full lg:w-1/2">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className={`${inputClass} ${error.name ? "border border-red-500" : ""}  `}
              disabled={isSubmitting}
            />
            {error.name && (
              <p className="text-red-500 text-sm ">{error.name}</p>
            )}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={`${inputClass} ${error.email ? "border border-red-500" : ""}  `}
              disabled={isSubmitting}
            />
            {error.email && (
              <p className="text-red-500 text-sm ">{error.email}</p>
            )}
            <input
              type="text"
              name="subject"
              value={formData.subject}
              placeholder="Subject"
              onChange={handleChange}
              className={`${inputClass} ${error.subject ? "border border-red-500" : ""}  `}
              disabled={isSubmitting}
            />
            {error.subject && (
              <p className="text-red-500 text-sm">{error.subject}</p>
            )}
            <textarea
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`${inputClass} ${error.message ? "border-red-500" : "" } h-32`}
              disabled={isSubmitting}
            />
            {error.message && (
              <p className="text-red-500 text-sm">{error.message}</p>
            )}
            <button
              type="submit"
              className=" w-full bg-[#0A58A2] text-white p-3 rounded-md  mx-auto disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
      <CTA />
    </div>
  );
};

export default Page;
