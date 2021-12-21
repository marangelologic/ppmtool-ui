import React, { Component } from "react";

class AddAward extends Component {
  constructor() {
    super();

    this.state = {
      awardName: "",
      awardIdentifier: "",
      description: "",
      start_date: "",
      validity_date: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newAward = {
      awardName: this.state.awardName,
      awardIdentifier: this.state.awardIdentifier,
      description: this.state.description,
      start_date: this.state.start_date,
      validity_date: this.state.validity_date,
    };

    console.log(newAward);
  }

  render() {
    return (
      <div>
        {
          //check name attribute input fields
          //create constructor
          //set state
          //set value on input fields
          //create onChange function
          //set onChange on each input field
          //bind on constructor
          //check state change in the react extension
        }

        <div className="award">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">Create Award form</h5>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <h6 className="left-align-label">Award ID</h6>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Award ID"
                      name="awardIdentifier"
                      value={this.state.awardIdentifier}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <h6 className="left-align-label">Award Name</h6>
                    <input
                      type="text"
                      className="form-control form-control-lg "
                      placeholder="Award Name"
                      name="awardName"
                      value={this.state.awardName}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <h6 className="left-align-label">Description</h6>
                    <textarea
                      className="form-control form-control-lg"
                      placeholder="Award Description"
                      name="description"
                      value={this.state.description}
                      onChange={this.onChange}
                    />
                  </div>
                  <h6 className="left-align-label">Start Date</h6>
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      name="start_date"
                      value={this.state.start_date}
                      onChange={this.onChange}
                    />
                  </div>
                  <h6 className="left-align-label">Validity Date</h6>
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      name="validity_date"
                      value={this.state.validity_date}
                      onChange={this.onChange}
                    />
                  </div>

                  <input
                    type="submit"
                    className="btn btn-primary btn-block mt-4"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AddAward;
