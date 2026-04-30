interface FooterProps {
  name: string;
}

export default function Footer({ name }: FooterProps) {
  return (
    <footer className="relative border-t border-card-border px-6 py-10 text-center">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <p className="text-sm text-muted">
        &copy; {new Date().getFullYear()} {name}. Built with Next.js &
        Tailwind CSS.
      </p>
    </footer>
  );
}
