"use client";
import React, { useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";
import toast from "react-hot-toast";

const page = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    serviceType: "",
    preferredDate: "",
    preferredTime: "",
    address: "",
    instructions: "",
  });
  const [error, setError] = useState({});
  const [isBooking, setIsBooking] = useState(false);
  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
    if (!formData.phone) newErrors.phone = "Phone number is required";
    else if (!phoneRegex.test(formData.phone))
      newErrors.phone = "Format: (123) 456-7890";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Enter a valid Email";
    if (!formData.serviceType || formData.serviceType === "Select a service")
      newErrors.serviceType = "Please select a service";
    if (!formData.preferredDate) newErrors.preferredDate = "Pick a date";
    if (!formData.preferredTime) newErrors.preferredTime = "Pick a time";
    if (!formData.address.trim()) newErrors.address = "Address is required";

    setError(newErrors);
    return Object.keys(newErrors).length === 0; // Fixed typo in length
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (error[name]) {
      setError((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        setIsBooking(true);
        const response = await fetch("/api/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.fullName,
            email: formData.email,
            service: formData.serviceType,
            date: `${formData.preferredDate} ${formData.preferredTime}`,
            message: `
Phone: ${formData.phone}
Address: ${formData.address}
Special Instructions: ${formData.instructions || "None"}
            `.trim(),
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to submit booking");
        }

        // Clear form on success
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          serviceType: "",
          preferredDate: "",
          preferredTime: "",
          address: "",
          instructions: "",
        });

         toast.success(
           "Booking submitted successfully! We will contact you shortly.",
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
      } catch (error) {
        toast.error(error.message || "Failed to submit booking. Please try again.");
      } finally {
        setIsBooking(false);
      }
    }
  };

  const inputClass = "w-full border border-gray-300 p-2 rounded";

  return (
    <section className="w-full my-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow">
        <div className="bg-blue-50 py-3 mb-2">
          <h1 className="text-sm text-center">
            Fill out the form below and we'll get back to you with a
            confirmation
          </h1>
        </div>

        <form onSubmit={handleSubmit} method="POST" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name *
              </label>
              <input
                type="text"
                value={formData.fullName}
                name="fullName"
                title="Full Name"
                onChange={handleChange}
                placeholder="Enter Full Name"
                className={`${inputClass} ${
                  error.fullName ? "border-red-500" : ""
                }`}
              />
              {error.fullName && (
                <p className="text-red-500 text-sm mt-1">{error.fullName}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                title="Phone Number"
                name="phone"
                placeholder="Enter Your Phone Number"
                className={`${inputClass} ${
                  error.phone ? "border-red-500" : ""
                }`}
              />
              {error.phone && (
                <p className="text-red-500 text-sm mt-1">{error.phone}</p>
              )}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Email Address *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={handleChange}
              name="email"
              placeholder="youremail@example.com"
              className={`${inputClass} ${error.email ? "border-red-500" : ""}`}
            />
            {error.email && (
              <p className="text-red-500 text-sm mt-1">{error.email}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Service Type *
            </label>
            <select
              value={formData.serviceType}
              onChange={handleChange}
              name="serviceType"
              className={`${inputClass} ${
                error.serviceType ? "border-red-500" : ""
              }`}
            >
              <option>Select a service</option>
              <option value="home">Home Cleaning</option>
              <option value="regular">Regular Cleaning</option>
              <option value="office">Office Cleaning</option>
              <option value="move">Move In/Out Cleaning</option>
              <option value="laundry">Laundry Pick Up</option>
              <option value="fumigation">Fumigation Service</option>
              <option value="deep">Deep Cleaning</option>
            </select>
            {error.serviceType && (
              <p className="text-red-500 text-sm mt-1">{error.serviceType}</p>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <label className="block text-sm font-medium mb-1">
                Preferred date *
              </label>
              <input
                type="date"
                value={formData.preferredDate}
                onChange={handleChange}
                name="preferredDate"
                placeholder="Select Date"
                className={`${inputClass} ${
                  error.preferredDate ? "border-red-500" : ""
                }`}
              />
              {error.preferredDate && (
                <p className="text-red-500 text-sm mt-1">
                  {error.preferredDate}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Preferred Time *
              </label>
              <input
                type="time"
                value={formData.preferredTime}
                onChange={handleChange}
                name="preferredTime"
                placeholder="Select Time"
                className={`${inputClass} ${
                  error.preferredTime ? "border-red-500" : ""
                }`}
              />
              {error.preferredTime && (
                <p className="text-red-500 text-sm mt-1">
                  {error.preferredTime}
                </p>
              )}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Service Address *
            </label>
            <input
              type="text"
              value={formData.address}
              onChange={handleChange}
              name="address"
              placeholder="Enter full address including city and zip code"
              className={`${inputClass} ${
                error.address ? "border-red-500" : ""
              }`}
            />
            {error.address && (
              <p className="text-red-500 text-sm mt-1">{error.address}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Special Instructions
            </label>
            <textarea
              value={formData.instructions}
              onChange={handleChange}
              name="instructions"
              placeholder="Any special requests or instructions for our team"
              className={inputClass + " h-24"}
            />
          </div>
          <div className="flex flex-col gap-2 justify-center bg-blue-50 p-2 w-full">
            <div className="flex  items-center gap-2">
              <IoMdCheckmarkCircleOutline
                size={12}
                className="text-green-600"
              />

              <p className="text-sm text-gray-500">
                Free estimates for all services
              </p>
            </div>
            <div className="flex justify-start items-center gap-2">
              <RiCalendarScheduleLine size={12} className="text-green-600" />
              <p className="text-sm text-gray-500">
                Flexible scheduling including weekends
              </p>
            </div>
            <div className="flex justify-start items-center gap-2">
              <SlLocationPin size={12} className="text-green-600" />

              <p className="text-sm text-gray-500">
                Service available in Lagos only at the moment
              </p>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="bg-[#0A58A2] font-semibold w-full py-2 text-amber-50 rounded-sm cursor-pointer"
            >
              {isBooking ? "Booking Service" : "Book Service"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default page;
