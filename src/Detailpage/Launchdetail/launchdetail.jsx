import './launchdetail.css';
import { Rocket } from 'lucide-react';

export let Launchdetail = ({ rocketdetails }) => {
  const dataArray = [];
  for (let i = 0; i < rocketdetails.payload_weights?.length; i++) {
    dataArray.push(
      <Launch
        payloadname={rocketdetails.payload_weights?.[i]?.name}
        idname={rocketdetails.payload_weights?.[i]?.id}
        weight={rocketdetails.payload_weights?.[i]?.kg}
      ></Launch>
    );
  }

  return (
    <div className="launchdetailmaindiv">
      <div className="specstext">
        <p>Launch History</p>
      </div>

      {dataArray}
    </div>
  );
};

export let Launch = ({ payloadname, idname, weight }) => {
  return (
    <div className="launchdiv">
      <div className="launchabout">
        <div className="launchemoji">
          <Rocket color="beige" />
        </div>
        <div className="launchstatusdiv">
          <div className="launchname">{payloadname}</div>
          <div className="launchstatus">{idname}</div>
        </div>
      </div>
      <div className="launchdate">{weight}</div>
    </div>
  );
};
