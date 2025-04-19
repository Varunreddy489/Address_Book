import { Route, Routes } from "react-router-dom";
import AddressBookLanding from "./components/AddressBookLanding";

export default function Page() {
  return (
    <Routes>
      <Route path="/" element={<AddressBookLanding />} />
      {/* <Route path="/register" element={< Register/>} /> */}
    </Routes>
  );
}
