import { Phone } from "lucide-react";
import React, { useState } from "react";

const page = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    serviceType: "",
    preferredDate:"",
    preferredTime:"",
    address:"",
    instructions:"",
  });
  const [error, setError] = useState({})
const validate =()=>{
const newErrors = {};

}

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
              placeholder="youremail@example.com"
              className="w-full p-2 border border-blue-200 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Service Type *
            </label>
            <select className="w-full p-2 border border-blue-200 rounded-lg">
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
              placeholder="Enter full address including city and zip code"
              className="w-full border border-blue-200 rounded-lg p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Special Instructions
            </label>
            <textarea
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
