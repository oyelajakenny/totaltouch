"use client";
import React, { useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";
import toast from "react-hot-toast";
import { ScaleLoader } from "react-spinners";

const SERVICE_DETAIL_CONFIG = {
  "Home Cleaning": {
    name: "homeCleaningRooms",
    label: "Number of rooms",
    placeholder: "Select number of rooms",
    type: "select",
    required: true,
    options: [
      { value: "A Room Self", label: "A Room Self" },
      { value: "Mini Flat", label: "Mini Flat" },
      { value: "2 Bedrooms Flat", label: "2 Bedrooms Flat" },
      { value: "3 Bedrooms Flat", label: "3 Bedrooms Flat" },
      { value: "4+ rooms", label: "4+ rooms" },
      { value: "Duplex", label: "Duplex" },
      { value: "Others", label: "Others" },
    ],
  },
  "Regular Cleaning": {
    name: "regularCleaningFrequency",
    label: "Cleaning frequency",
    placeholder: "Select a frequency",
    type: "select",
    required: true,
    options: [
      { value: "Weekly", label: "Weekly" },
      { value: "Bi-weekly", label: "Bi-weekly" },
      { value: "Monthly", label: "Monthly" },
      { value: "One-time", label: "One-time" },
    ],
  },
  "Office Cleaning": {
    name: "officeCleaningSize",
    label: "Office size",
    placeholder: "Select office size",
    type: "select",
    required: true,
    options: [
      { value: "1-10 workstations", label: "1-10 workstations" },
      { value: "11-25 workstations", label: "11-25 workstations" },
      { value: "26-50 workstations", label: "26-50 workstations" },
      { value: "50+ workstations", label: "50+ workstations" },
    ],
  },
  "Move In/Out Cleaning": {
    name: "moveCleaningPropertySize",
    label: "Property size",
    placeholder: "Select property size",
    type: "select",
    required: true,
    options: [
      { value: "Studio / 1 Bedroom", label: "Studio / 1 Bedroom" },
      { value: "2-3 Bedroom", label: "2-3 Bedroom" },
      { value: "4+ Bedroom", label: "4+ Bedroom" },
      { value: "Duplex", label: "Duplex" },
    ],
  },
  "Laundry Pick Up": {
    name: "laundryLoadSize",
    label: "Laundry load size",
    placeholder: "Select load size",
    type: "select",
    required: true,
    options: [
      { value: "1 bag (up to 7kg)", label: "1 bag (up to 7kg)" },
      { value: "2 bags (8-14kg)", label: "2 bags (8-14kg)" },
      { value: "3+ bags (15kg+)", label: "3+ bags (15kg+)" },
    ],
  },
  "Fumigation Service": {
    name: "fumigationSpaceType",
    label: "Space type",
    placeholder: "Select space type",
    type: "select",
    required: true,
    options: [
      { value: "Residential", label: "Residential" },
      { value: "Commercial", label: "Commercial" },
      { value: "Warehouse", label: "Warehouse" },
    ],
  },
  "Deep Cleaning": {
    name: "deepCleaningFocus",
    label: "Focus area",
    placeholder: "Select focus area",
    type: "select",
    required: true,
    options: [
      { value: "Full property", label: "Full property" },
      { value: "Kitchen & Bathrooms", label: "Kitchen & Bathrooms" },
      { value: "Post-renovation", label: "Post-renovation" },
    ],
  },
};

const SERVICE_DETAIL_KEYS = Object.values(SERVICE_DETAIL_CONFIG).map(
  (config) => config.name
);

const createInitialFormState = () => ({
  fullName: "",
  phone: "",
  email: "",
  serviceType: "",
  preferredDate: "",
  preferredTime: "",
  address: "",
  instructions: "",
  serviceDetails: {},
});

const Page = () => {
  const [formData, setFormData] = useState(createInitialFormState);
  const [error, setError] = useState({});
  const [isBooking, setIsBooking] = useState(false);
  const selectedServiceDetail = SERVICE_DETAIL_CONFIG[formData.serviceType];
  const selectedServiceDetailValue = selectedServiceDetail
    ? formData.serviceDetails?.[selectedServiceDetail.name] || ""
    : "";

  const validate = () => {
    const newErrors = {};
    const trimmedName = formData.fullName.trim();
    const trimmedPhone = formData.phone.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedAddress = formData.address.trim();

    if (!trimmedName) newErrors.fullName = "Full Name is required";
    else if (trimmedName.length <= 3)
      newErrors.fullName = "Full name must be at least 4 characters";
    else if (!/^[A-Za-z\s'-]+$/.test(trimmedName))
      newErrors.fullName = "Please enter a valid name";

    const numericPhone = trimmedPhone.replace(/\D/g, "");
    if (!trimmedPhone) newErrors.phone = "Phone number is required";
    else if (numericPhone.length <= 7)
      newErrors.phone = "Phone number must be at least 8 numbers";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail) newErrors.email = "Email is required";
    else if (!emailRegex.test(trimmedEmail))
      newErrors.email = "Enter a valid Email";

    if (!formData.serviceType || formData.serviceType === "Select a service") {
      newErrors.serviceType = "Please select a service";
    } else if (selectedServiceDetail && selectedServiceDetail.required) {
      const detailValue =
        formData.serviceDetails?.[selectedServiceDetail.name] || "";
      const isDetailEmpty =
        typeof detailValue === "string"
          ? !detailValue.trim()
          : detailValue === undefined || detailValue === null;
      if (isDetailEmpty) {
        newErrors[selectedServiceDetail.name] =
          selectedServiceDetail.errorMessage ||
          `Please ${
            selectedServiceDetail.type === "select" ? "choose" : "provide"
          } ${selectedServiceDetail.label.toLowerCase()}`;
      }
    }

    if (!formData.preferredDate) newErrors.preferredDate = "Pick a date";
    if (!formData.preferredTime) newErrors.preferredTime = "Pick a time";
    if (!trimmedAddress) newErrors.address = "Address is required";

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "serviceType") {
      setFormData((prev) => ({
        ...prev,
        serviceType: value,
      }));
      setError((prev) => {
        const updated = { ...prev };
        if (updated.serviceType) {
          delete updated.serviceType;
        }
        SERVICE_DETAIL_KEYS.forEach((key) => {
          if (updated[key]) {
            delete updated[key];
          }
        });
        return updated;
      });
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
    setError((prev) => {
      if (!prev[name]) return prev;
      const { [name]: _removed, ...rest } = prev;
      return rest;
    });
  };

  const handleServiceDetailChange = (fieldName, value) => {
    setFormData((prev) => ({
      ...prev,
      serviceDetails: {
        ...prev.serviceDetails,
        [fieldName]: value,
      },
    }));
    setError((prev) => {
      if (!prev[fieldName]) return prev;
      const { [fieldName]: _removed, ...rest } = prev;
      return rest;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    const trimmedName = formData.fullName.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedAddress = formData.address.trim();
    const trimmedInstructions = formData.instructions.trim();
    const trimmedPhone = formData.phone.trim();
    const detailLabel = selectedServiceDetail?.label;
    const detailValue =
      typeof selectedServiceDetailValue === "string"
        ? selectedServiceDetailValue.trim()
        : selectedServiceDetailValue;
    const formattedDetail =
      detailLabel && detailValue
        ? `${detailLabel}: ${detailValue}`
        : detailLabel
          ? `${detailLabel}: Not specified`
          : null;

    try {
      setIsBooking(true);

      const composedMessage = [
        `Phone: ${trimmedPhone}`,
        `Address: ${trimmedAddress}`,
        formattedDetail ? `Service Detail: ${formattedDetail}` : null,
        `Special Instructions: ${trimmedInstructions || "None"}`,
      ]
        .filter(Boolean)
        .join("\n");

      const sendResponse = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          service: formData.serviceType,
          date: `${formData.preferredDate} ${formData.preferredTime}`,
          message: composedMessage,
        }),
      });

      const sendJson = await sendResponse.json();
      if (!sendResponse.ok) {
        throw new Error(sendJson.error || "Failed to submit booking");
      }

      try {
        const bookingPayload = {
          name: trimmedName,
          email: trimmedEmail,
          phone: trimmedPhone,
          date: `${formData.preferredDate} ${formData.preferredTime}`,
          service: formData.serviceType,
          serviceDetail: formattedDetail,
          address: trimmedAddress,
          notes: trimmedInstructions || "None",
        };
        const bookingRes = await fetch("/api/booking", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bookingPayload),
        });
        if (!bookingRes.ok) {
          const bookingErr = await bookingRes.json().catch(() => ({}));
          toast.error(bookingErr.error || "Failed to save booking record");
        }
      } catch (bookingError) {
        toast.error(bookingError.message || "Failed to save booking record");
      }

      setFormData(createInitialFormState());
      setError({});
      toast.success(
        "Booking submitted successfully! Please check your email for booking confirmation 🎉.",
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
    } catch (err) {
      toast.error(err.message || "Failed to submit booking. Please try again😓.");
    } finally {
      setIsBooking(false);
    }
  };

  const inputClass =
    "w-full onFocus:border-[#F3F9FF] bg-white border border-gray-300 p-2 rounded";

  return (
    <section className="w-full my-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow">
        <div className="bg-blue-50 py-3 mb-2 rounded shadow">
          <h1 className="text-sm text-center ">
            Fill out the booking form to make a booking and we&apos;ll get back to you with a
            confirmation
          </h1>
        </div>
        <form onSubmit={handleSubmit} method="POST" className="space-y-6">
          <div className="grid grid-cols-1 space-y-6 p-4 border shadow-sm rounded border-gray-100 bg-gray-100">
            <h1 className="font-semibold text-xl">Contact Details</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-600">
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
                <label className="block text-sm font-medium mb-1 text-gray-600">
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
              <label className="block text-sm font-medium mb-1 text-gray-600">
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
          </div>
          <div
            className="  grid
            grid-cols-1
            space-y-6
            p-4
            border
            shadow-sm
            rounded
            border-gray-100
            bg-gray-100"
          >
            <h1 className="font-semibold text-xl">Service Details</h1>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-600">
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
                <option value="">Select a service</option>
                <option value="Home Cleaning">Home Cleaning</option>
                <option value="Regular Cleaning">Regular Cleaning</option>
                <option value="Office Cleaning">Office Cleaning</option>
                <option value="Move In/Out Cleaning">
                  Move In/Out Cleaning
                </option>
                <option value="Laundry Pick Up">Laundry Pick Up</option>
                <option value="Fumigation Service">Fumigation Service</option>
                <option value="Deep Cleaning">Deep Cleaning</option>
              </select>
              {error.serviceType && (
                <p className="text-red-500 text-sm mt-1">{error.serviceType}</p>
              )}
            </div>
            {selectedServiceDetail && (
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-600">
                  {selectedServiceDetail.label}
                  {selectedServiceDetail.required ? " *" : ""}
                </label>
                {selectedServiceDetail.type === "select" ? (
                  <select
                    value={selectedServiceDetailValue}
                    onChange={(event) =>
                      handleServiceDetailChange(
                        selectedServiceDetail.name,
                        event.target.value
                      )
                    }
                    className={`${inputClass} ${
                      error[selectedServiceDetail.name] ? "border-red-500" : ""
                    }`}
                  >
                    <option value="">
                      {selectedServiceDetail.placeholder || "Select an option"}
                    </option>
                    {selectedServiceDetail.options?.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={selectedServiceDetail.type}
                    value={selectedServiceDetailValue}
                    onChange={(event) =>
                      handleServiceDetailChange(
                        selectedServiceDetail.name,
                        event.target.value
                      )
                    }
                    className={`${inputClass} ${
                      error[selectedServiceDetail.name] ? "border-red-500" : ""
                    }`}
                    placeholder={selectedServiceDetail.placeholder}
                  />
                )}
                {selectedServiceDetail.helperText && (
                  <p className="text-xs text-gray-500 mt-1">
                    {selectedServiceDetail.helperText}
                  </p>
                )}
                {error[selectedServiceDetail.name] && (
                  <p className="text-red-500 text-sm mt-1">
                    {error[selectedServiceDetail.name]}
                  </p>
                )}
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-600">
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
                <label className="block text-sm font-medium mb-1 text-gray-600">
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
              <label className="block text-sm font-medium mb-1 text-gray-600">
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
              <label className="block text-sm font-medium mb-1 text-gray-600">
                Special Instructions
              </label>
              <textarea
                value={formData.instructions}
                onChange={handleChange}
                name="instructions"
                placeholder="Tell us about the service request, e.g total number of rooms, clothes quantity etc."
                className={inputClass + " h-24"}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 justify-center bg-blue-50 rounded shadow p-2 w-full">
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
              {isBooking ? (
                <ScaleLoader color="#ffffff" height={25} width={4} />
              ) : (
                "Book Service"
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Page;
