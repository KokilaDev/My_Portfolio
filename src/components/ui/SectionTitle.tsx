interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-[var(--text)]">{title}</h2>
      {subtitle && <p className="mt-3 text-[var(--muted)]">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;