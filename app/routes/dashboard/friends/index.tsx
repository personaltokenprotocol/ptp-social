export default function Friends() {
  return (
    <div className="grid grid-cols-2 text-center order-last md:order-first p-8 md:mt-0">
      <div>
        <p className="font-bold text-gray-700 text-xl">10</p>
        <p className="text-gray-400">Following</p>
      </div>

      <div>
        <p className="font-bold text-gray-700 text-xl">4</p>
        <p className="text-gray-400">Followers</p>
      </div>
    </div>
  );
}
