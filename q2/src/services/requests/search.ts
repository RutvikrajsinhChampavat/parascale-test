import getData from "../get";

const searchBooks = async (searchParam: string) => {
  try {
    const res = await getData({
      endPoint: "products/search",
      params: `q=${searchParam}`,
    });

    return res;
  } catch (error: any) {
    throw new Error("Something went wrong while searching for books!");
  }
};

export default searchBooks;
