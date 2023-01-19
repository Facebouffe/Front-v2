import React, {useState} from 'react';
import Button from "@mui/material/Button";
import {Restaurants} from "../src/data/filter-data";
import {Box} from "@mui/material";
import Router from "next/router";

const Comment = () => {
    function handleClickMenu(id: any) {
        Router.push(`/Restaurants/${id}`).then(r => true)
    }
    const [selectedRestaurantId, setSelectedRestaurantId] = useState(null);
    const [selectedComment, setSelectedComment] = useState('');
    const [selectedImg,setSelectedImg]=useState('')

    const handleButtonClick = (restaurantId:any) => {
        setSelectedRestaurantId(restaurantId);
        const selectedRestaurant = Restaurants.find(r => r.id === restaurantId);
        // @ts-ignore
        setSelectedComment(selectedRestaurant.comment)
            // @ts-ignore
        setSelectedImg(selectedRestaurant.image)
    }
    return (
        <Box>

        <Box>
            {selectedComment && <Box>Commentaire sélectionné: {selectedComment}</Box>}
            {selectedImg && <Box >{selectedImg} </Box>}
        </Box>
</Box>


    );
};

export default Comment;