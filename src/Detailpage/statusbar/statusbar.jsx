import { useEffect, useState } from 'react';
import './statusbar.css';
import axios from 'axios';

export let Statusbar = () => {
  const [rockectnames, setrocketnames] = useState([]);

  const getrocketname = async () => {
    try {
      const responsename = await axios.get(
        'https://api.spacexdata.com/v3/rockets'
      );
      if (responsename.status == 200) {
        setrocketnames(responsename.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getrocketname();
  }, []);
  return (
    <div className="namelistdiv">
      <div className="namelistheading">Rocket List :-</div>

      {rockectnames.map((data) => {
        return (
          <a href={`/details/${data.rocket_id}`}>
            <div className="namelist">{data.rocket_name}</div>
          </a>
        );
      })}
    </div>
  );
};
