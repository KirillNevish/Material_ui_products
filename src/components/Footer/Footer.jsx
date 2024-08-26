import { Box, Container, Typography, Button } from '@mui/material';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import * as React from 'react';

function Footer() {
    const nowDate = new Date().getFullYear();
    return (
        <>
            <Container maxWidth="lg" sx={{ display: "flex", p: 2, height: { xs: 80, md: 90 }, borderRadius: "15px", border: "2px solid black", zIndex: 3, boxShadow: 10, bgcolor: "primary.main", mt: 2 }}>

                <Container maxWidth="lg" sx={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                    <Box sx={{ display: "flex", alignItems: "baseline" }}>



                        <Typography variant="h2" sx={{ ml: 1, fontSize: { xs: "1rem", md: "1.5rem" }, color: "black", alignItems: "baseline" }}>
                            © {nowDate} Company, Inc
                        </Typography>

                    </Box>
                    <Box sx={{ display: "flex", alignItems: "baseline" }}>
                        <Button variant="outlined" sx={{ display: "flex", justifyContent: "end", }}>
                            <Typography variant="h2" sx={{ fontSize: { xs: "1.5rem", md: "2rem" }, color: "black" }}>
                                <Link to="#" className="styleLink">
                                    <FontAwesomeIcon icon={faSquareFacebook} />
                                </Link>
                            </Typography>
                        </Button>
                        <Button variant="outlined" sx={{ display: "flex", justifyContent: "start" }}>
                            <Typography variant="h2" sx={{ fontSize: { xs: "1.5rem", md: "2rem" }, color: "black", whiteSpace: "nowrap", }}>
                                <Link to="#" className="styleLink">
                                    <FontAwesomeIcon icon={faXTwitter} />
                                </Link>
                            </Typography>
                        </Button>
                    </Box>

                </Container>

            </Container >
        </>
    );
}

export default Footer;