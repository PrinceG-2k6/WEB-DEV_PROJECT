import AppointmentForm from "./components/AppointmentForm";
import AppointmentList from "./components/AppointmentList";

export default function App() {
  return (
    <div style={{ maxWidth: 600, margin: "auto" }}>
      <h1>Appointment Scheduler</h1>
      <AppointmentForm onAdded={() => window.location.reload()} />
      <AppointmentList />
    </div>
  );
}
