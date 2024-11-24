
import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Paper } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Box from '@mui/material/Box';
import Footer from "../Footer/Footer";


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));
function AllProducts() {
    const [expanded, setExpanded] = useState({});
    const [searchQuery, setSearchQuery] = useState('');

    const [likedCards, setLikedCards] = useState(() => {
        const savedLikedCards = localStorage.getItem('likedCards');
        return savedLikedCards ? JSON.parse(savedLikedCards) : [];
    });

    const products = [
        {
            title: 'Shrimp and Chorizo Paella',
            image: 'paella.jpg',
            description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests.Add 1 cup of frozen peas along with the mussels, if you like.',
            method: `Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes. Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil. Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don't open.) Set aside off of the heat to let rest for 10 minutes, and then serve.`,
        },
        {
            title: 'Caesar Salad',
            image: 'caesar.jpg',
            description: 'A classic Caesar salad with fresh romaine, homemade croutons, and a creamy dressing. Perfect as a side dish or light meal.',
            method: `Prepare the dressing by mixing anchovies, garlic, egg yolk, lemon juice, Dijon mustard, and Worcestershire sauce. Slowly whisk in olive oil until emulsified. Toss romaine lettuce with the dressing, croutons, and grated Parmesan cheese. Serve immediately.`,
        },
        {
            title: 'Beef Stew',
            image: 'beef-stew.jpg',
            description: 'Hearty beef stew made with tender chunks of beef, carrots, potatoes, and peas. Slow-cooked to perfection for a comforting meal.',
            method: `Brown the beef in a large pot, then set aside. In the same pot, sauté onions, garlic, and celery until soft. Add tomato paste, beef broth, and bay leaves. Return the beef to the pot and simmer for 2 hours. Add carrots, potatoes, and peas, and continue to cook until vegetables are tender. Serve hot.`,
        },
        {
            title: 'Apple Pie',
            image: 'apple-pie.jpg',
            description: 'Classic apple pie with a flaky crust and spiced apple filling. Perfect for dessert with a scoop of vanilla ice cream.',
            method: `Preheat oven to 375°F (190°C). Roll out pie dough and place in a pie dish. Fill with sliced apples mixed with sugar, cinnamon, nutmeg, and lemon juice. Cover with top crust and seal edges. Cut slits in the top for steam to escape. Bake for 50-60 minutes until golden brown. Let cool before serving.`,
        },
    ];

    useEffect(() => {

        localStorage.setItem('likedCards', JSON.stringify(likedCards));
    }, [likedCards]);

    const handleExpandClick = (title) => {
        setExpanded((prevState) => ({
            ...prevState,
            [title]: !prevState[title],
        }));
    };

    const handleFavoriteClick = (cardTitle) => {
        setLikedCards((prevLikedCards) => {
            if (prevLikedCards.includes(cardTitle)) {
                return prevLikedCards.filter((title) => title !== cardTitle);
            } else {
                return [...prevLikedCards, cardTitle];
            }
        });
    };

    const isFavorite = (cardTitle) => likedCards.includes(cardTitle);

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const renderCard = (product) => (
        <Card
            key={product.title}
            sx={{
                width: 345,
                transition: 'transform 0.3s ease-in-out',
                borderRadius: '15px',
                '&:hover': {
                    transform: 'scale(1.05)',
                },
            }}
        >
            <CardHeader title={product.title} sx={{ paddingBottom: 0 }} />
            <CardMedia component="img" height="194" image={product.image} alt={product.title} />
            <CardContent sx={{ height: '100px', overflow: 'hidden' }}>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{ display: "flex", justifyContent: "space-between" }}>
                <IconButton
                    aria-label="add to favorites"
                    onClick={() => handleFavoriteClick(product.title)}
                    color={isFavorite(product.title) ? 'error' : 'default'}
                >
                    <FavoriteIcon />
                </IconButton>

                <IconButton
                    onClick={() => handleExpandClick(product.title)}
                    aria-expanded={expanded[product.title] || false}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>

            </CardActions>

            <Collapse in={expanded[product.title] || false} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>{product.method}</Typography>
                </CardContent>
            </Collapse>
        </Card>
    );


    return (
        <>
            <Container sx={{ mt: 2, border: "2px solid black", borderRadius: "15px", boxShadow: 10 }}>
                <Box id="ProductTitle" sx={{ display: "flex", justifyContent: { xs: "center", md: "space-between" }, alignItems: "center", flexDirection: { xs: "column", md: "row" } }}>
                    <Typography variant="h1" sx={{ mt: 2, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}> All Products</Typography>

                    <TextField
                        variant="outlined"
                        size="small"
                        placeholder="Search liked products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        sx={{
                            mt: 2,
                            borderRadius: "15px",
                            border: "2px solid black",
                            boxShadow: 10,
                            transition: "all 0.5s ease-in-out",
                            bgcolor: "primary.main",
                            '& .MuiOutlinedInput-root': {
                                borderRadius: "10px",
                                '& fieldset': {
                                    borderColor: 'black',
                                },
                                '&:hover fieldset': {
                                    borderColor: 'black',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'black',
                                },
                            },
                            '& .MuiInputBase-input': {
                                color: 'black',
                                '&::placeholder': {
                                    color: 'black',
                                },
                                '&:focus::placeholder': {
                                    color: 'black',
                                },
                            },
                        }}
                    />

                </Box>

                <Paper elevation={1} variant='contained' sx={{
                    mt: 2,
                    display: "flex",
                    justifyContent: "center",
                    gap: 4,
                    flexWrap: "wrap",
                    flexDirection: { xs: "column", md: "row" },
                    bgcolor: "primary.main",
                    mb: 3,
                    alignItems: "center"
                }}>

                    {filteredProducts.length === 0 ? (
                        <Typography variant="h6" color="text.secondary">
                            No products found.
                        </Typography>
                    ) : (
                        filteredProducts.map((product) => renderCard(product))
                    )}



                </Paper>

            </Container >
            <Footer />
        </>
    );
}

export default AllProducts;