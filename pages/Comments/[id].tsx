import Box from '@mui/material/Box';
import Head from 'next/head'
import {Header} from "../../src/Components/Header";
import React, {useState} from "react";
import {useRouter} from "next/router";
import {Restaurants} from "../../src/data/filter-data";
import {Button, CssBaseline, Divider, Paper, TextField, Typography} from "@mui/material";
import {InfoRestaurant} from "../../src/Components/InfoRestaurant";


export default function CommentPage() {
    const router = useRouter();
    const {id} = router.query;
    const selectedRestaurant = Restaurants.find(item => item.id.toString() === id)
    const comment = selectedRestaurant && selectedRestaurant.comment
    const [value, setValue] = useState('');
    if (selectedRestaurant === undefined || comment === undefined) {
        return null
    }
    const maxLength = 500;

    const handleChange = (event: any) => {
        if (event.target.value.length <= maxLength) {
            setValue(event.target.value);
        }
    };
    const handleSubmit = () => {
        console.log(`Valeur saisie : ${value}`);
    };
    return (
        <>
            <Head>
                <title>{selectedRestaurant.name}</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href=""/>
            </Head>
            <main>
                <CssBaseline/>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100vh',
                }}>
                    <Header/>
                    <InfoRestaurant
                        image={selectedRestaurant.image}
                        name={selectedRestaurant.name}
                        address={selectedRestaurant.address}
                        rating={selectedRestaurant.rating}/>
                    <Divider/>
                    <TextField InputProps={{
                        style: {height: 300},
                    }} multiline
                               rows={6}

                               sx={{mt: 2, ml: 2, mr: 2, height: 200,borderRadius:7}} placeholder={'Ecris ton commentaire ...'}
                               value={value}
                               onChange={handleChange}
                               inputProps={{maxLength}}
                    />
                    <Typography sx={{display: 'flex', justifyContent: 'flex-end'}} variant="caption">
                    {value.length}/{maxLength} caractères
                </Typography>
                    <Box sx={{display: 'flex', justifyContent: 'flex-end',mr:5,mt:2}}>
                    <Button sx={{display: 'flex', justifyContent: 'center', width: 200}} variant="contained"
                            color="primary" onClick={handleSubmit}>
                        Valider
                    </Button>
                </Box>


                    {comment.map((comment,index) => {
                        return (<Box key={index} sx={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                                <Paper elevation={5} sx={{pl:2,mt: 9, mb: 4, ml: 2, mr: 2}}>{comment}</Paper>
                                <Paper elevation={5} sx={{pl:2,mb: 4, ml: 2, mr: 2}}>{comment}</Paper>
                                <Paper elevation={5} sx={{pl:2,mb: 4, ml: 2, mr: 2}}>{comment}</Paper></Box>
                        )
                    })}
                </Box>
            </main>
        </>
    )
}