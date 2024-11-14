import { request } from "../../config/request";
import { useQuery } from "@tanstack/react-query";

export const useGetProducts = () => {
    return useQuery({
        queryKey: ["product"],
        queryFn: () => request.get("/books").then((res) => res.data)
    })
}