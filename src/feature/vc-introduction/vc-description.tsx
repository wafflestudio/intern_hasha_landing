export const VcDescription = ({
  name,
  descriptions,
  alt,
  src,
}: {
  name: string;
  descriptions: string[];
  alt: string;
  src: string;
}) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <img
          src={src}
          alt={alt}
          className="w-20"
        />
        <span className="text-lg font-semibold">{name}</span>
      </div>

      <div className="text-gray flex flex-col gap-1">
        {descriptions.map((description, index) => (
          <span key={`${alt}-desciprion-${index}`}>• {description}</span>
        ))}
      </div>
    </div>
  );
};
