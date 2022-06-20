import axios from "axios";

export const actionLogin = (body) => {
  return axios.post("http://challenge-react.alkemy.org", body);
};
