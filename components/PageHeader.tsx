interface Props {
  label?: string;
  title: string;
  subtitle?: string;
}

const PageHeader = ({ label, title, subtitle }: Props) => {
  return (
    <header className="page-header">
      <div className="container">
        {label && <span className="accent-label">{label}</span>}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </header>
  );
};

export default PageHeader;
