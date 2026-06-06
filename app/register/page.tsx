"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
  full_name: "",
  date_of_birth: "",
  age: "",
  position: "",
  parent_name: "",
  phone: "",
  address: "",
  email: "",
  nationality: "",
});

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    const { error } = await supabase
  .from("registrations")
  .insert([
    {
      full_name: formData.full_name,
      date_of_birth: formData.date_of_birth,
      age: Number(formData.age),
      position: formData.position,
      parent_name: formData.parent_name,
      phone: formData.phone,
      address: formData.address,
      email: formData.email,
      nationality: formData.nationality,
    },
  ]);

    if (error) {
      setMessage("Registration failed.");
      console.error(error);
    } else {
      setMessage("Registration successful!");
      setFormData({
        full_name: "",
        date_of_birth: "",
        age: "",
        position: "",
        parent_name: "",
        phone: "",
        address: "",
        email: "",
        nationality: "",
      });
    }

    setLoading(false);
  }

  return (
    <div className="max-w-2xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-8">
        Player Registration
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          placeholder="Player Name"
          value={formData.full_name}
          onChange={(e) =>
            setFormData({ ...formData, full_name: e.target.value })
          }
          className="w-full border p-3 rounded"
          required
        />

        <input
          type="date"
          value={formData.date_of_birth}
          onChange={(e) =>
            setFormData({ ...formData, date_of_birth: e.target.value })
          }
          className="w-full border p-3 rounded"
           required
        />

        <input
          type="number"
          placeholder="Age"
          value={formData.age}
          onChange={(e) =>
            setFormData({ ...formData, age: e.target.value })
          }
          className="w-full border p-3 rounded"
          required
        />

        <input
          type="text"
          placeholder="Playing Position"
          value={formData.position}
          onChange={(e) =>
            setFormData({ ...formData, position: e.target.value })
          }
          className="w-full border p-3 rounded"
          required
        />

        <input
          type="text"
          placeholder="Parent Name"
          value={formData.parent_name}
          onChange={(e) =>
            setFormData({ ...formData, parent_name: e.target.value })
          }
          className="w-full border p-3 rounded"
          required
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) =>
            setFormData({ ...formData, phone: e.target.value })
          }
          className="w-full border p-3 rounded"
          required
        />

        <input
          type="text"
          placeholder="Address"
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
          className="w-full border p-3 rounded"
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          className="w-full border p-3 rounded"
          required
        />

        <input
          type="text"
          placeholder="Nationality"
          value={formData.nationality}
          onChange={(e) =>
            setFormData({ ...formData, nationality: e.target.value })
          }
          className="w-full border p-3 rounded"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-3 rounded"
        >
          {loading ? "Submitting..." : "Register"}
        </button>

      </form>

      {message && (
        <p className="mt-4 font-medium">
          {message}
        </p>
      )}
    </div>
  );
}