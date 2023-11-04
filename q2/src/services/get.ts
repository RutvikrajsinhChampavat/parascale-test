import axios from "axios";

interface GET_DATA_PROPS {
  endPoint?: string;
  params?: string;
}

const getData = async (props: GET_DATA_PROPS) => {
  const { endPoint = "products/category/laptops", params = "" } = props;

  try {
    const res = await axios.get(
      `https://dummyjson.com/${endPoint}${params && `/?${params}`}`
    );

    return res?.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error("Could not hit API");
  }
};

export default getData;
