const List = ({ data }) => {
  const { icon, title, disc } = data;
  return (
    <div className="w-full flex gap-4 py-4">
      <div className="min-w-[45px] min-h-[45px] max-h-[45px] text-white bg-indigo-600 grid place-items-center text-2xl rounded-lg mt-1">
        {icon}
      </div>
      <div>
        <h4 className="text-xl font-semibold">{title}</h4>
        <p className="text-gray-700 dark:text-gray-400">{disc}</p>
      </div>
    </div>
  );
};

export default List;
