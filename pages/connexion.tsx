import React, { useRef } from "react";
import Grid from "@mui/material/Grid";
import { Box, TextField } from "@mui/material";
import Link from "next/link";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Logo } from "../src/Components/Logo";
import { signIn } from "next-auth/react";

const Connexion = async () => {
  const userName = useRef("");
  const pass = useRef("");
  const onSubmit = async () => {
    const result = await signIn("credentials", {
      username: userName.current,
      password: pass.current,
      redirect: true,
      callbackUrl: "/",
    });
  };
  return (
    <Box
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
            <Logo />
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
                onChange={(e) => (userName.current = e.target.value)}
                sx={{
                  background: "#D9D9D9",
                  borderRadius: "20px",
                  outline: "none",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              />{" "}
              <TextField
                fullWidth
                type={"password"}
                onChange={(e) => (pass.current = e.target.value)}
                placeholder={"Mot de passe"}
                sx={{
                  background: "#D9D9D9",
                  borderRadius: "20px",
                  outline: "none",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  marginBottom: "20px",
                  mt: 2,
                }}
              />
            </Box>
            <Button
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
              }}
              onClick={onSubmit}
            >
              Se connecter
            </Button>
          </Grid>

          <Grid
            item
            xs={5}
            sx={{
              display: { xs: "none", md: "flex" },
              background: "#444444",
              color: "white",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant={"h2"}>Nouveau ici ?</Typography>
            <Typography sx={{ fontSize: 25, marginBottom: 20, marginLeft: 5 }}>
              Inscrivez-vous et découvrez une grande quantité de nouvelle
              opportunités!{" "}
            </Typography>
            <Link href={"/inscription"} passHref>
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
                }}
              >
                Inscription
              </Button>
            </Link>
          </Grid>
          <Link href={"/inscription"} passHref>
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 8,
                marginBottom: 10,
              }}
            >
              {" "}
              Si vous n'êtes pas encore inscrit <br /> cliquez ci dessous pour
              vous inscrire
            </Box>
          </Link>
        </Grid>
      </Box>
    </Box>
  );
};

export default Connexion;
