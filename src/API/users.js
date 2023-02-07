import axios from "axios";

export const login = async (values) => {
  const res = await axios.post("https://fakestoreapi.com/auth/login", {
    username: "mor_2314",
    password: "83r5^_",
  });

  const responseData = res.data;
  return responseData;
};
