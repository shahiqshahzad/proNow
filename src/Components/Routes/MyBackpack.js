import React, { useEffect, useState } from "react";
import SecondNavbar from "../SubComponents/SecondNavbar";
import profile from "../../Assets/img/Profile.png";
import Comment from "../SubComponents/Shared/Comment.jsx";
import ClassroomDisplay from "../SubComponents/Classroom/ClassroomDisplay";
import icon from "../../Assets/img/borderBackPack.png";
import pdf from "../../Assets/img/pdf.png";
import folder from "../../Assets/img/folder_icon.png";
import Video from "../../Assets/img/video_icon.png";
import BlueIcon from "../../Assets/img/unpined.svg";
import Book from "../../Assets/img/Book.png";
import File from "../SubComponents/Shared/Files";
import Post from "../SubComponents/Shared/Post";
import Announcement from "../SubComponents/Shared/Announcement";
import BookForSale from "../SubComponents/BookStore/BookForSale";
import GetData from "../Api/GetData";
import PostData from "../Api/PostData";
import { message } from "antd";

const MyBackpack = () => {
  const [profileData, setProfileData] = useState({});
  const [commentData, setCommentData] = useState([]);
  const [bookFavData, setBookFavData] = useState([]);
  const [favServiceData, setFavServiceData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getUserDetails = async () => {
      const response = await GetData.BackPack();
      const responseComment = await GetData.UserComment();
      const bookStore = await GetData.BookFav();
      const favService = await GetData.FavSer();
      setProfileData(response.data.data);
      setCommentData(responseComment.data.data);
      setBookFavData(bookStore.data.books);
      setFavServiceData(favService.data.data);
      // console.log(favServiceData);
      setLoading(false);
    };
    getUserDetails();
  }, []);

  const onSale = (d) => {
    const res = PostData.RemoveBook(d);
    res.then((value) => {
      if (!value.data.success) {
        message.error(value.data.message);
      } else {
        message.success(value.data.message);
      }
    });
  };

  return (
    <>
      <SecondNavbar />
      <div
        className="container-fluid MyBackapck"
        style={{ backgroundColor: "rgb(247, 247, 247)" }}
      >
        <div className="MaxWidth pb-5">
          <div className="row pb-md-3 mx-0">
            <div className="col-11 px-0 mx-auto">
              <div className="row mx-0">
                {loading ? (
                  <div>Loading</div>
                ) : (
                  <>
                    <div className="col-12 col-md-4 mt-3 mx-auto px-1">
                      <div className="card SideCard p-4 mb-3">
                        <img
                          src={profileData.image}
                          className="rounded mx-auto d-block"
                          width="50%"
                          height="50%"
                          alt="Company Name"
                        />
                        <div className="card-body text-center">
                          <h3>{profileData.name}</h3>
                          <p className="mb-0">
                            {profileData.Universityt.univName} <b> | </b>
                            {profileData.Colleget.collegeName}
                          </p>
                          <p className="mb-0">{profileData.Majort.majorName}</p>
                        </div>
                      </div>
                      <div className="card-header mb-1 pb-2 highlight-divs">
                        <span className="mb-0 ">
                          <p className="mb-0 mt-2 FS-18 Bold mx-3">
                            My Comments
                          </p>
                        </span>
                      </div>

                      <div class="comments card SideCard py-4 px-5 mb-3">
                        <div class="card-body p-2 ">
                          {commentData.slice(0, 3).map((data) => (
                            <Comment
                              professorName={data.Subjectt.subjectName}
                              date={data.year}
                              Comment={data.comment}
                            />
                          ))}
                        </div>
                        <div
                          className="col-12 text-center"
                          onClick={console.log("loaded")}
                        >
                          <p
                            className="Bold mb-0"
                            style={{ cursor: "pointer" }}
                          >
                            load More
                          </p>
                        </div>
                      </div>

                      <div className="card-header mb-1 pb-2 highlight-divs">
                        <span className="mb-0 ">
                          <p className="mb-0 mt-2 FS-18 Bold mx-3">
                            My Classrooms
                          </p>
                        </span>
                      </div>

                      <div class="card SideCard p-3">
                        <div class="card-body py-2 pr-2 pl-0">
                          <ClassroomDisplay
                            ClassroomName="Classroom Name"
                            Code="Public"
                            UniversityName="American University of Middle East"
                            AdminName="Admin Name"
                          />
                          <ClassroomDisplay
                            ClassroomName="Classroom Name"
                            Code="c4sd5"
                            UniversityName="American University of Middle East"
                            AdminName="Admin Name"
                          />
                          <ClassroomDisplay
                            ClassroomName="Classroom Name"
                            Code="Public"
                            UniversityName="American University of Middle East"
                            AdminName="Admin Name"
                          />
                        </div>
                        <div
                          className="col-12 text-center"
                          onClick={console.log("loaded")}
                        >
                          <p
                            className="Bold mb-0"
                            style={{ cursor: "pointer" }}
                          >
                            load More
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 col-md-8 mt-3 pl-2">
                      <div class="card p-3 mb-3">
                        <div class="card-header mb-1 pb-3">
                          <span className="mb-0 DarkGray d-inline-flex">
                            <img
                              src={icon}
                              className="pr-3 pt-2"
                              width="35px"
                              height="33px"
                              alt=""
                            />
                            <p
                              className="mb-0 mt-2 FS_16 "
                              style={{ color: "#123F6C" }}
                            >
                              Files(3)
                            </p>
                          </span>
                        </div>

                        <div class="card-body py-2 px-0">
                          <div className="col-12 col-sm-6 col-lg-3 d-inline-flex px-1 mb-3">
                            <File thumbNail={pdf} fileName="Sheets .pdf" />
                            <File thumbNail={folder} fileName="Sheet" />
                          </div>
                          <div className="col-12 col-sm-6 col-lg-3 d-inline-flex px-1 mb-3">
                            <File thumbNail={Video} fileName="Lecture 1" />
                            <File thumbNail={pdf} fileName="Sheets .pdf" />
                          </div>
                          <div className="col-12 col-sm-6 col-lg-3 d-inline-flex px-1 mb-3">
                            <File thumbNail={folder} fileName="Sheet" />
                            <File thumbNail={Video} fileName="Lecture 1" />
                          </div>
                          <div
                            className="col-12 text-center"
                            onClick={console.log("loaded")}
                          >
                            <p
                              className="Bold mb-0"
                              style={{ cursor: "pointer" }}
                            >
                              load More
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="card p-3 mb-3">
                        <div class="card-header mb-1 pb-3">
                          <span className="mb-0 DarkGray d-inline-flex">
                            <img
                              src={BlueIcon}
                              className="pr-3 pt-2"
                              width="35px"
                              height="33px"
                              alt=""
                            />
                            <p
                              className="mb-0 mt-2 FS_16"
                              style={{ color: "#123F6C" }}
                            >
                              Fav Book Store ({bookFavData.length})
                            </p>
                          </span>
                        </div>
                        <div class="row card-body pb-2 pt-0 px-0 m-0">
                          {console.log("book", bookFavData)}
                          {bookFavData.slice(0, 3).map((d) => (
                            <BookForSale
                              Img={d.bookImage}
                              image={Book}
                              Price={d.price}
                              Date={d.createdOn}
                              Name={d.bookName}
                              icon={BlueIcon}
                              Category={d.bookType}
                              Id={d.bookID}
                              pinnedUnpineed={onSale}
                            />
                          ))}
                        </div>
                      </div>
                      <div class="card p-3 mb-3">
                        <div class="card-header mb-1 pb-3">
                          <span className="mb-0 DarkGray d-inline-flex">
                            <img
                              src={icon}
                              className="pr-3 pt-2"
                              width="35px"
                              height="33px"
                              alt=""
                            />
                            <p
                              className="mb-0 mt-2 FS_16"
                              style={{ color: "#123F6C" }}
                            >
                              Favourite Service Spot
                            </p>
                          </span>
                        </div>
                        <div class="card-body py-2 px-0">
                          {console.log("data", favServiceData)}
                          {favServiceData.slice(0, 3).map((d) => (
                            <Post
                              PostTitle={d.Subjectt.subjectName}
                              Date={d.createdOn}
                              Description={d.description}
                            />
                          ))}
                        </div>
                      </div>
                      <div class="card p-3 mb-3">
                        <div class="card-header mb-1 pb-3">
                          <span className="mb-0 DarkGray d-inline-flex">
                            <img
                              src={icon}
                              className="pr-3 pt-2"
                              width="35px"
                              height="33px"
                              alt=""
                            />
                            <p
                              className="mb-0 mt-2 FS_16"
                              style={{ color: "#123F6C" }}
                            >
                              Classroom Announcements (2)
                            </p>
                          </span>
                        </div>
                        <div class="card-body py-2 px-0" id="anno">
                          <Announcement
                            ClassroomName="Classroom Name"
                            AnnouncementsLine="Announcement Line 1"
                            Date="01 July 2020"
                            Description="Description"
                          />
                          <Announcement
                            ClassroomName="Classroom Name"
                            AnnouncementsLine="Announcement Line 1"
                            Date="01 July 2020"
                            Description="Description"
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyBackpack;
