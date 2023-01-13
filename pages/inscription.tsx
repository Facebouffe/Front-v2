import React from "react";
import Grid from "@mui/material/Grid";
import {Box, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import {Logo} from "../src/Components/Logo";
import {display} from "@mui/system";

const Inscription = () => {
    return (
        <Box>
            <Grid container alignItems="stretch" sx={{minHeight: "100vh"}}>
                <Grid item md={5} sx={{
                    display: {xs: "none", md: "flex"},
                    background: "#444444",
                    color: "white",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <Typography variant={"h2"} sx={{
                        fontStyle: "normal",
                        fontSize: "36px",
                        lineHeight: "44px",
                    }}>
                        De retour parmis nous ?
                    </Typography>
                    <Typography style={{textAlign: "center"}}>
                        Si vous avez déjà un compte, connectez-vous.
                    </Typography>
                    <Link href={"/connexion"} passHref>
                        <Button
                            sx={{
                                background: "#E9E9E9",
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
                    </Link>
                </Grid>

                <Grid item xs={12} md={7} sx={{
                    background: "#FFFFFF",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                }}>
                    <Logo/>
                    <Grid>
                        <Box sx={{marginLeft: 2, marginRight: 1}}>
                            <Typography variant={"h2"} sx={{
                                color: "black",
                                fontSize: {xs: 30, md: 70}
                            }}>
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
                                    background: "#D9D9D9",
                                    borderRadius: "20px",
                                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                                    marginRight: "20px",
                                }} placeholder={"Nom"}/>
                                <TextField sx={{
                                    maxWidth: "80%",
                                    marginBottom: "20px",
                                    background: "#D9D9D9",
                                    borderRadius: "20px",
                                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                                }} placeholder={"Prénom"}/>
                            </Box>
                            <Box sx={{
                                display: "flex",
                                flexDirection: "column"
                            }}>
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
                                <TextField sx={{
                                    paddingRight: 20,
                                    marginBottom: "20px",
                                    background: "#D9D9D9",
                                    borderRadius: "20px",
                                    outline: "none",
                                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                                }} placeholder={"Mot de passe"}/>
                                <Button sx={{
                                    background: "#444444",
                                    color: "white",
                                    borderRadius: "20px",
                                    padding: " 5px 66px",
                                    border: "none",
                                    cursor: "pointer",
                                    transition: "background 0.2s ease-in-out",
                                }} onMouseEnter={(e) => {
                                    e.currentTarget.style.background = "#444444";
                                    e.currentTarget.style.color = "#E9E9E9";
                                }} onMouseLeave={(e) => {
                                    e.currentTarget.style.background = "#E9E9E9";
                                    e.currentTarget.style.color = "#444444";
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
