import { atom } from "recoil";

export const countryState = atom<string>({
    key: "countryState",
    default: "kr",
});
