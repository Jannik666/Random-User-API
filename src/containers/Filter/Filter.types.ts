import { UserParam } from "../../api/User.types";

export interface FilterProps {
  filterValues: UserParam;
  onChangeGender: (gender: string) => void;
  onChangePage: (page: number) => void;
  onChangeResults: (results: number) => void;
  onChangeNat: (nat: string) => void;
}
