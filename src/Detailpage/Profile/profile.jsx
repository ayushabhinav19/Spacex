import { Specs } from '../specs/specs';
import { Launchdetail } from '../Launchdetail/launchdetail';
import './profile.css';

export let Profile = ({ rocketdetails }) => {
  return (
    <div className="mainProfileContainer">
      <div className="rocketnamediv">
        <p className="rocketname">{rocketdetails.rocket_name}</p>
      </div>

      <div className="profilediv">
        <div className="profileimagediv">
          <img
            className="profileimage"
            src={rocketdetails?.flickr_images?.[0] || 'image'}
          ></img>
        </div>

        <div className="profileabout">
          <div className="profilename">{rocketdetails.rocket_name}</div>
          <div className="cardbio">
            <p>{rocketdetails.description}</p>
          </div>
        </div>
      </div>

      <Specs rocketdetails={rocketdetails}></Specs>
      <Launchdetail rocketdetails={rocketdetails}></Launchdetail>
    </div>
  );
};
