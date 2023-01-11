import React from 'react';
import Grid from "@mui/material/Grid";

const Inscription = () => {
    return (
        <div>
            <Grid container alignItems='stretch' style={{minHeight: '100vh'}}>

                <Grid item xs={5}
                      style={{
                          background: '#444444',
                          color: 'white',display:'flex',
                          flexDirection:'column',
                          alignItems:'center',
                          justifyContent:'center'
                      }}>
                    <h2 style={{
                        width: '549px', height: '44px', fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '36px',
                        lineHeight: '44px',
                        paddingTop: '0',
                        paddingBottom: '0',
                        paddingLeft: '0',
                        paddingRight: '0'                        // marginLeft:'0'

                    }}
                    >De retour parmis nous ?</h2>
                    <p style={{textAlign: 'center'}}>Si vous avez déjà un compte,<br/> connectez-vous.</p>

                </Grid>
                <Grid item xs={7} style={{
                    background: '#FFFFFF',
                    color: 'white', display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', flexDirection: 'column',
                }}>

                </Grid>
            </Grid>
        </div>
    );
};

export default Inscription;