import React, {useState} from 'react';
import Button from "@mui/material/Button";
import {Restaurants} from "../src/data/filter-data";
import {Box} from "@mui/material";

const Comment = () => {
    const [selectedRestaurantId, setSelectedRestaurantId] = useState(null);
    const [selectedComment, setSelectedComment] = useState('');
    const handleButtonClick = (restaurantId:any) => {
        setSelectedRestaurantId(restaurantId);
        const selectedRestaurant = Restaurants.find(r => r.id === restaurantId);
        // @ts-ignore
        setSelectedComment(selectedRestaurant.comment);
    }
    return (
        <Box>
    {Restaurants.map(restaurant => (
        <Button key={restaurant.id} onClick={() => handleButtonClick(restaurant.id)}>
            {restaurant.name}
        </Button>
    ))}
    {selectedComment && <p>Commentaire sélectionné: {selectedComment}</p>}
</Box>
    );
};

export default Comment;