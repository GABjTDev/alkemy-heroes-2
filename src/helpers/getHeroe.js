import axios from "axios";

const API = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/";

export const getHeroe = async (id) => {
  const res = await axios.get(`${API}/${id}.json`);
  const heroe = await res.data;

  return heroe;
};
