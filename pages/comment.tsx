import React, {useState} from 'react';
import Button from "@mui/material/Button";
import {Restaurants} from "../src/data/filter-data";
import {Box} from "@mui/material";

const Comment = () => {
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
    {Restaurants.map(restaurant => (
        <Box>
        <Button key={restaurant.id} onClick={() => handleButtonClick(restaurant.id)}>
            {restaurant.name}
        </Button>
        </Box>
    ))}
    {selectedComment && <Box>Commentaire sélectionné: {selectedComment}</Box>}
    {selectedImg && <Box >{selectedImg} </Box>}
    {/*{selectedImg && <Box component={"img"} src={selectedImg}sx={{width:100}}> </Box>}*/}
</Box>
    );
};

export default Comment;