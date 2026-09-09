import React, { useState } from "react";
import api from "../../data/axios/Axios";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  experience: "",
};

export default function AddMechanic({ onAdd }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(form.phone.trim())) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = "Enter a valid email address";
    }

    if (form.experience === "") {
      newErrors.experience = "Experience is required";
    } else if (Number(form.experience) < 0) {
      newErrors.experience = "Experience can't be negative";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const mechanic = {
      id: Date.now(),
      ...form,
      experience: Number(form.experience),
    };

    if (onAdd) onAdd(mechanic);

    setForm(initialForm);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
  };

  const inputClass = (field) =>
    `w-full rounded-lg border px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ${
      errors[field] ? "border-red-500" : "border-gray-300"
    }`;



    const  handlepostmechanic = async () =>
    {
        try{
            const res = await api.post('/mechanic',form);

            console.log(res.data);
        }
        catch(err)
        {
            console.log(err);
        }

    }



  return (
    <div className=" mx-auto w-[500px] mt-20 mb-40 bg-white rounded-xl shadow-md p-6 border border-gray-100">
      <h2 className="text-lg font-semibold text-gray-900 mb-1">
        Add mechanic
      </h2>
      <p className="text-sm text-gray-500 mb-5">
        Enter the mechanic's basic details below.
      </p>

      {submitted && (
        <div className="mb-4 rounded-lg bg-green-50 border border-green-200 px-3 py-2 text-sm text-green-700">
          Mechanic added.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="John Miller"
            className={inputClass("name")}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-600">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="9876543210"
            className={inputClass("phone")}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className={inputClass("email")}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
            Experience (years)
          </label>
          <input
            id="experience"
            name="experience"
            type="number"
            min="0"
            value={form.experience}
            onChange={handleChange}
            placeholder="5"
            className={inputClass("experience")}
          />
          {errors.experience && (
            <p className="mt-1 text-xs text-red-600">{errors.experience}</p>
          )}
        </div>

       

        <button
        onClick={handlepostmechanic}
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-medium py-2.5 rounded-lg transition"
        >
          Add mechanic
        </button>
      </form>
    </div>
  );
}