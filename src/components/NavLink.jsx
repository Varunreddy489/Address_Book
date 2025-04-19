export default function NavLink({ click, children }) {
    return (
      <a onClick={click} className="text-gray-600 hover:text-primary transition-colors">
        {children}
      </a>
    )
  }
  