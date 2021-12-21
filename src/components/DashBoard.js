import React, { Component } from "react";
import CreateAwardButton from "./award/CreateAwardButton";
import AwardItem from "./award/AwardItem";

class DashBoard extends Component {
  render() {
    return (
      <div className="awards">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Award Interpreter</h1>
              <br />
              <CreateAwardButton />
              <br />
              <hr />
              <AwardItem />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DashBoard;
