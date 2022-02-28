import axios from "axios";

import { UserParam, UserResponse } from "./User.types";

export const getUsers = async ({ page, gender, results, nat }: UserParam) => {
  const { data } = await axios.get<UserResponse>(
    `https://randomuser.me/api/?results=${results}&page=${page}&nat=${nat}&gender=${gender}`
  );
  return data.results;
};
