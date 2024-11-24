import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

function Service() {
    return (
        <>
            <Container sx={{ mt: 2, border: "2px solid black", borderRadius: "15px", boxShadow: 10 }}>
                <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "start" } }}>
                    <Typography variant="h1" sx={{ mt: 2 }}>Service</Typography>
                </Box>
                <Paper elevation={1} variant='contained' sx={{ mt: 2, display: "flex", justifyContent: "space-evenly", gap: 4, flexDirection: { xs: "column", md: "row" }, bgcolor: "primary.main", mb: 3, mt: 3, alignItems: "center" }}>

                    <Typography variant="h3" component="div">
                        Gmail
                    </Typography>
                    <Typography variant="h3" component="div">
                        Phone number
                    </Typography>

                </Paper>
            </Container>
        </>
    );
}

export default Service;