import { Phone } from "lucide-react";
import React, { useState } from "react";

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
    if (!formData.serviceType)
      newErrors.serviceType = "Please select a service";
    if (!formData.preferredDate) newErrors.preferredDate = "Pick a date";
    if (!formData.preferredTime) newErrors.preferredTime = "Pick a time";
    if (!formData.address.trim()) newErrors.address = "Address is required";

    setError(newErrors);
    return Object.keys(newErrors).lenth === 0;
  };

  const handleChange = () => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  
  return (
    <section className="w-full">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name *
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter Full Name"
                className="w-full p-2 border border-blue-200 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter Your Phone Number"
                className="w-full p-2 border border-blue-200 rounded-lg"
              />
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
              placeholder="youremail@example.com"
              className="w-full p-2 border border-blue-200 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Service Type *
            </label>
            <select value={formData.serviceType} onChange={handleChange} className="w-full p-2 border border-blue-200 rounded-lg">
              <option>Select a service</option>
              <option>Home Cleaning</option>
              <option>Regular Cleaning</option>
              <option>Office Cleaning</option>
              <option>Move In/Out Cleaning</option>
              <option>Laundry Pick Up</option>
              <option>Fumigation Service</option>
              <option>Deep Cleaning</option>
            </select>
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
                placeholder="Select Date"
                className="w-full border border-blue-200 rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Preferred Time *
              </label>
              <input
                type="time"
                value={formData.preferredTime}
                onChange={handleChange}
                placeholder="Select Time"
                className="w-full border border-blue-200 rounded-lg p-2"
              />
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
              placeholder="Enter full address including city and zip code"
              className="w-full border border-blue-200 rounded-lg p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Special Instructions
            </label>
            <textarea
            value={formData.instructions}
            onChange={handleChange}
              placeholder="Any special requests or instructions for our team"
              className="w-full border h-24 border-blue-200 rounded-lg p-2"
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-blue-900 w-full py-2 text-amber-50 rounded-sm"
            >
              Book Service
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default page;
