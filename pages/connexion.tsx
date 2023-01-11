import React from 'react';
import Grid from "@mui/material/Grid";
import {Box, TextField} from '@mui/material';
import Link from 'next/link'
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {Logo} from "../src/Components/Logo";


const Connexion = () => {
    return (<Box
            //     sx={{
            // width:{
            //     xs:345,
            //     sm:690,
            //     md:1035,
            //     lg:1380,
            //     xl:1775
            // }
            // }}
        >
            <Box>
                <Grid container alignItems='stretch' sx={{minHeight: '100vh'}}>
                    <Grid item xs={12} md={7}
                          sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexDirection: 'column'
                          }}>
                        <Logo/>
                        <Typography variant={'h2'} sx={{fontSize: {xs: 20, md: 50}}}
                        >Connectez-vous à votre compte</Typography>
                        <Box sx={{
                            display: 'flex', alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column', width: "60%"
                        }}>
                            <TextField placeholder={'Adresse mail'} fullWidth sx={
                                {
                                    background: '#D9D9D9',
                                    borderRadius: '20px',
                                    border: 'none',
                                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                                }
                            }

                            /> <TextField fullWidth placeholder={'Mot de passe'} sx={
                            {
                                background: '#D9D9D9',
                                borderRadius: '20px',
                                border: 'none',
                                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                                marginBottom: '20px',
                                mt: 2
                            }
                        }
                        /></Box>
                        <Button sx={{
                            background: '#444444',
                            borderRadius: '20px',
                            padding: ' 5px 66px',
                            border: 'none',
                            color: 'white',
                            cursor: 'pointer', transition: 'background 0.2s ease-in-out'
                        }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = '#E9E9E9';
                                    e.currentTarget.style.color = '#444444'
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = '#444444';
                                    e.currentTarget.style.color = '#E9E9E9'
                                }}>Se connecter
                        </Button>
                    </Grid>

                    <Grid item xs={5} sx={{
                        display: {xs: 'none', md: 'flex'},
                        background: '#444444',
                        color: 'white',
                        alignItems: 'center',
                        justifyContent: 'center', flexDirection: 'column',
                    }}
                    >
                        <Typography variant={'h2'}>Nouveau ici ?</Typography>
                        <Typography sx={{fontSize:25,marginBottom: 20}}>Inscrivez-vous et découvrez une grande quantité de nouvelle
                            opportunités! </Typography>
                        <Link href={"/inscription"} passHref>
                            <Button style={
                                {
                                    background: '#E9E9E9',
                                    borderRadius: '20px',
                                    padding: ' 5px 66px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'background 0.2s ease-in-out'

                                }
                            }
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = '#444444';
                                        e.currentTarget.style.color = '#E9E9E9'
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = '#E9E9E9';
                                        e.currentTarget.style.color = '#444444'
                                    }}>Inscription
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Connexion;