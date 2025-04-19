"use client"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import Navbar from "./Navbar"
import HeroSection from "./HeroSection"
import LoginSection from "./LoginSection"

export default function AddressBookLanding() {
  const [scrolled, setScrolled] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.1,
  })

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToLogin = () => {
    document.getElementById("login-section")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div id="main" className="min-h-screen">
      <Navbar scrolled={scrolled}/>
      <HeroSection onScrollDown={scrollToLogin} />
      <LoginSection ref={ref} isVisible={inView} />
    </div>
  )
}
