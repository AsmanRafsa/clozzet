export default function FeaturedCategory({ image, name, description,paragraph}) {
  return (
    <div className="flex flex-row h-[100%] w-[100%]">
      <div className="flex flex-row justify-end items-end w-[100%]">
        <div className="flex flex-col justify-end items-center">
        <p className="">{name}</p>
        <h4>{paragraph}</h4>
        <h3>{description}</h3>
        </div>
        <img src={image} className="h-[100%] w-[100%] object-contain p-3" />
      </div>
     </div>
  );
}
 