import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

function About() {
    return (
        <>
            <Container sx={{ mt: 2, border: "2px solid black", borderRadius: "15px", boxShadow: 10 }}>
                <Typography variant="h1" sx={{ mt: 2 }}>About us</Typography>
                <Paper elevation={1} variant='contained' sx={{ mt: 2, display: "flex", justifyContent: "space-between", gap: 4, flexDirection: { xs: "column", md: "row" }, bgcolor: "primary.main", mb: 3, alignItems: "center" }}>
                    <Typography variant="h2" component="h2">
                        We are a team of experienced developers who specialize in building cutting-edge web applications.
                    </Typography>
                    <Typography variant="body1" component="p">
                        Our mission is to create innovative and user-friendly solutions that help businesses achieve their goals.
                    </Typography>
                    <Typography variant="body1" component="p">
                        We strive to deliver high-quality, reliable, and secure software solutions.
                    </Typography>
                    <Typography variant="body1" component="p">
                        We believe in continuous improvement and adaptability, so we always strive to deliver better and better versions of our products.
                    </Typography>
                    <Typography variant="body1" component="p">
                        We are committed to providing excellent customer service and always ready to assist you with any questions or concerns you may have.
                    </Typography>
                    <Typography variant="body1" component="p"></Typography>
                </Paper>
            </Container>
        </>
    );
}

export default About;