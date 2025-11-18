import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminForm from "./components/AdminForm";
import DoctorForm from "./components/DoctorForm";
import Appointment  from "./pages/Appointment";
import NotFound from "./components/NotFound";
import Doctor from "./components/Doctor";

const App = () => {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="doctors/:id" element={<Doctor />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="appointments/:id" element={<Appointment />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/admin" element={<AdminForm />} />
        <Route path="/doctor" element={<DoctorForm />} />
      </Route>
    )
  )

  return (
    <div className="w-[80%] m-auto mt-[10px] overflow-hidden">
      <RouterProvider router={router} />
    </div>
  )
}

export default App