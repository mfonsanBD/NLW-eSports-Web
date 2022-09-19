interface AdInfoProps {
  label: string
  value: string
  color?: 'text-zinc-200' | 'text-green-400' | 'text-red-400'
}

export function AdInfo({label, value, color = 'text-zinc-200'}: AdInfoProps) {
  return (
    <div className="w-full mb-4">
      <h3 className="text-zinc-500">{label}</h3>
      <span className={`${color} font-semibold`}>{value}</span>
    </div>
  );
}