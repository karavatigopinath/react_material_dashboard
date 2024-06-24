import { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";
import LinearProgress from "@mui/material/LinearProgress";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BoltIcon from "@mui/icons-material/Bolt";
import LocationOnIcon from '@mui/icons-material/LocationOn';
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];
function App() {
  const [count, setCount] = useState(0);

  return (
    <>  
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
              <CardContent sx={{ height: 100 }}>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  align="left"
                  gutterBottom
                >
                  Daily Sales
                </Typography>
                <Typography
                  sx={{
                    mb: 1.5,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                  color="text.secondary"
                >
                  <div>
                    <NorthIcon color="primary" /> $249.95
                  </div>
                  <div>
                    <small>67%</small>
                  </div>
                </Typography>

                <Typography variant="body2">
                  <LinearProgress variant="determinate" value={47} />
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
              <CardContent sx={{ height: 100 }}>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  align="left"
                  gutterBottom
                >
                  Monthly Sales
                </Typography>
                <Typography
                  sx={{
                    mb: 1.5,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                  color="text.secondary"
                >
                  <div>
                    <SouthIcon color="error" /> $2.942.32
                  </div>
                  <div>
                    <small>47%</small>
                  </div>
                </Typography>

                <Typography variant="body2">
                  <LinearProgress
                    variant="determinate"
                    value={47}
                    color="secondary"
                  />
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
              <CardContent sx={{ height: 100 }}>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  align="left"
                  gutterBottom
                >
                  Yearly Sales
                </Typography>
                <Typography
                  sx={{
                    mb: 1.5,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                  color="text.secondary"
                >
                  <div>
                    <NorthIcon color="primary" /> $8.638.32
                  </div>
                  <div>
                    <small>80%</small>
                  </div>
                </Typography>

                <Typography variant="body2">
                  <LinearProgress variant="determinate" value={80} />
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
              <CardContent sx={{ height: 405 }}>
                <Typography variant="h5" align="left">
                  Recent Users
                </Typography>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            <AccountCircleIcon />
                          </TableCell>
                          <TableCell align="right">
                            {row.name}
                            <br />
                            <small>sample text</small>
                          </TableCell>
                          <TableCell align="right">21-Jun-2024</TableCell>
                          <TableCell align="right">
                            {" "}
                            <Button variant="contained" color="secondary">
                              Reject
                            </Button>
                            <Button sx={{ ml: 1 }} variant="contained">
                              Approve
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
              <CardContent>
                <Typography
                  sx={{
                    fontSize: 14,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                  color="text.secondary"
                  gutterBottom
                  align="left"
                  variant="h5"
                >
                  Upcoming Events{" "}
                  <Button
                    variant="contained"
                    sx={{ borderRadius: 100 }}
                    color="secondary"
                  >
                    34%
                  </Button>
                </Typography>
                <Typography
                  sx={{ mb: 1.5 }}
                  color="text.secondary"
                  variant="h3"
                  align="left"
                >
                  45 <small>Compititors</small>
                </Typography>
                <Typography variant="body2" align="left">
                  You can participate in event
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box sx={{ minWidth: 275, marginTop: 2 }}>
            <Card variant="outlined">
              <CardContent sx={{ display: "flex", alignItems:"center" }}>
                <BoltIcon sx={{fontSize:50}} color="primary" />
                <div>
                  <Typography variant="h3" component="div">
                    235
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    TOTAL IDEAS
                  </Typography>
                </div>
              </CardContent>
              <CardContent sx={{ display: "flex", alignItems:"center" }}>
                <LocationOnIcon sx={{fontSize:50}} color="primary" />
                <div>
                  <Typography variant="h3" component="div">
                    26
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    TOTAL LOCATIONS
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
