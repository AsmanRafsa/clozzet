export default function FeaturedCollection({ image, name, description,paragraph}) {
  return (
    <div className="flex flex-row">
      <div className="flex flex-row justify-between items-end">
        <div className="flex flex-col justify-end items-center">
        <p className="">{name}</p>
        <h3>{description}</h3>
        <h4>{paragraph}</h4>
        </div>
        <img src={image} className="w-40 p-3" />
      </div>
    </div>
  );
}
