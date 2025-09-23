import { useEffect, useState } from "react";
import axios from "axios";

export default function AppointmentList() {
  const [appointments, setAppointments] = useState([]);

  const load = async () => {
    const res = await axios.get("http://localhost:5000/api/appointments");
    setAppointments(res.data);
  };

  const remove = async id => {
    await axios.delete(`http://localhost:5000/api/appointments/${id}`);
    load();
  };

  useEffect(() => { load(); }, []);

  return (
    <div>
      <h2>Appointments</h2>
      <ul>
        {appointments.map(a => (
          <li key={a.id}>
            {a.name} - {a.email} - {new Date(a.date_time).toLocaleString()}
            <button onClick={() => remove(a.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
