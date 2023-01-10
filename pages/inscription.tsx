import React from 'react';
import Grid from "@mui/material/Grid";

const Inscription = () => {
    return (
        <div>
            <Grid container alignItems='stretch' style={{minHeight: '100vh'}}>
                <Grid item xs={7}
                      style={{
                          background: '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexDirection: 'column'
                      }}>

                    <h2 style={{
                        width: '549px', height: '44px', fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '36px',
                        lineHeight: '44px'
                    }}
                    >Connectez-vous à votre compte</h2>
                    <input placeholder={'Adresse mail'} style={
                        {
                            background: '#D9D9D9',
                            borderRadius: '20px',
                            width: '457px',
                            height: '37px',
                            left: '46px',
                            top: '70px',
                            marginBottom: '20px',
                            border: 'none',
                            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'

                        }
                    }
                    /> <input placeholder={'Mot de passe'} style={
                    {
                        background: '#D9D9D9',
                        borderRadius: '20px',
                        width: '457px',
                        height: '37px',
                        left: '46px',
                        top: '70px',
                        border: 'none',
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        marginBottom:'20px'
                    }
                }
                />
                    <button style={{background: '#444444',
                        borderRadius:'20px',padding:' 5px 66px',border: 'none', color: 'white'}}>Se connecter</button>
                </Grid>
                <Grid item xs={5} style={{
                    background: '#444444',
                    color: 'white', display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', flexDirection: 'column'
                }}>
                    <h2>Nouveau ici ?</h2>
                    <p style={{marginBottom: '20px'}}>Inscrivez-vous et découvrez une grande quantité de nouvelles opportunités! </p>
                    <button style={
                        {background: '#E9E9E9',
                        borderRadius:'20px',padding:' 5px 66px',border: 'none'}
                    }>Inscription</button>
                </Grid>
            </Grid>
        </div>
    );
};

export default Inscription;