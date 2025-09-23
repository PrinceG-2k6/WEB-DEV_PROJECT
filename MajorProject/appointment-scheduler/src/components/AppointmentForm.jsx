import { useState } from "react";
import axios from "axios";

export default function AppointmentForm({ onAdded }) {
  const [form, setForm] = useState({ name: "", email: "", date_time: "" });

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/appointments", form);
    onAdded();
    setForm({ name: "", email: "", date_time: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input type="datetime-local" name="date_time" value={form.date_time} onChange={handleChange} required />
      <button type="submit">Add Appointment</button>
    </form>
  );
}
