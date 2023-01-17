import React from "react";
import Grid from "@mui/material/Grid";
import {Box, TextField} from "@mui/material";
import Link from "next/link";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {Logo} from "../src/Components/Logo";

import {useFormik} from "formik";
import * as yup from 'yup';

import { signIn } from "next-auth/react"

const validationSchema = yup.object({
    email: yup
            .string()
            .email('Entrer votre adresse mail')
            .required('Email requis'),
    password: yup
            .string()
            .min(8, 'Le mot de passe doit comporter plus de 8 caractère')
            .required('Mot de passe requis'),
});

const Connexion = () => {
    const formik = useFormik({
        initialValues: {
            email: 'foobar@example.com',
            password: 'foobar',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            //alert(JSON.stringify(values, null, 2));
            await signIn()
        },
    });

    return (
        <Box>
            <Box>
                <Grid container alignItems="stretch" sx={{minHeight: "100vh"}}>
                    <Grid
                        item
                        xs={12}
                        md={7}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                        }}>
                        <Logo/>
                        <Typography variant={"h2"} sx={{fontSize: {xs: 20, md: 50}}}>
                            Connectez-vous à votre compte
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",
                                width: "60%",
                            }}>
                                <form onSubmit={formik.handleSubmit}>
                                    <TextField
                                        id={"email"}
                                        name={"email"}
                                        label={"Email"}
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        error={formik.touched.email && Boolean(formik.errors.email)}
                                        helperText={formik.touched.email && formik.errors.email}
                                        fullWidth
                                    />
                                    <TextField
                                        fullWidth
                                        id="password"
                                        name="password"
                                        label="Password"
                                        type="password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        error={formik.touched.password && Boolean(formik.errors.password)}
                                        helperText={formik.touched.password && formik.errors.password}

                                    />
                                    <Button
                                        type="submit"
                                        sx={{
                                            background: "#444444",
                                            borderRadius: "20px",
                                            padding: " 5px 66px",
                                            border: "none",
                                            color: "white",
                                            cursor: "pointer",
                                            transition: "background 0.2s ease-in-out",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = "#E9E9E9";
                                            e.currentTarget.style.color = "#444444";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = "#444444";
                                            e.currentTarget.style.color = "#E9E9E9";
                                        }}>
                                        Se connecter
                                    </Button>
                                </form>
                        </Box>

                    </Grid>

                    <Grid
                        item
                        xs={5}
                        sx={{
                            display: {xs: "none", md: "flex"},
                            background: "#444444",
                            color: "white",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                        }}
                    >
                        <Typography variant={"h2"}>Nouveau ici ?</Typography>
                        <Typography sx={{fontSize: 25, marginBottom: 20, marginLeft: 5}}>
                            Inscrivez-vous et découvrez une grande quantité de nouvelle
                            opportunités!{" "}
                        </Typography>
                        <Link href={"/inscription"} passHref>
                            <Button sx={{
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
                                Inscription
                            </Button>
                        </Link>
                    </Grid>
                    <Link href={"/inscription"} passHref>
                        <Box sx={{
                            display: {xs: "flex", md: "none"},
                            alignItems: "center",
                            justifyContent: "center",
                            paddingLeft: 8,
                            marginBottom: 10,
                        }}>
                            Si vous n'êtes pas encore inscrit cliquez ci dessous pour
                            vous inscrire
                        </Box>
                    </Link>
                </Grid>
            </Box>
        </Box>
    );
};

export default Connexion;
