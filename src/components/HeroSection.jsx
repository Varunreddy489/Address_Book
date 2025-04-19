"use client"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection({ onScrollDown }) {
  return (
    <section className="h-screen flex flex-col justify-center items-center relative px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Manage Your Contacts <span className="text-primary">Effortlessly</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Keep all your contacts organized, searchable, and accessible from anywhere. The smart address book for
          professionals and teams.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg"><a onClick={onScrollDown}>Get Started</a></Button>
          <Button variant="outline" size="lg">
          <a onClick={onScrollDown}>Learn More</a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <button
          onClick={onScrollDown}
          className="flex flex-col items-center text-gray-500 hover:text-primary transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="h-6 w-6" />
        </button>
      </div>

      <div className="absolute -z-10 inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-purple-50 opacity-50"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full filter blur-3xl"></div>
      </div>
    </section>
  )
}
