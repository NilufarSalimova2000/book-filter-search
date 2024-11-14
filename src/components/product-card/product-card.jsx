import { Box, Rating, Stack, Typography } from "@mui/material";
import React from "react";

export const ProductCard = ({ id, title, authors, genre, publication_year, rating, image }) => {
    return (
        <Box width={"360px"} height={"100%"} p={"10px"} borderRadius={"20px"} boxShadow={"0px -1px 8px 6px rgba(34, 60, 80, 0.2)"}>
            <Stack alignItems={"center"} justifyContent={"center"}>
                <img style={{ objectFit: "cover", borderRadius: "10px" }} width={"100%"}  src={image} alt="image" />
            </Stack>
            <Typography mb={"5px"} textAlign={"center"} variant="h5">{title}</Typography>
            <Typography mb={"5px"}>{authors}</Typography>
            <Typography mb={"5px"}>Genre: {genre}</Typography>
            <Typography>{publication_year}</Typography>
            <Rating rating={rating} />
        </Box>
    )
}