import axios from "axios";
import { useEffect, useState } from "react"

export const useFetchHook = (fetchURL) => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(fetchURL);
            console.log(`useFetchHook:`, response);
            const { data } = response;
            setData(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return data;
}