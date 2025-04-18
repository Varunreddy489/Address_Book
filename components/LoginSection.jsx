import React from "react"
import { Users, Search, Settings } from "lucide-react"
import FeatureItem from "./FeatureItem"
import LoginForm from "./LoginForm"

const LoginSection = React.forwardRef(({ isVisible }, ref) => {
  return (
    <section id="login-section" ref={ref} className="min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2  bg-[#0C0404] p-8 md:p-16 flex flex-col justify-center">
        <div
          className={`transition-all duration-700 transform ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Welcome Back to Your Address Book</h2>
          <p className="text-white/90 text-lg mb-8 max-w-md">
            Log in to access your contacts, manage your address book, and stay connected with the people who matter
            most.
          </p>

          <div className="space-y-6 max-w-md">
            <FeatureItem icon={<Users className="h-5 w-5 text-white" />} text="Manage Multiple Adress Books." />
            <FeatureItem
              icon={<Search className="h-5 w-5 text-white" />}
              text="Powerful search across all contact details."
            />
            <FeatureItem
              icon={<Settings className="h-5 w-5 text-white" />}
              text="Customize search through any field."
            />
          </div>
        </div>

      </div>

      <div className="w-full md:w-1/2 bg-white p-8 md:p-16 flex items-center justify-center">
        <div
          className={`w-full max-w-md transition-all duration-700 transform ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
          }`}
        >
          <LoginForm />
        </div>
      </div>
    </section>
  )
})

LoginSection.displayName = "LoginSection"

export default LoginSection
