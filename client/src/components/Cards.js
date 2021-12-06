import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import taco1 from "./images/taco.jpg";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const Img = styled("img")({
  display: "block",
  maxWidth: "200px",
  maxHeight: "",
});

const menu = [
  {
    name: "Al Pastor",
    price: "3.50",
    toppings: ["CHZ", "LTC", "JLP", "SS"],
  },
  {
    name: "Pho Taco",
    price: "5.00",
    toppings: ["NDL", "HSN", "SRC", "BNS"],
  },
  {
    name: "Whatataco",
    price: "5.50",
    toppings: ["BFF", "LTC", "TMT", "PKL"],
  },
];

export default function menuItem() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <Card m={2} p={2} xl={{ Width: 200 }}>
          <CardContent>
            <Box display="flex" justifyContent="space-around">
              <Img alt="taco" src={taco1} />
              <Typography>
                Comes with:
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label={menu[0].toppings[0]}
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label={menu[0].toppings[1]}
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label={menu[0].toppings[2]}
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label={menu[0].toppings[3]}
                    value={menu[0].toppings[3]}
                  />
                </FormGroup>
              </Typography>
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
              <Img alt="taco" src={taco1} />
              <Typography>
                Comes with:
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label={menu[1].toppings[0]}
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label={menu[1].toppings[1]}
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label={menu[1].toppings[2]}
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label={menu[1].toppings[3]}
                  />
                </FormGroup>
              </Typography>
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
              <Img alt="taco" src={taco1} />
              <Typography>
                Comes with:
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label={menu[2].toppings[0]}
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label={menu[2].toppings[1]}
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label={menu[2].toppings[2]}
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label={menu[2].toppings[3]}
                />
              </FormGroup>
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Button sx={{ mr: 7 }} variant="contained" size="small">
              Add {menu[0].name} to order
            </Button>
            <Typography>Price:${menu[2].price}</Typography>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
