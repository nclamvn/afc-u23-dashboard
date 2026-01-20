interface InfoBoxProps {
  label: string;
  value: string | number;
  subValue?: string;
  icon?: React.ReactNode;
  className?: string;
}

export default function InfoBox({ label, value, subValue, icon, className = '' }: InfoBoxProps) {
  return (
    <div className={`info-box ${className}`}>
      <div className="info-box-label">{label}</div>
      <div className="flex items-center gap-2">
        <span className="info-box-value">{value}</span>
        {subValue && (
          <span className="text-[var(--text-muted)] text-sm">({subValue})</span>
        )}
        {icon && <span>{icon}</span>}
      </div>
    </div>
  );
}
