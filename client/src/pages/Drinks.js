import React from 'react';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import ThaiTea from "../images/thaitea.jpg";
import VietnameseCoffee from "../images/vietnamesecoffee.jpg";
import BobaMilkTea from "../images/milktea.jpg";
import AguaFresca from "../images/aguafresca.jpg";

const Img = styled("img")({
  display: "block",
  maxWidth: "200px",
  maxHeight: "",
});

const menu = [
  {
    name: "Thai Tea",
    price: "3.00",
  },
  {
    name: "Vietnamese Coffee",
    price: "3.00",
  },
  {
    name: "Boba Milk Tea",
    price: "4.00",
  },
  {
    name: "Agua Fresca",
    price: "2.00",
  }
];

export default function menuItem() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <Card m={2} p={2} xl={{ Width: 200 }}>
          <CardContent>
            <Box display="flex" justifyContent="space-around">
              <Img alt="thai tea" src={ThaiTea} />
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
              <Img alt="Vietnamese Coffee" src={VietnameseCoffee} />
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
      <Grid item xs={12} sm={6} md={4}>
        <Card xl={{ Width: 300 }}>
          <CardContent>
            <Box display="flex" justifyContent="space-between">
              <Img alt="Boba Milk Tea" src={BobaMilkTea} />
            </Box>
          </CardContent>
          <CardActions>
            <Button sx={{ mr: 7 }} variant="contained" size="small">
              Add {menu[2].name} to order
            </Button>
            <Typography>Price:${menu[2].price}</Typography>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card xl={{ Width: 300 }}>
          <CardContent>
            <Box display="flex" justifyContent="space-around">
              <Img alt="Agua Fresca" src={AguaFresca} />
            </Box>
          </CardContent>
          <CardActions>
          <Box display="flex" justifyContent="space-around">
          <Button sx={{ mr: 7 }} variant="contained" size="small">
              Add {menu[3].name} to order
            </Button>
            <Typography>
              Price:${menu[3].price}
            </Typography>
            </Box>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
