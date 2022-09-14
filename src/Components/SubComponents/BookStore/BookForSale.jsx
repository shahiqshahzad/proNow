import React from "react";
import { NavLink } from "react-router-dom";
import moment from "moment";
import GetData from "../../Api/GetData";
import PostData from "../../Api/PostData";
import { message } from "antd";

// const onSale = (d) => {
//   const res = PostData.AddBook(d);
//   res.then((value) => {
//     if (!value.data.success) {
//       message.error(value.data.message);
//     } else {
//       message.success(value.data.message);
//     }
//   });
// };

const BookForSale = (props) => {
  return (
    <div className="col-12 col-sm-6 col-lg-4 p-3">
      <div className="bordr p-1">
        <NavLink
          className="nav-link m-0 p-0"
          to={"/Bookstore/Sale/" + props.Category + "/" + props.Id}
        >
          <img
            className="d-bock mx-auto"
            src={props.image}
            width="100%"
            height="100%"
            alt=""
          />
        </NavLink>

        {/* {props.Img.map(bookImg => {

                           {console.log(bookImg.image)}
                    })} */}
        {/* {console.log(props.Img)} */}
        {/* <img
                  className="d-bock mx-auto"
                  src={props.Img[props.Img.length-1].image}
                  width="100%"
                  height="100%"
                  alt=""
                  loading="lazy"
                /> */}

        {/* {
  props.Images.map((each)=>{return(
    <div>
    <img src={each} alt="" /></div>
  )})
} */}

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
              onClick={() => props.pinnedUnpineed(props.Id)}
              src={props.icon}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookForSale;
