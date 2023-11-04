import { useEffect, useState } from "react";

const ReservedBook = () => {
  const [book, setBooks] = useState<any>({});

  useEffect(() => {
    const dataJson = localStorage.getItem("reservedBook");

    const data = JSON?.parse(dataJson!);

    setBooks(data);
  }, []);

  const returnBook = () => {
    localStorage.removeItem("reservedBook");
  };

  return (
    <div>
      ReservedBook
      <div className="grid grid-cols-5">
        {book ? (
          <div className="border border-gray-500 m-3 p-3 rounded-sm space-y-2 justify-between flex flex-col">
            <div>
              <h4 className="font-black">{book?.title}</h4>
              <h6>{book?.description}</h6>
            </div>

            <button
              className="bg-black text-white rounded-sm px-2 py-1 w-1/3"
              onClick={returnBook}
            >
              Return
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ReservedBook;
