import React from "react";
import { NavLink } from "react-router-dom";

const Profile = (props) => {
  return (
    <>
      <div className="row ShadowBordr Round25 text-center py-3">
        <div className="col-12 px-0">
          <img src={props.Img} alt="" className="d-block mx-auto" />
        </div>
        <div className="col-12">
          <h3>{props.Name}</h3>
        </div>
        <div className="col-12">
          <b>{props.subjectDescription}</b>
        </div>

        <div className="row container w-100 ">
          <div className="col px-xl-3 px-lg-1 px-sm-3 px-1 Rating">
            <div className="Edge btm_shadow">
              <div className="p-2">
                <p>Average Grade</p>
                <img src={props.Grade} alt="" />
              </div>
              <div>
                <NavLink
                  className="nav-link m-0 p-0 mx-auto"
                  to={`/ProfessorRating/RateMe/${props.majorid}/${props.professorID}`}
                >
                  <button className=" w-100 border-0  filled_btn d-block bottom-0">
                    Rate Me
                  </button>
                </NavLink>
              </div>
            </div>
          </div>

          <div className="col px-xl-3 px-lg-1 px-sm-3 px-1 Rating">
            <div className="Edge btm_shadow ">
              <div className="p-2 overallRating ">
                <p>Overall Rating</p>
                <div className="position-realitive backStar ">
                  {/* <img src={Star} alt="" /> */}
                  <p className="overallrating-value">{props.totalRating}</p>
                </div>
              </div>
              <div>
                <NavLink to={`/ProfessorRating/Comments/${props.ProfessorID}`}>
                  <button className="  w-100 border-0 filled_btn d-block bottom-0">
                    view Ratting
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col px-xl-3 px-lg-1 px-sm-3 px-1 Rating">
            <div className="Edge btm_shadow">
              <div className="p-2">
                <p>Hardness Level</p>
                <img src={props.hardLevel} alt="" />
              </div>
              <div>
                <button className="w-100 border-0 filled_btn d-block bottom-0">
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="ratting-document-btn container mt-3 ">
          <NavLink
            className="nav-link m-0 p-0 mx-auto"
            to={`/SubjectRating/RateMe/${props.majorID}/${props.subjectID}`}
          >
            <button className=" w-100 border-0 filled_btn d-block bottom-0">
              Rate Me
            </button>
          </NavLink>
        </div>
        <div className="col-12 mt-3 px-0">
          <p className="FS_20 mb-0 Bold">Top 3 tags or this {props.from}</p>
        </div>
        <div className="ratingbesttags row btn-group col-12 mx-auto px-3">
          {props.Tags.length === 0 ? (
            <h4 className="my-4">No Tags</h4>
          ) : (
            props.Tags.map((each) => {
              return (
                <div className="widthMaxContent  mx-auto px-0 mt-3">
                  <button
                    type="button"
                    className=" p-2 FS_12 Bold vhTo50 empty_btn button py-2"
                  >
                    {each}
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
