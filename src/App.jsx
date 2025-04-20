import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddressBookLanding from "./components/AddressBookLanding";
import SignUp from "./components/SignUp";

export default function Page() {
    return (
        <>
            <Navbar />
            <div className="pt-16">
                <Routes>
                    <Route path="/" element={<AddressBookLanding />} />
                    <Route path="/sign-up" element={<SignUp />} />
                </Routes>
            </div>
        </>
    );
}
