import getData from "../get";

const getBooks = async () => {
  try {
    const res = await getData({});

    return res;
  } catch (error) {
    throw new Error("Error while getting books!");
  }
};

export default getBooks;
