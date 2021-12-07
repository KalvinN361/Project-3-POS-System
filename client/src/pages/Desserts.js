import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Churros from '../images/Churros.jpg'
import cake from '../images/strawberryCake.jpg'

const Img = styled("img")({
  display: "block",
  maxWidth: "200px",
  maxHeight: "",
});

const menu = [
  {
    name: "Strawberry Cake",
    price: "6.99",
  },
  {
    name: "Churros",
    price: "5.99",
  },
];

export default function menuItem() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <Card m={2} p={2} xl={{ Width: 200 }}>
          <CardContent>
            <Box display="flex" justifyContent="space-around">
              <Img alt="Strawberry Cake" src={cake} />
            </Box>
          </CardContent>
          <CardActions>
            <Button sx={{ mr: 7 }} variant="contained" size="small">
              Add {menu[0].name} to order
            </Button>
            <Typography>Price:${menu[0].price}</Typography>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Card xl={{ Width: 300 }}>
          <CardContent>
            <Box display="flex" justifyContent="space-around">
              <Img alt="churro" src={Churros} />
            </Box>
          </CardContent>
          <CardActions>
          <Box display="flex" justifyContent="space-around">
          <Button sx={{ mr: 7 }} variant="contained" size="small">
              Add {menu[1].name} to order
            </Button>
            <Typography>
              Price:${menu[1].price}
            </Typography>
            </Box>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
