import './specs.css';

export let Specs = ({ rocketdetails }) => {
  return (
    <div className="specsdiv">
      <div className="specstext">
        <p>Specs</p>
      </div>

      <div className="capacitydiv">
        <Capacity
          name={'Height'}
          value={`${rocketdetails.height?.meters} M`}
        ></Capacity>
        <Capacity
          name={'Diameter'}
          value={`${rocketdetails.diameter?.meters} M`}
        ></Capacity>
        <Capacity
          name={'Mass'}
          value={`${rocketdetails.mass?.kg} KG`}
        ></Capacity>
        <Capacity
          name={'Cost of launch'}
          value={`$ ${rocketdetails.cost_per_launch}`}
        ></Capacity>
        <Capacity
          name={'Engine Fuel'}
          value={rocketdetails.engines?.propellant_1}
        ></Capacity>
        <Capacity
          name={'Engine Type'}
          value={rocketdetails.engines?.type}
        ></Capacity>
      </div>
    </div>
  );
};

export let Capacity = ({ name, value }) => {
  return (
    <>
      <div className="capacity1div">
        <div className="capacityname">{name}</div>
        <div className="capacitydetail">{value}</div>
      </div>
    </>
  );
};
