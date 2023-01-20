import React from "react";
import Grid from "@mui/material/Grid";
import {Box, TextField} from "@mui/material";
import Link from "next/link";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {Logo} from "../src/Components/Logo";
import Router from "next/router";
import {LogoBlack} from "../src/Components/LogoBlack";

const Connexion = () => {
    function handleClickHome() {
        Router.push('/').then(r=>true);
    }
    function handleClickSingUp() {
        Router.push('/inscription').then(r=>true);
    }
  return (
    <Box>
      <Box>
        <Grid container alignItems="stretch" sx={{ minHeight: "100vh" }}>
          <Grid
            item
            xs={12}
            md={7}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <LogoBlack />
            <Typography variant={"h2"} sx={{ fontSize: { xs: 20, md: 50 } }}>
              Connectez-vous à votre compte
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                width: "60%",
              }}
            >
                <TextField
                    placeholder={"Adresse mail"}
                    fullWidth
                    sx={{mb: 2, mt: 2,}}
                />
                <TextField
                    fullWidth
                    type={"password"}
                    placeholder={"Mot de passe"}
                    sx={{mb: 2, mt: 2,}}
                />
            </Box>
                  <Button onClick={handleClickHome}
                      sx={{
                          background: "#D43333",
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
                      }} onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#D43333";
                      e.currentTarget.style.color = "#E9E9E9";
                  }}
                  >
                      Se connecter
                  </Button>

          </Grid>

          <Grid
            item
            xs={5}
            sx={{
                display: {xs: "none", md: "flex"},
                background: "#D43333",
                color: "white",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
            }}
          >
            <Typography variant={"h2"} fontSize={60} mb={10}>Nouveau ici ?</Typography>
            <Typography sx={{ fontSize: 25, marginBottom: 10, marginLeft: 5 }}>
              Inscrivez-vous et découvrez une grande quantité de nouvelle
              opportunités!
            </Typography>
              <Button onClick={handleClickSingUp} sx={{
                  background: "#E9E9E9",
                  color: 'black',
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
          </Grid>
          <Link href={"/inscription"} passHref>
            <Box sx={{
                display: { xs: "flex", md: "none" },
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 8,
                marginBottom: 10,
                backgroundColor: 'black'
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
