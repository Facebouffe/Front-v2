import React from "react";
import Grid from "@mui/material/Grid";
import {Box, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import {Logo} from "../src/Components/Logo";
import Router from "next/router";
import {LogoBlack} from "../src/Components/LogoBlack";

const Inscription = () => {
    function handleClickConnection() {
        Router.push('/connexion').then(r => true);
    }

    return (
        <Box>
            <Grid container alignItems="stretch" sx={{minHeight: "100vh"}}>
                <Grid item md={5} sx={{
                    display: {xs: "none", md: "flex"},
                    background: "#D43333",
                    color: "white",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <Typography variant={"h2"} fontSize={60} mb={10} >
                        De retour parmis nous ?
                    </Typography>
                    <Typography sx={{ fontSize: 25, marginBottom: 10, marginLeft: 5 }}>
                        Si vous avez déjà un compte, connectez-vous.
                    </Typography>
                        <Button
                            onClick={handleClickConnection}
                            sx={{
                                background: "#E9E9E9",
                                color: "black",
                                borderRadius: "20px",
                                padding: " 5px 66px",
                                border: "none",
                                cursor: "pointer",
                                transition: "background 0.2s ease-in-out",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = "#444444";
                                e.currentTarget.style.color = "#E9E9E9";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = "#E9E9E9";
                                e.currentTarget.style.color = "#444444";
                            }}>
                            Connexion
                        </Button>
                </Grid>

                <Grid item xs={12} md={7} sx={{
                    background: "#FFFFFF",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                }}>
                    <LogoBlack/>
                    <Grid sx={{display:'flex',justifyContent:'center'}}>
                        <Box sx={{marginLeft: 2, marginRight: 1}}>
                            <Typography variant={"h2"} sx={{color:'black', fontSize: { xs: 20, md: 50 } }}>
                                Crée un compte
                            </Typography>

                            <Box sx={{
                                display: "flex",
                                flexDirection: "row",
                                width: "100%",
                            }}>
                                <TextField sx={{
                                    maxWidth: "70%",
                                    marginBottom: "20px",
                                  paddingRight: 20, mb: 2, mt: 2}} placeholder={"Nom"}/>
                                <TextField sx={{
                                    maxWidth: "80%",
                                    marginBottom: "20px",
                                    paddingRight: 20, mb: 2, mt: 2 }}placeholder={"Prénom"}/>
                            </Box>
                            <Box sx={{
                                display: "flex",
                                flexDirection: "column"
                            }}>
                                <TextField sx={{paddingRight: 20, mb: 2, mt: 2}} placeholder={"Adresse postale"}/>
                                <TextField sx={{paddingRight: 20, mb: 2, mt: 2}} placeholder={"Adresse mail"}/>
                                <TextField sx={{
                                    paddingRight: 20,
                                    marginBottom: "20px",
                                    background: "#D9D9D9",
                                    borderRadius: "20px",
                                    outline: "none",
                                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                                }} placeholder={"Adresse postale"}/>
                                <TextField sx={{
                                    paddingRight: 20,
                                    marginBottom: "20px",
                                    background: "#D9D9D9",
                                    borderRadius: "20px",
                                    outline: "none",
                                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                                }} placeholder={"Adresse mail"}/>
                                <TextField type={"password"} sx={{
                                    paddingRight: 20,
                                    marginBottom: "20px",
                                    background: "#D9D9D9",
                                    borderRadius: "20px",
                                    outline: "none",
                                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                                    mb: 2, mt: 2
                                }} placeholder={"Mot de passe"}/>
                                <Button onClick={handleClickConnection} sx={{
                                    width:190,
                                    background: "#444444",
                                    color: "white",
                                    borderRadius: "20px",
                                    padding: " 5px 66px",
                                    border: "none",
                                    cursor: "pointer",
                                    transition: "background 0.2s ease-in-out",
                                }} onMouseEnter={(e) => {
                                    e.currentTarget.style.background = "#E9E9E9";
                                    e.currentTarget.style.color = "#444444";
                                }} onMouseLeave={(e) => {
                                    e.currentTarget.style.background = "#D43333";
                                    e.currentTarget.style.color = "#E9E9E9";
                                }}>
                                    S'inscrire
                                </Button>
                            </Box>
                        </Box>
                        <Link href={"/connexion"} passHref>
                            <Typography sx={{
                                display: {xs: "flex", md: "none"},
                                alignItems: "center",
                                justifyContent: "center",
                                paddingLeft: 8,
                                marginBottom: 10,
                            }}>
                                Si vous avez déjà un compte,
                                cliquez ci-dessous pour vous connecter
                            </Typography>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Inscription;
