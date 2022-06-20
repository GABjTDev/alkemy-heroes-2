import axios from "axios";

export const actiongetAllCharacters = () => {
  return axios.get(
    "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json"
  );
};
