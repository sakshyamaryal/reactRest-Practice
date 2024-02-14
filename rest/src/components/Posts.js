import React from 'react';
import { useState } from 'react'; // Only import useState
import { createTheme, ThemeProvider } from '@mui/material/styles'; // Import MUI 5 theme
import { Card, CardMedia, CardContent, Typography, Grid, Container, Box } from '@mui/material'; // Import used MUI components

const theme = createTheme({
  palette: {
    type: 'light',
    grey: {
      200: '#eee',
      700: '#333',
    },
  },
  spacing: 1, // Customize spacing 
});

function Posts({ posts }) {
  const [isLoading, setIsLoading] = useState(false); // Add state for loading indication

  if (!posts || posts.length === 0) {
    return <p>No posts found.</p>;
  }

  return (
    <>
      <h1>Hello</h1>
      <ThemeProvider theme={theme}>
        <Container maxWidth="md" component="main">
          <Grid container spacing={5} alignItems="flex-end">
            {posts.map((post) => (
              <Grid item key={post.id} xs={12} md={4}>
                <Card sx={{ borderRadius: 4 }}> {/* Add border radius for smoother look */}
                  <CardMedia
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                      {post.title.substr(0, 50)}...
                    </Typography>
                    <div>
                      <Typography component="p" color="textPrimary">
                        {post.author} {/* Placeholder for post author or other relevant information */}
                      </Typography>
                      <Typography variant="p" color="textSecondary">
                        {post.excerpt.substr(0, 60)}...
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Posts;
