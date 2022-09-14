import React from "react";
import { NavLink } from "react-router-dom";
import moment from "moment";

const ServiceForSale = (props) => {
  console.log(props.Id);
  return (
    <div className="col-12 col-sm-6 col-lg-4 p-3">
      <div className="bordr p-1">
        <NavLink
          className="nav-link m-0 p-0"
          to={"/ServiceProvider/Sale/" + props.Category + "/" + props.Id}
        >
          <img
            className="d-bock mx-auto"
            src={props.image}
            width="100%"
            height="200px"
            alt=""
          />
        </NavLink>

        <div className="row m-0 mt-1">
          <div className="col-4 pl-1 pr-1">
            <p className="text-left mb-1 FS_18 Bold Black">${props.Price}</p>
          </div>
          <div className="col-8 pr-1 pl-1">
            <p className="text-right my-1 FS_12 Black">
              {moment(props.Date).format("DD MMMM YYYY")}
            </p>
          </div>
          <div className="col-10 pl-1 pr-1">
            <p className="text-left mb-1 Black">{props.Name}</p>
          </div>
          <div className="col-2 pr-1 pl-1">
            <img
              className="d-block ml-auto"
              src={props.icon}
              alt=""
              onClick={() => props.pinnedService(props.Id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceForSale;
