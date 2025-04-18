export default function FeatureItem({ icon, text }) {
    return (
      <div className="flex items-start gap-3">
        <div className="bg-white/20 p-2 rounded-lg">{icon}</div>
        <p className="text-white mt-1">{text}</p>
      </div>
    )
  }
  