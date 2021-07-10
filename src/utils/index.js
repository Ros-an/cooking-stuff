import axios from "axios";

export const getUserInfo = (token) => {
  return axios.post(
    `${process.env.REACT_APP_API}/create_or_updateuser`,
    {},
    {
      headers: {
        token,
      },
    }
  );
};
