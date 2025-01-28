import { selector } from "recoil";
import { countryState } from "../atoms/countryState";
import { searchState } from "../atoms/searchState";
import axios from "axios";

const API_URL = import.meta.env.VITE_NEWS_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const newsDataSelector = selector({
    key: "newsDataSelector",
    get: async ({ get }) => {
        const country = get(countryState);
        const search = get(searchState);

        try {
            const res = await axios.get(
                `${API_URL}/api/1/latest?apikey=${API_KEY}&image=1&country=${country}${
                    search.length ? `&q=${search}` : ""
                }`
            );

            return res.data;
        } catch (error) {
            console.log(error);
        }
    },
});
