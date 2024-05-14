import React from "react";
import "./Filters-Listings.css";
import Listings from "./hackathons-listings/Listings";

interface HackathonPageProps {
  Pastdata: any;
  Activedata: any;
  isactive: boolean;
}

const FiltersListings: React.FC<HackathonPageProps> = ({
  Activedata,
  Pastdata,
  isactive,
}) => {
  return (
    <div className="hackathons-info">
      {/* <div className="hackathons-filters">
        <p className="visbyroundCF bold hackathons-filters-filter bold">
          Filters
        </p>
        <p className="visbyroundCF demibold hackathons-filters-category bold">
          Category
        </p>
        <select className="hackathons-filters-select">
          <option className="" value="Select">
            Hackathons
          </option>
          <option className="" value="Select">
            Hackathons
          </option>
          <option className="" value="Select">
            Hackathons
          </option>
          <option className="" value="Select">
            Hackathons
          </option>
        </select>
        <p className="visbyroundCF demibold hackathons-filters-date">Date</p>
        <input
          className="visbyroundCF medium hackathons-filters-input-date"
          type="date"
          id="start"
          name="trip-start"
          value="2023-05-25"
        />
        <label htmlFor="myRange">
          <p className="visbyroundCF demibold hackathons-filters-price">
            Price
          </p>
        </label>
        <div className="hyperbola-gradient">
          <input
            className="hackathons-filters-slider"
            type="range"
            id="myRange"
            name="myRange"
            min="Free"
            max="5000"
            step="100"
            defaultValue="0, 5000"
          />
        </div>
        <div className="hackathons-filters-range">
          <div className="hackathons-filters-range-free">
            <p className="visbyroundCF medium">Free</p>
          </div>
          <div className="hackathons-filters-range-5000">
            <p className="visbyroundCF medium">5000</p>
          </div>
        </div>
        <div className="hackathons-filters-min-max">
          <select className="visbyroundCF medium hackathons-filters-min-max-min">
            <option className="visbyroundCF medium" value="Min">
              <p>Min</p>{" "}
            </option>
          </select>
          <p>to</p>
          <select
            className="visbyroundCF medium hackathons-filters-min-max-max"
            value="5000"
          >
            <option className="visbyroundCF medium" value="5000">
              <p>5000</p>{" "}
            </option>
          </select>
        </div>
        <div className="hackathons-filters-free">
          <label className="hackathons-filters-free-label" htmlFor="option1">
            <input
              className="hackathons-filters-free-check"
              type="checkbox"
              id="option1"
              name="options"
              value="Option 1"
            />
          </label>
          <p className=" visbyroundCF medium hackathons-filters-free-text">
            Free Event
          </p>
        </div>
        <p className="visbyroundCF demibold hackathons-filters-rating bold">
          Rating
        </p>
        <select className="hackathons-filters-select">
          <option className="visbyroundCF medium" value="Select">
            {" "}
            5*above{" "}
          </option>
        </select>
      </div> */}
      <div className="hackathon-listings">
        {isactive
          ? Activedata?.map((item: any, index: any) => (
              <React.Fragment key={index}>
                <Listings
                  rectColor="#FFEDB6"
                  hColor="#FFC001"
                  heading={item.heading}
                  para={item.subHeading}
                  id={item.id}
                  date={new Date(item.date).toLocaleString("en-US", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })}
                />
                <hr />
              </React.Fragment>
            ))
          : Pastdata?.map((item: any, index: any) => (
              <React.Fragment key={index}>
                <Listings
                  rectColor="#FFEDB6"
                  hColor="#FFC001"
                  heading={item.heading}
                  para={item.subHeading}
                  date={new Date(item.date).toLocaleString("en-US", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })}
                  id={item.id}
                />
                <hr />
              </React.Fragment>
            ))}

        {/* <Listings
          rectColor="#B2E2C6"
          hColor="#00AB47"
          heading="All India Web Dev Hackathon"
          para="HackerRank Hackathon Contest"
          date="30 May, 2023"
        />
        ;
        <hr />
        <Listings
          rectColor="#FECBC4"
          hColor="#BE1700"
          heading="All India Web Dev Hackathon"
          para="HackerRank Hackathon Contest"
          date="30 May, 2023"
        />
        ;
        <hr />
        <Listings
          rectColor="#FFEDB6"
          hColor="#FFC001"
          heading="All India Web Dev Hackathon"
          para="HackerRank Hackathon Contest"
          date="30 May, 2023"
        />
        ; */}
      </div>
    </div>
  );
};

export default FiltersListings;
