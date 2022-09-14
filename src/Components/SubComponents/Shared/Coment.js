import React from "react";
import axios from "axios";
import { message } from "antd";

class Coment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
    };
  }

  handleChange = (e) => {
    this.setState({ comment: e.target.value });
  };

  sendComent = (comentID, comment, profID, subjectID) => {
    axios
      .post("professors/comments/addReplay", {
        commentID: comentID,
        comment: comment,
        profID: profID,
        subjectID: subjectID,
      })
      .then((res) => {
        console.log(res);
        if (res.data.success == true) {
          message.success("Your Comment is submitted Successfully ");
          this.setState({ comment: "" });
        } else {
          message.error(res.data.message);
          this.setState({ comment: "" });
        }
      });
  };

  render(props) {
    return (
      <>
        {console.log(this.props)}
        <input
          className="comentFeild form-control"
          placeholder="Enter your Comment"
          value={this.state.comment}
          onChange={this.handleChange}
        />
        <button
          onClick={() =>
            this.sendComent(
              this.props.id,
              this.state.comment,
              this.props.ID,
              this.props.subjectId
            )
          }
          className="commentSend Round_edge button filled_btn widthMaxContent px-3 py-2 mr-2"
          type="button"
        >
          Send
        </button>
      </>
    );
  }
}

export default Coment;
