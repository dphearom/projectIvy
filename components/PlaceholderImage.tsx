interface Props {
  /** Filename slug — save the real asset as `public/images/{name}.jpg` */
  name: string;
  aspect?: string;
  className?: string;
}

const PlaceholderImage = ({
  name,
  aspect = "16 / 10",
  className = "",
}: Props) => (
  <div
    className={`ph-block${className ? ` ${className}` : ""}`}
    style={{ aspectRatio: aspect }}
    aria-hidden="true"
    data-placeholder={name}
  >
    <span>{name}</span>
  </div>
);

export default PlaceholderImage;
