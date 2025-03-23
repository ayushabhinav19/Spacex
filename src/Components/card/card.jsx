import './card.css';

export let Card = ({ name, bio, image, id }) => {
  return (
    <>
      <div className="carddiv">
        <a href={`/details/${id}`}>
          <div className="cardimage">
            <img className="rocketimage" src={image}></img>
          </div>
          <div className="cardabout">
            <div className="cardname">{name}</div>
            <div className="cardbio">
              <p>{bio}</p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};
