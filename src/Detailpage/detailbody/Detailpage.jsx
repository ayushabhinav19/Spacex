import './Detailpage.css';
import { useParams } from 'react-router';
import { Navbar } from '../../Homepage/Navbar/Navbar';
import { Statusbar } from '../statusbar/statusbar';
import { Profile } from '../Profile/profile';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Detailpage = ({ name }) => {
  const [rocketdetails, setrocketdetails] = useState({});

  let { id } = useParams();

  let getspecificdata = async () => {
    try {
      const responsedata = await axios.get(
        `https://api.spacexdata.com/v3/rockets/${id}`
      );
      if (responsedata.status == 200) {
        setrocketdetails(responsedata.data);
      }
    } catch (err) {
      console.log('error');
    }
  };
  console.log(rocketdetails);

  useEffect(() => {
    getspecificdata();
  }, []);

  return (
    <div className="detailpage">
      <Navbar heading={'Rocket Exploror'}></Navbar>

      <div className="detailmaindiv">
        <Statusbar></Statusbar>

        <div className="profilemaindiv">
          <Profile rocketdetails={rocketdetails}></Profile>
        </div>
      </div>
    </div>
  );
};
