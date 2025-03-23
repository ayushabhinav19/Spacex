import { Card } from '../../Components/card/card';
import { useEffect, useState } from 'react';
import './body.css';
import axios from 'axios';

export let Homepagebody = () => {
  const [rocketdata, setrocketdata] = useState([]);

  const getdata = async () => {
    try {
      const response = await axios.get('https://api.spacexdata.com/v3/rockets');
      if (response.status === 200) {
        setrocketdata(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div className="homediv">
      <div className="hometextdiv">
        <p className="hometext">SpaceX Rockets</p>
      </div>
      <div className="cardmaindiv">
        {rocketdata.map((data) => {
          return (
            <Card
              id={data.rocket_id}
              name={data.rocket_name}
              bio={data.country}
              image={data.flickr_images[0]}
            ></Card>
          );
        })}
      </div>
    </div>
  );
};
