export default function TopCategory({ icon, category }) {
  return (
    <div>
      <div>
        <div className="rounded-full bg-[#F0EFEF]">
          <img src={icon} className="w-40 p-3" />
        </div>
        <h4>{category}</h4>
      </div>
    </div>
  );
}
