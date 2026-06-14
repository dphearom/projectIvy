interface Props {
  label?: string;
  title: string;
  subtitle?: string;
}

const PageHeader = ({ label, title, subtitle }: Props) => {
  return (
    <div className="page-header">
      <div className="hero-bg">
        <span className="blob b1" />
        <span className="blob b2" />
        <span className="blob b3" />
      </div>
      <div className="grain" />
      <div className="page-header-inner">
        {label && <span className="eyebrow gold center">{label}</span>}
        <h1 data-reveal>{title}</h1>
        {subtitle && <p data-reveal data-reveal-d="1">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageHeader;
