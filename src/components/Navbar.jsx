import { Book } from "lucide-react"
import { Button } from "@/components/ui/button"
import NavLink from "./NavLink"
import { Link  } from "react-router-dom"

export default function Navbar({ scrolled }) {
  const scrollToLogin = () => {
    document.getElementById("login-section")?.scrollIntoView({ behavior: "smooth" })
  }
  const scrollToMain = () => {
    document.getElementById("main")?.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Book className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl"><a onClick={scrollToMain}>AddressBook</a></span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <NavLink click={scrollToLogin}>Features</NavLink>
          <NavLink click={scrollToLogin}>About</NavLink>
          <NavLink click={scrollToLogin}>Contact</NavLink>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm">
          <Link to="/sign-up" >Sign Up</Link>
          </Button>
          <Button asChild size="sm"><a onClick={scrollToLogin}>Login</a></Button>
        </div>
      </div>
    </nav>
  )
}
