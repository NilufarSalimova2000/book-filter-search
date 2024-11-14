import { Box, Checkbox, Container, FormControlLabel, FormGroup, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useGetProducts } from "../../service/query/useGetProducts";
import { ProductCard } from "../../components/product-card";

export const Home = () => {
    const { data, isLoading } = useGetProducts();
    const [selectedGenres, setSelectedGenres] = React.useState([]);
    const handleGenreChange = (event) => {
        const genre = event.target.name;
        setSelectedGenres((prevSelected) =>
            prevSelected.includes(genre)
                ? prevSelected.filter((g) => g !== genre)
                : [...prevSelected, genre]
        );
    };
    const filteredData = selectedGenres.length === 0
        ? data
        : data?.filter((item) => selectedGenres.includes(item.genre));

    return (
        <main style={{ paddingTop: "140px" }}>
            <Stack direction={"row"} >
                <Box borderRight={"2px solid pink"}  width={"300px"} height={"auto"} p={"20px"}>
                    <Box position={"fixed"}>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox onChange={handleGenreChange} name="Finance" />}
                                label="Finance"
                            />
                            <FormControlLabel
                                control={<Checkbox onChange={handleGenreChange} name="Engineering" />}
                                label="Engineering"
                            />
                            <FormControlLabel
                                control={<Checkbox onChange={handleGenreChange} name="DIY" />}
                                label="DIY"
                            />
                            <FormControlLabel
                                control={<Checkbox onChange={handleGenreChange} name="Music Industry" />}
                                label="Music Industry"
                            />
                            <FormControlLabel
                                control={<Checkbox onChange={handleGenreChange} name="Programming" />}
                                label="Programming"
                            />
                            <FormControlLabel
                                control={<Checkbox onChange={handleGenreChange} name="Mathematics" />}
                                label="Mathematics"
                            />
                            <FormControlLabel
                                control={<Checkbox onChange={handleGenreChange} name="Technology" />}
                                label="Technology"
                            />
                        </FormGroup>
                    </Box>
                </Box>
                <Box py={"50px"}>
                    <Container>
                        <Stack justifyContent={"center"} direction={"row"} flexWrap={"wrap"} gap={"20px"}>
                            {isLoading ?
                                (<Typography>Loading...</Typography>) : (
                                    filteredData.map((item) => (
                                        <Stack direction={"row"} key={item.id} >
                                            <ProductCard {...item} />
                                        </Stack>
                                    ))
                                )}
                       </Stack>
                    </Container>
                </Box>
            </Stack>
        </main>
    )
}