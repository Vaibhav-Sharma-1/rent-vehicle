import React from "react";
import porche from "../../../images/porche.png";
import SelectCity from "./select-menu/SelectCity";
import Icon from "./bottom-icons/Icon";
import "./HomeContainer.scss";

const HomeContainer = () => {
  let image = [];
  for (let i = 0; i <= 5; i++) {
    image.push(<Icon />);
  }

  return (
    <>
      <div className="home__main-container">
        <div className="home__first">
          <div className="home__heading">
            <p>---Welcome to Satos</p>
            <h1>Rent the best Quality Vehicle's with us.</h1>
            <p>
              lorem jkhdfjks sf sdjkfs gsdfjkg sdfgdg dfg sdfgjk sdfg
              sdfjkgdjkgreisdk sdg sdjkg gsdfjkg sdfjkgkdfhjkds g gsjkg djk gs g
              dk gjksdfg fgdjk
            </p>
            <div className="home__buttons">
              <button className="book-vehicle" type="button">
                Book your Ride
              </button>
              <button className="explore-us" type="button">
                Sell your Vehicle
              </button>
            </div>
          </div>

          <div className="home__image">
            <img src={porche} alt="car" />
          </div>
        </div>

        <div className="home__middle col-3">
          <div className="location home__middle-common">
            <SelectCity />
          </div>

          <div className="pick-date home__middle-common">
            <input className="pick-date" type="date" />
          </div>

          <div className="return-date home__middle-common">
            <input type="date" />
          </div>
        </div>

        <div className="home__bottom ">
          {image.map((data, index) => (
            <React.Fragment key={index}>{data}</React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeContainer;
