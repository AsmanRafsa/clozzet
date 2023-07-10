export default function TopCategory({ icon, category }) {
  return (  
    <div>
      <div className="my-[20px]">
        <div className="rounded-full bg-[#F0EFEF] w-[100px]">
          <img src={icon} className="w-40 p-3" />
        </div>
        <h4 className="text-center text-2xl">{category}</h4>
      </div>
    </div>
  );
}
