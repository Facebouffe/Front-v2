import React from "react";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import {Tooltip} from "@mui/material";
import {Logout} from "@mui/icons-material";
import Router from "next/router";
import Link from "next/link";

function handleClickAccount(id: any) {
    Router.push(`/account`).then(r => true)
}
function handleClickDeconnect(id: any) {
    Router.push(`/connexion`).then(r => true)
}
export const AccountMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center'
            }}>
                <Tooltip title={"Gestion du compte"}>
                    <IconButton
                    onClick={handleClick}
                    size={"small"}
                    aria-controls={open ? 'menu-compte' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}>
                        <Avatar sx={{
                            width: 40,
                            height: 40
                        }}>SS</Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu open={open}
            anchorEl={anchorEl}
            id={"menu-compte"}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
                elevation:0,
                sx: {
                    overflow:'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                    },
                    '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                    },
                },
            }}
                  transformOrigin={{horizontal: 'right', vertical: 'top'}}
                  anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            >
                <MenuItem onClick={handleClickAccount}><Avatar/>Mon compte</MenuItem>
                <Divider/>
                <MenuItem onClick={handleClickDeconnect} >
                        <ListItemIcon>
                            <Logout fontSize="small"/>
                        </ListItemIcon>
                        D??connexion
                </MenuItem>

            </Menu>
        </>
    )
}