import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import taco1 from "./images/alpastor.jpg";
import pho1 from "./images/pho.png";
import pho2 from "./images/pho2.png";
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
  {
    name: "Pho Tai",
    price: "8.00",
    toppings: ["CHZ", "LTC", "JLP", "SS"],
  },
  {
    name: "Pho Eye of Round",
    price: "9.00",
    toppings: ["NDL", "HSN", "SRC", "BNS"],
  },
  {
    name: "Pho Tai Chin",
    price: "10.00",
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
              <Img alt="taco1" src={taco1} />
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
              <Img alt="taco2" src={taco1} />
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
              <Img alt="taco3" src={taco1} />
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
      <Grid item xs={12} sm={6} md={4}>
        <Card xl={{ Width: 300 }}>
          <CardContent>
            <Box display="flex" justifyContent="space-between">
              <Img alt="pho1" src={pho1} />
              <Typography>
                Comes with:
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label={menu[3].toppings[0]}
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label={menu[3].toppings[1]}
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label={menu[3].toppings[2]}
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label={menu[3].toppings[3]}
                />
              </FormGroup>
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Button sx={{ mr: 7 }} variant="contained" size="small">
              Add {menu[0].name} to order
            </Button>
            <Typography>Price:${menu[3].price}</Typography>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card xl={{ Width: 300 }}>
          <CardContent>
            <Box display="flex" justifyContent="space-between">
              <Img alt="pho2" src={pho2} />
              <Typography>
                Comes with:
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label={menu[4].toppings[0]}
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label={menu[4].toppings[1]}
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label={menu[4].toppings[2]}
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label={menu[4].toppings[3]}
                />
              </FormGroup>
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Button sx={{ mr: 7 }} variant="contained" size="small">
              Add {menu[4].name} to order
            </Button>
            <Typography>Price:${menu[4].price}</Typography>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card xl={{ Width: 300 }}>
          <CardContent>
            <Box display="flex" justifyContent="space-between">
              <Img alt="pho3" src={pho1} />
              <Typography>
                Comes with:
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label={menu[5].toppings[0]}
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label={menu[5].toppings[1]}
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label={menu[5].toppings[2]}
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label={menu[5].toppings[3]}
                />
              </FormGroup>
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Button sx={{ mr: 7 }} variant="contained" size="small">
              Add {menu[5].name} to order
            </Button>
            <Typography>Price:${menu[2].price}</Typography>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card xl={{ Width: 300 }}>
          <CardContent>
            <Box display="flex" justifyContent="space-between">
              <Img alt="pho4" src={pho1} />
              <Typography>
                Comes with:
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label={menu[6].toppings[0]}
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label={menu[6].toppings[1]}
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label={menu[6].toppings[2]}
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label={menu[6].toppings[3]}
                />
              </FormGroup>
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Button sx={{ mr: 7 }} variant="contained" size="small">
              Add {menu[6].name} to order
            </Button>
            <Typography>Price:${menu[2].price}</Typography>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
