import { useCallback, useEffect, useState } from "react";
import getBooks from "../../../services/requests/getBooks";
import searchBooks from "../../../services/requests/search";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = useCallback(async () => {
    const res = await getBooks();

    setData(res?.products);
  }, []);

  const fetchBooks = (search: string) => {
    setTimeout(async () => {
      const res = await searchBooks(search);

      setData(res?.products);
    }, 1000);
  };

  useEffect(() => {
    if (search) fetchBooks(search);
  }, [search]);

  useEffect(() => {
    if (!search) fetchData();
  }, [search]);

  return (
    <div className="flex flex-col">
      Dashboard
      <input
        placeholder="Search..."
        className="border w-40 p-1 border-gray-400 rounded-sm"
        onChange={(e) => setSearch(e?.target?.value)}
      />
      <div className="grid grid-cols-5">
        {data?.map((data: any, id) => (
          <div
            key={id}
            className="border border-gray-500 m-3 p-3 rounded-sm space-y-2 justify-between flex flex-col"
          >
            <div>
              <h4 className="font-black">{data?.title}</h4>
              <h6>{data?.description}</h6>
            </div>

            <button className="bg-black text-white rounded-sm px-2 py-1 w-1/3">
              Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
