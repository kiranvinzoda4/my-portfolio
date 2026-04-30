interface SectionHeaderProps {
  label: string;
  title: string;
}

export default function SectionHeader({ label, title }: SectionHeaderProps) {
  return (
    <div className="mb-16 text-center">
      <span className="mb-3 inline-block rounded-full bg-accent-bg px-4 py-1.5 text-xs font-semibold tracking-wider text-accent uppercase">
        {label}
      </span>
      <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h3>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-gradient-start to-gradient-end" />
    </div>
  );
}
