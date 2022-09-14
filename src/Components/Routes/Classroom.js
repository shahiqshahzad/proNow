import React from "react";
import SecondNavbar from "../SubComponents/SecondNavbar";
import SelectionBar from "../SubComponents/Shared/SelectionBar";
import ClassroomData from "../SubComponents/Classroom/ClassroomData";
import ClassroomDisplay from "../SubComponents/Classroom/ClassroomDisplay";

const Classroom = () => {
  return (
    <>
      <SecondNavbar />
      <div> Class Room</div>
    </>
  );
};

// class Classroom extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       DataofClassrooms: ClassroomData,
//       visible: 9,
//     };
//     this.LoadMore = this.LoadMore.bind(this);
//     this.ShowLess = this.ShowLess.bind(this);
//   }

//   LoadMore() {
//     this.setState((old) => {
//       return { visible: old.visible + 3 };
//     });
//   }
//   ShowLess() {
//     this.setState(() => {
//       return { visible: 9 };
//     });
//     const RenderingClassrooms = this.state.DataofClassrooms;
//     console.log(RenderingClassrooms);
//   }

//   render() {
//     const RenderingClassrooms = this.state.DataofClassrooms.slice(
//       0,
//       this.state.visible,
//     ).map((Classroom) => {
//       return (
//         <div className="col-12 col-sm-6 col-lg-4 px-2">
//           <ClassroomDisplay
//             key={Classroom.id}
//             id={Classroom.id}
//             ClassroomName={Classroom.ClassroomName}
//             Code={Classroom.Code}
//             UniversityName={Classroom.UniversityName}
//             AdminName={Classroom.AdminName}
//           />
//         </div>
//       );
//     });
//     return (
//       <>
//         <div style={{ backgroundColor: "#E0EEFF" }}>
//           <SecondNavbar />
//           <SelectionBar buttonValue="+Add Classroom" />
//         </div>
//         <div className="container my-5">
//           <div className="row">
//             <div className="col-12 col-md-7 col-lg-9 px-0 order-2 order-md-1">
//               <div className="row">
//                 {RenderingClassrooms}
//                 {this.state.visible < this.state.DataofClassrooms.length ? (
//                   <div
//                     className="col-12 text-center mb-5"
//                     onClick={this.LoadMore}
//                   >
//                     <p className="Bold" style={{ cursor: "pointer" }}>
//                       load Moresdsd
//                     </p>
//                   </div>
//                 ) : (
//                   <div
//                     className="col-12 text-center mb-5"
//                     onClick={this.ShowLess}
//                   >
//                     <p className="Bold" style={{ cursor: "pointer" }}>
//                       Show Less
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </div>
//             <div className="col-12 col-sm-6 col-md-5 col-lg-3 pr-0 mx-auto order-1 order-md-2 mb-4">
//               <div class="card">
//                 <div
//                   class="mb-1 px-4 py-3"
//                   style={{ backgroundColor: "#3679BC" }}
//                 >
//                   <h5 className="mb-0" style={{ color: "white" }}>
//                     My Classroom
//                   </h5>
//                 </div>
//                 <div class="card-body p-3">
//                   <ClassroomDisplay
//                     ClassroomName="Classroom Name"
//                     Code="Public"
//                     UniversityName="American University of Middle East"
//                     AdminName="Admin Name"
//                   />
//                   <ClassroomDisplay
//                     ClassroomName="Classroom Name"
//                     Code="c4sd5"
//                     UniversityName="American University of Middle East"
//                     AdminName="Admin Name"
//                   />
//                   <ClassroomDisplay
//                     ClassroomName="Classroom Name"
//                     Code="Public"
//                     UniversityName="American University of Middle East"
//                     AdminName="Admin Name"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

export default Classroom;
