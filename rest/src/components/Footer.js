import React from "react";
import { Container, Typography, Grid, Link, Box } from "@mui/material";
import { styled } from '@mui/material/styles';

const FooterContainer = styled(Container)(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.divider}`,
  marginTop: theme.spacing(8),
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
}));

const FooterGridItem = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

const Footer = () => {
  return (
    <FooterContainer maxWidth="md" component="footer">
      <Grid container spacing={4} justifyContent="space-evenly">
        {footers.map((footer) => (
          <FooterGridItem item xs={6} sm={3} key={footer.title}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              {footer.title}
            </Typography>
            <ul>
              {footer.links.map((link) => (
                <li key={link}>
                  <Link href="#" variant="subtitle1" color="textSecondary">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterGridItem>
        ))}
      </Grid>
      <Box mt={5}>
        <Copyright />
      </Box>
    </FooterContainer>
  );
};

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

const footers = [
  {
    title: 'Company',
    links: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    links: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one',
    ],
  },
  {
    title: 'Resources',
    links: [
      'Resource',
      'Resource name',
      'Another resource',
      'Final resource',
    ],
  },
  {
    title: 'Legal',
    links: ['Privacy policy', 'Terms of use'],
  },
];

export default Footer;
