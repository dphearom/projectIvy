interface Props {
  label?: string;
  aspect?: string;
  className?: string;
}

const PlaceholderImage = ({
  label = "Image placeholder",
  aspect = "16 / 10",
  className = "",
}: Props) => (
  <div
    className={`ph-block${className ? ` ${className}` : ""}`}
    style={{ aspectRatio: aspect }}
    aria-hidden="true"
  >
    <span>{label}</span>
  </div>
);

export default PlaceholderImage;
