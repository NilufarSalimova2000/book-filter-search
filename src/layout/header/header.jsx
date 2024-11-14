import { Container } from "@mui/system";
import React from "react";
import { useGetSearch } from "../../service/query/useGetSearch";
import { useDebounce } from "../../hooks/useDebounce";
import { Stack, TextField } from "@mui/material";

export const Header = () => {
    const [input, setinput] = React.useState("");
    const debounce = useDebounce(input);
    const { data, isLoading } = useGetSearch(debounce)
    return (
        <header>
            <Container>
                <Stack p={"30px"} position={"relative"}>
                    <TextField sx={{ width: '400px', bgcolor: "#fff" }} placeholder="Search" value={input} onChange={(e) => setinput(e.target.value)} />
                    {!isLoading && <Stack boxShadow={"0px 0px 99px -9px rgba(161,137,161,1)"}>
                        {data.map((item) => <Stack direction={"row"} alignItems={"center"} p="20px" border={"1px solid grey"} key={item.id}>
                            <img style={{ width: "150px" }} src={item.image} />
                            <h3>{item.title}</h3>
                        </Stack>)}
                    </Stack>}

                </Stack>
            </Container>
        </header>
    )
}