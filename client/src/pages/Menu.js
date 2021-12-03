import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import taco1 from "./images/taco.jpg";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Img = styled("img")({
  display: "block",
  maxWidth: "150px",
  maxHeight: "",
});

const menu = {
taco1: "Al Pastor",
taco2: "Pho Taco",
taco3: "Whatataco"
}


export default function BasicCard() {
  return (
    <Grid container spacing={2}>
      <Grid item md={3}>
        <Card xl={{ Width: 300 }}>
          <CardContent>
            <Box display="flex" justifyContent="space-between">
            <Img alt="taco" src={taco1} />
            
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="CHZ"
              />
                            <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="LTC"
              />
                                          <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="JLP"
              />                                          <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="SS"
            />
            </FormGroup>
            </Box>
          </CardContent>
          <CardActions>
            <Button variant="contained" size="small">Add {menu.taco1} to order</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item md={3}>
        <Card xl={{ Width: 300 }}>
          <CardContent>
            <Box display="flex" justifyContent="space-between">
            <Img alt="taco" src={taco1} />
            
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="CHZ"
              />
                            <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="LTC"
              />
                                          <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="JLP"
              />                                          <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="SS"
            />
            </FormGroup>
            </Box>
          </CardContent>
          <CardActions>
            <Button variant="contained" size="small">Add {menu.taco2} to order</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item md={3}>
        <Card xl={{ Width: 300 }}>
          <CardContent>
            <Box display="flex" justifyContent="space-between">
            <Img alt="taco" src={taco1} />
            
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="CHZ"
              />
                            <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="LTC"
              />
                                          <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="JLP"
              />                                          <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="SS"
            />
            </FormGroup>
            </Box>
          </CardContent>
          <CardActions>
            <Button variant="contained" size="small">Add {menu.taco3} to order</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
