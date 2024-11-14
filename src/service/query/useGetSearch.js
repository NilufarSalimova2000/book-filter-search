import { request } from "../../config/request";
import { useQuery } from "@tanstack/react-query";

export const useGetSearch = (input = "") => {
    return (
        useQuery({
            queryKey: ["search", input],
            queryFn: () => request.get("/books", {
                params: {
                    title_like: input ? input : "00000"
                }
            }).then((res) => res.data)
        })
    )
}