import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Map, Marker } from "pigeon-maps";
import ddata from "./UserList";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((e) => {
      setData(e.data);
      console.log(data);
    });
  }, []);

  return (
    <div className="App">
      <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={0}>
        {ddata.map((e) => {
          return (

          <Marker width={50} anchor={[e.address.geo.lat,e.address.geo.lng]} />
          
          )

        })}
      </Map>

      {ddata.map((e) =>  {
        return( 
          <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {e.name}
        </Typography>
        <Typography variant="h5" component="div">

        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {e.username} | {e.email}
        </Typography>
       
      </CardContent>
      <CardActions>
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">

        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={e.phone} size="small">Phone</Button>
    <Button size="small" href={e.website}>Website</Button>
      </CardActions>
    </Card>
      </CardActions>
    </Card>
        )
      })}
      
    </div>
  );
}

export default App;
