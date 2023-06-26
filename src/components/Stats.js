export default function Stats({ items }) {
  const statCount = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / statCount) * 100);
  const checkNumber = isNaN(percentage) ? "0" : percentage;

  return (
    <div className="w-full md:w-1/4 bg-white bg-opacity-20 rounded-xl p-6">
      <h2 className="text-3xl text-white font-bold">{statCount}</h2>
      <p className="text-white">Items added on your list</p>
      <hr className="my-3 text-white" />
      <h2 className="text-3xl text-white font-bold">{checkNumber}%</h2>
      <p className="text-white font-bold">Completed</p>
      <div className="w-full rounded-full h-4 bg-white mt-3">
        <div
          className="h-full rounded-full bg-orange-500"
          style={{ width: checkNumber + "%" }}
        ></div>
      </div>
    </div>
  );
}
