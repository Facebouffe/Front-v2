import {GiHearts, GiFrenchFries,GiHamburger,GiFullPizza, GiSushis, GiDonerKebab, GiChickenLeg, GiSteak, GiCurledLeaf} from "react-icons/gi"

export const filterData = [
    { id: 1, label: 'FRITERIE', icon: <GiFrenchFries size={24}/>},
    { id: 2, label: 'HAMBURGER', icon: <GiHamburger size={24}/>},
    { id: 3, label: 'PIZZA', icon: <GiFullPizza size={24}/>},
    { id: 4, label: 'SUCHI', icon: <GiSushis size={24}/>},
    { id: 5, label: 'KEBAB', icon: <GiDonerKebab size={24}/>},
    { id: 6, label: 'POULET', icon: <GiChickenLeg size={24}/>},
    { id: 7, label: 'STEAK', icon: <GiSteak size={24}/>},
    { id: 8, label: 'VEGETARIEN', icon: <GiCurledLeaf size={24}/>},
    { id: 9, label: 'FAVORIS', icon: <GiHearts size={24}/>},
];

const randomRating = () => Math.random() * 5;

export const Restaurants = [
    {
        id: 1,
        name: "Chez Marie",
        rating: randomRating(),
        address: "123 Rue de la Paix, Paris, France",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        menu: [
            {
                "plat": "Coq au vin",
                "type": "Plat",
                "prix": 15,
                "description": "Un plat traditionnel français à base de poulet cuit lentement dans du vin rouge et de légumes."
            },
            {
                "plat": "Croque-monsieur",
                "type": "Sandwich",
                "prix": 12,
                "description": "Un sandwich au jambon et au fromage grillé."
            },
            {
                "plat": "Tarte tatin",
                "type": "Dessert",
                "prix": 10,
                "description": "Un dessert à base de pommes caramélisées et de pâte feuilletée."
            },
            {
                "plat": "Coq au vin",
                "type": "Plat",
                "prix": 15,
                "description": "Un plat traditionnel français à base de poulet cuit lentement dans du vin rouge et de légumes."
            },
            {
                "plat": "Croque-monsieur",
                "type": "Sandwich",
                "prix": 12,
                "description": "Un sandwich au jambon et au fromage grillé."
            },
            {
                "plat": "Tarte tatin",
                "type": "Dessert",
                "prix": 10,
                "description": "Un dessert à base de pommes caramélisées et de pâte feuilletée."
            },
            {
                "plat": "Coq au vin",
                "type": "Plat",
                "prix": 15,
                "description": "Un plat traditionnel français à base de poulet cuit lentement dans du vin rouge et de légumes."
            },
            {
                "plat": "Croque-monsieur",
                "type": "Sandwich",
                "prix": 12,
                "description": "Un sandwich au jambon et au fromage grillé."
            },
            {
                "plat": "Tarte tatin",
                "type": "Dessert",
                "prix": 10,
                "description": "Un dessert à base de pommes caramélisées et de pâte feuilletée."
            },
            {
                "plat": "Coq au vin",
                "type": "Plat",
                "prix": 15,
                "description": "Un plat traditionnel français à base de poulet cuit lentement dans du vin rouge et de légumes."
            },
            {
                "plat": "Croque-monsieur",
                "type": "Sandwich",
                "prix": 12,
                "description": "Un sandwich au jambon et au fromage grillé."
            },
            {
                "plat": "Tarte tatin",
                "type": "Dessert",
                "prix": 10,
                "description": "Un dessert à base de pommes caramélisées et de pâte feuilletée."
            },
        ]
    },
    {
        id: 2,
        name: "Le Bistrot",
        rating: randomRating(),
        address: "456 Avenue du Général de Gaulle, Lyon, France",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
        menu: [
            {
                "plat": "Quiche Lorraine",
                "type": "Plat",
                "prix": 14,
                "description": "Une quiche aux lardons et à la crème fraîche."
            },
            {
                "plat": "Escargots",
                "type": "Entrée",
                "prix": 16,
                "description": "Des escargots cuits à la bourguignonne."
            },
            {
                "plat": "Profiteroles",
                "type": "Dessert",
                "prix": 12,
                "description": "Des boules de glace recouvertes de chocolat fondu et accompagnées de choux à la crème."
            },
            {
                "plat": "Coq au vin",
                "type": "Plat",
                "prix": 15,
                "description": "Un plat traditionnel français à base de poulet cuit lentement dans du vin rouge et de légumes."
            },
            {
                "plat": "Croque-monsieur",
                "type": "Sandwich",
                "prix": 12,
                "description": "Un sandwich au jambon et au fromage grillé."
            },
            {
                "plat": "Tarte tatin",
                "type": "Dessert",
                "prix": 10,
                "description": "Un dessert à base de pommes caramélisées et de pâte feuilletée."
            },
            {
                "plat": "Coq au vin",
                "type": "Plat",
                "prix": 15,
                "description": "Un plat traditionnel français à base de poulet cuit lentement dans du vin rouge et de légumes."
            },
            {
                "plat": "Croque-monsieur",
                "type": "Sandwich",
                "prix": 12,
                "description": "Un sandwich au jambon et au fromage grillé."
            },
            {
                "plat": "Tarte tatin",
                "type": "Dessert",
                "prix": 10,
                "description": "Un dessert à base de pommes caramélisées et de pâte feuilletée."
            },
        ]
    },
    {
        id: 3,
        name: "La Trattoria",
        rating: randomRating(),
        address: "789 Via Roma, Rome, Italie",
        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        menu: [
            {
                "plat": "Carbonara",
                "type": "Plat",
                "prix": 16,
                "description": "Un plat de pâtes à la carbonara, une sauce à base de jaunes d'œufs, de lardons et de parmesan."
            },
            {
                "plat": "Saltimbocca alla Romana",
                "type": "Plat",
                "prix": 18,
                "description": "Des escalopes de veau farcies de jambon et de feuilles de sauge, cuites au vin blanc."
            },
            {
                "plat": "Tiramisù ",
                "type": "Dessert",
                "prix": 14,
                "description": "Un dessert à base de biscuits imbibés de café, de crème mascarpone et de cacao."
            },
            {
                "plat": "Coq au vin",
                "type": "Plat",
                "prix": 15,
                "description": "Un plat traditionnel français à base de poulet cuit lentement dans du vin rouge et de légumes."
            },
            {
                "plat": "Croque-monsieur",
                "type": "Sandwich",
                "prix": 12,
                "description": "Un sandwich au jambon et au fromage grillé."
            },
            {
                "plat": "Tarte tatin",
                "type": "Dessert",
                "prix": 10,
                "description": "Un dessert à base de pommes caramélisées et de pâte feuilletée."
            },
            {
                "plat": "Coq au vin",
                "type": "Plat",
                "prix": 15,
                "description": "Un plat traditionnel français à base de poulet cuit lentement dans du vin rouge et de légumes FSDFSDF SFSDFSD FSDFEERES SDFSDFRGDG ZEEZ REFSGER TER."
            },
            {
                "plat": "Croque-monsieur",
                "type": "Sandwich",
                "prix": 12,
                "description": "Un sandwich au jambon et au fromage grillé."
            },
            {
                "plat": "Tarte tatin",
                "type": "Dessert",
                "prix": 10,
                "description": "Un dessert à base de pommes caramélisées et de pâte feuilletée."
            },
            {
                "plat": "Coq au vin",
                "type": "Plat",
                "prix": 15,
                "description": "Un plat traditionnel français à base de poulet cuit lentement dans du vin rouge et de légumes."
            },
            {
                "plat": "Croque-monsieur",
                "type": "Sandwich",
                "prix": 12,
                "description": "Un sandwich au jambon et au fromage grillé."
            },
            {
                "plat": "Tarte tatin",
                "type": "Dessert",
                "prix": 10,
                "description": "Un dessert à base de pommes caramélisées et de pâte feuilletée."
            },
            {
                "plat": "Coq au vin",
                "type": "Plat",
                "prix": 15,
                "description": "Un plat traditionnel français à base de poulet cuit lentement dans du vin rouge et de légumes."
            },
            {
                "plat": "Croque-monsieur",
                "type": "Sandwich",
                "prix": 12,
                "description": "Un sandwich au jambon et au fromage grillé."
            },
            {
                "plat": "Tarte tatin",
                "type": "Dessert",
                "prix": 10,
                "description": "Un dessert à base de pommes caramélisées et de pâte feuilletée."
            },
        ]
    },
    {
        id: 4,
        name: "Chez Marie",
        rating: randomRating(),
        address: "123 Rue de la Paix, Paris, France",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        menu: [
            {
                "plat": "Coq au vin",
                "type": "Plat",
                "prix": 15,
                "description": "Un plat traditionnel français à base de poulet cuit lentement dans du vin rouge et de légumes."
            },
            {
                "plat": "Croque-monsieur",
                "type": "Sandwich",
                "prix": 12,
                "description": "Un sandwich au jambon et au fromage grillé."
            },
            {
                "plat": "Tarte tatin",
                "type": "Dessert",
                "prix": 10,
                "description": "Un dessert à base de pommes caramélisées et de pâte feuilletée."
            },
        ]
    },
    {
        id: 5,
        name: "Le Bistrot",
        rating: randomRating(),
        address: "456 Avenue du Général de Gaulle, Lyon, France",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
        menu: [
            {
                "plat": "Quiche Lorraine",
                "type": "Plat",
                "prix": 14,
                "description": "Une quiche aux lardons et à la crème fraîche."
            },
            {
                "plat": "Escargots",
                "type": "Entrée",
                "prix": 16,
                "description": "Des escargots cuits à la bourguignonne."
            },
            {
                "plat": "Profiteroles",
                "type": "Dessert",
                "prix": 12,
                "description": "Des boules de glace recouvertes de chocolat fondu et accompagnées de choux à la crème."
            },
        ]
    },
    {
        id: 6,
        name: "La Trattoria",
        rating: randomRating(),
        address: "789 Via Roma, Rome, Italie",
        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        menu: [
            {
                "plat": "Carbonara",
                "type": "Plat",
                "prix": 16,
                "description": "Un plat de pâtes à la carbonara, une sauce à base de jaunes d'œufs, de lardons et de parmesan."
            },
            {
                "plat": "Saltimbocca alla Romana",
                "type": "Plat",
                "prix": 18,
                "description": "Des escalopes de veau farcies de jambon et de feuilles de sauge, cuites au vin blanc."
            },
            {
                "plat": "Tiramisù ",
                "type": "Dessert",
                "prix": 14,
                "description": "Un dessert à base de biscuits imbibés de café, de crème mascarpone et de cacao."
            },
        ]
    },
    {
        id: 7,
        name: "Chez Marie",
        rating: randomRating(),
        address: "123 Rue de la Paix, Paris, France",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        menu: [
            {
                "plat": "Coq au vin",
                "type": "Plat",
                "prix": 15,
                "description": "Un plat traditionnel français à base de poulet cuit lentement dans du vin rouge et de légumes."
            },
            {
                "plat": "Croque-monsieur",
                "type": "Sandwich",
                "prix": 12,
                "description": "Un sandwich au jambon et au fromage grillé."
            },
            {
                "plat": "Tarte tatin",
                "type": "Dessert",
                "prix": 10,
                "description": "Un dessert à base de pommes caramélisées et de pâte feuilletée."
            },
        ]
    },
    {
        id: 8,
        name: "Le Bistrot",
        rating: randomRating(),
        address: "456 Avenue du Général de Gaulle, Lyon, France",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
        menu: [
            {
                "plat": "Quiche Lorraine",
                "type": "Plat",
                "prix": 14,
                "description": "Une quiche aux lardons et à la crème fraîche."
            },
            {
                "plat": "Escargots",
                "type": "Entrée",
                "prix": 16,
                "description": "Des escargots cuits à la bourguignonne."
            },
            {
                "plat": "Profiteroles",
                "type": "Dessert",
                "prix": 12,
                "description": "Des boules de glace recouvertes de chocolat fondu et accompagnées de choux à la crème."
            },
        ]
    },
    {
        id: 9,
        name: "La Trattoria",
        rating: randomRating(),
        address: "789 Via Roma, Rome, Italie",
        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        menu: [
            {
                "plat": "Carbonara",
                "type": "Plat",
                "prix": 16,
                "description": "Un plat de pâtes à la carbonara, une sauce à base de jaunes d'œufs, de lardons et de parmesan."
            },
            {
                "plat": "Saltimbocca alla Romana",
                "type": "Plat",
                "prix": 18,
                "description": "Des escalopes de veau farcies de jambon et de feuilles de sauge, cuites au vin blanc."
            },
            {
                "plat": "Tiramisù ",
                "type": "Dessert",
                "prix": 14,
                "description": "Un dessert à base de biscuits imbibés de café, de crème mascarpone et de cacao."
            },
        ]
    },
]
