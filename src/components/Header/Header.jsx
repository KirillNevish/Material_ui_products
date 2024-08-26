import { Box, Container, Typography, Button } from '@mui/material';
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './Header.module.css'
import { Link } from 'react-router-dom';
import * as React from 'react';

import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';






function Header() {
    const [state, setState] = React.useState({
        top: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, bgcolor: "#e57373" }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>

                <ListItem disablePadding>
                    <ListItemButton sx={{ display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "start", gap: 2 }}>

                        <Typography variant="h2" sx={{ fontSize: "2rem", color: "black" }}>
                            <Link to="/" className="styleLinkHome" >
                                Home
                            </Link>
                        </Typography>

                        <Typography variant="h2" sx={{ fontSize: "2rem", color: "black", whiteSpace: "nowrap" }}>
                            <Link to="/about" className="styleLink">
                                About us
                            </Link>
                        </Typography>
                        <Typography variant="h2" sx={{ fontSize: "2rem", color: "black" }}>
                            <Link to="/service" className="styleLink">
                                Service
                            </Link>
                        </Typography>

                    </ListItemButton>
                </ListItem>

            </List>
        </Box>
    );



    return (
        <>
            <Container maxWidth="lg" sx={{ display: "flex", p: 2, height: 90, position: "sticky", top: "0", borderRadius: "15px", border: "2px solid black", zIndex: 3, boxShadow: 10, bgcolor: "primary.main" }}>
                <div id={style.openmenu}>
                    {['top'].map((anchor) => (
                        <React.Fragment key={anchor}>
                            <Button onClick={toggleDrawer(anchor, true)} variant="outlined" sx={{ display: "flex", alignItems: "end" }}>{anchor}<Typography variant="h2" sx={{ fontSize: "2.4rem", color: "black" }}>
                                <FontAwesomeIcon icon={faBars} />
                            </Typography></Button>
                            <SwipeableDrawer
                                anchor={anchor}
                                open={state[anchor]}
                                onClose={toggleDrawer(anchor, false)}
                                onOpen={toggleDrawer(anchor, true)}
                            >
                                {list(anchor)}
                            </SwipeableDrawer>
                        </React.Fragment>
                    ))}
                </div>
                <Container id={style.Headerpc} maxWidth="lg" sx={{ display: "flex", alignItems: "baseline" }}>
                    <Box sx={{ display: "flex", alignItems: "baseline" }}>

                        <Button variant="outlined" sx={{ display: "flex", alignItems: "baseline" }}>
                            <Link to="/" className="styleLinkHome" >
                                <FontAwesomeIcon icon={faHouse} className={style.gohome} />
                                <Typography variant="h2" sx={{ ml: 1, fontSize: "2rem", color: "black" }}>
                                    Home
                                </Typography>
                            </Link>
                        </Button>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "baseline" }}>
                        <Button variant="outlined" sx={{ display: "flex" }}>
                            <Typography variant="h2" sx={{ fontSize: "2rem", color: "black", whiteSpace: "nowrap" }}>
                                <Link to="/about" className="styleLink">
                                    About us
                                </Link>
                            </Typography>
                        </Button>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "baseline", }}>
                        <Button variant="outlined">
                            <Typography variant="h2" sx={{ fontSize: "2rem", color: "black" }}>
                                <Link to="/service" className="styleLink">
                                    Service
                                </Link>
                            </Typography>
                        </Button>
                    </Box>

                </Container>

            </Container >
        </>
    );
}

export default Header;