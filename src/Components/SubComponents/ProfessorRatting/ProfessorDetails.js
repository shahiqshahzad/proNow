import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SecondNavbar from "../SecondNavbar";
import Profile from "../Shared/ProfilingSubjectProfessor";
import User from "../../../Assets/img/user.png";
import HelpfullRating from "../Shared/HelpfullRating";
import GetData from "../../Api/GetData";
import DubaiProfessorImg from "../../../Assets/img/Professor.png";
import { message, Spin } from "antd";
import { NavLink } from "react-router-dom";

const ProfessorDetails = () => {
  const { ProfessorId } = useParams();
  const [professoryData, setProfessoryData] = useState([]);
  const [Loading, setLoading] = useState(true);
  const getData = async () => {
    const data = await GetData.ProfessorMajorDetails(ProfessorId);

    setProfessoryData(data);

    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {console.log(professoryData)}
      <SecondNavbar />
      <div className="container-fluid">
        <div className="MaxWidth">
          <div className="row">
            {Loading ? (
              <Spin />
            ) : (
              <div className=" row col-11 col-md-10 mx-auto my-5 px-0 ">
                <div className="col-12 col-lg-4 px-0 mt-3">
                  {professoryData && (
                    <Profile
                      professorID={professoryData.profID}
                      majorid={professoryData.majorID}
                      Id={professoryData.majorID}
                      Img={professoryData.profLogo}
                      Name={professoryData.profName}
                      Ratting={professoryData.Rating}
                      Grade={professoryData.avgGrade.image}
                      from="Professor"
                      Tags={professoryData.bestTags}
                      hardnessLevel={professoryData.hardLevel.image}
                    />
                  )}
                </div>
                <div className="space-between col-12 col-lg-8 mt-3 pt-5 pt-lg-0">
                  <h3 className="mb-0 text-center">Most HelpFull Ratings</h3>
                  {}
                  {console.log("hardness", professoryData)}

                  {Object.keys(professoryData.helpFull).length !== 0 ? (
                    <>
                      <HelpfullRating
                        commentID={professoryData.helpFull.commentID}
                        ID={professoryData.helpFull.profID}
                        hardness={professoryData.hardLevel.hardname}
                        Name={professoryData.helpFull.User.name}
                        yearTaken={professoryData.helpFull.year}
                        rating={professoryData.helpFull.rating}
                        Feedback={professoryData.helpFull.comment}
                        Subject={professoryData.helpFull.subjectID}
                        Grade={professoryData.helpFull.grade}
                        Like={professoryData.helpFull.like}
                        Dislike={professoryData.helpFull.dislike}
                        Block={professoryData.helpFull.spamReported}
                        Reply={professoryData.helpFull.numberOfReplies}
                        Replies={[]} //{professoryData.helpFull.Reply}
                        Tags={[
                          { Attandace: professoryData.helpFull.attendence },
                          { Exams: professoryData.helpFull.exams },
                          {
                            Again: JSON.stringify(
                              professoryData.helpFull.again
                            ),
                          },
                          { Project: professoryData.helpFull.projects },
                          { HomeWork: professoryData.helpFull.homework },
                          { "Teaching Style": professoryData.helpFull.style },
                          { Curve: professoryData.helpFull.curve },
                        ]}
                        LikedUser={professoryData.UserLikedComments}
                        DisLikedUser={professoryData.UserDisLikeComments}
                        BlockedUsers={professoryData.UserCommentSpams}
                      />
                    </>
                  ) : (
                    <p>No HelpFull Rating Yet</p>
                  )}
                  <div className="my-3 professor-ratingloadmore">
                    <NavLink
                      to={`/ProfessorRating/Comments/${professoryData.profID}`}
                    >
                      <button>Load More</button>
                    </NavLink>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfessorDetails;
