import axios from "axios";

export const getUsers = async ({ page, gender, results, nat }) => {
  const { data } = await axios.get(
    `https://randomuser.me/api/?results=${results}&page=${page}&nat=${nat}&gender=${gender}`
  );
  return data.results;
};
