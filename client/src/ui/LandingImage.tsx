
export interface LandingImageProps {
    className?: string
    src?: string
    alt?: string
}

export const LandingImage: React.FC<LandingImageProps> = ({ className="", ...props}) => {
  return (
      <div className={`flex flex-col justify-center ${className}`}>
          <img
              className="m-auto object-cover"
              src={props.src}
              alt={props.alt}
              style={{ maxHeight: "500px" }}
          />
      </div>
  );
};