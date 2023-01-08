import {GiHearts, GiFrenchFries,GiHamburger,GiFullPizza, GiSushis, GiDonerKebab, GiChickenLeg, GiSteak, GiCurledLeaf} from "react-icons/Gi"

export const filterData = [
    { id: 1, label: 'Friterie', icon: <GiFrenchFries size={24}/>},
    { id: 2, label: 'Hamburger', icon: <GiHamburger size={24}/>},
    { id: 3, label: 'Pizza', icon: <GiFullPizza size={24}/>},
    { id: 4, label: 'Sushi', icon: <GiSushis size={24}/>},
    { id: 5, label: 'Kebab', icon: <GiDonerKebab size={24}/>},
    { id: 6, label: 'Poulet', icon: <GiChickenLeg size={24}/>},
    { id: 7, label: 'Steak', icon: <GiSteak size={24}/>},
    { id: 8, label: 'Végétarien', icon: <GiCurledLeaf size={24}/>},
    { id: 9, label: 'Favoris', icon: <GiHearts size={24}/>},
];

const randomRating = () => Math.random() * 5;

export const Restaurants = [
    {
        id: 1,
        name: "Chez Marie",
        rating: randomRating(),
        address: "123 Rue de la Paix, Paris, France",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        id: 2,
        name: "Le Bistrot",
        rating: randomRating(),
        address: "456 Avenue du Général de Gaulle, Lyon, France",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
    },
    {
        id: 3,
        name: "La Trattoria",
        rating: randomRating(),
        address: "789 Via Roma, Rome, Italie",
        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        id: 4,
        name: "Chez Marie",
        rating: randomRating(),
        address: "123 Rue de la Paix, Paris, France",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        id: 5,
        name: "Le Bistrot",
        rating: randomRating(),
        address: "456 Avenue du Général de Gaulle, Lyon, France",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
    },
    {
        id: 6,
        name: "La Trattoria",
        rating: randomRating(),
        address: "789 Via Roma, Rome, Italie",
        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        id: 7,
        name: "Chez Marie",
        rating: randomRating(),
        address: "123 Rue de la Paix, Paris, France",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        id: 8,
        name: "Le Bistrot",
        rating: randomRating(),
        address: "456 Avenue du Général de Gaulle, Lyon, France",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
    },
    {
        id: 9,
        name: "La Trattoria",
        rating: randomRating(),
        address: "789 Via Roma, Rome, Italie",
        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
]