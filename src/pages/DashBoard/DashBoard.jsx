import { Link, Outlet } from "react-router";

function Dashboard() {
    return (
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-4">Admin Dashboard</h1>
        <p className="text-lg">Manage restaurant orders, reservations, and inventory here.</p>
        <Link className="underline" to="contact-us">contact us</Link>
        <Outlet></Outlet>
      </div>
    );
  }
  
  export default Dashboard;