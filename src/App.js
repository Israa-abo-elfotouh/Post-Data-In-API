import { Component } from "react";
import "../src/style.css";
import ImageUpload from "./ImageUpload";

// post data in api
class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    profile: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  postData = async () => {
    try {
      const response = await fetch(
        "https://webhook.site/4c9bd1dc-b7f7-4c46-975e-200481dd1d65",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.state),
        }
      );

      console.log("Data posted successfully");
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };
  // end post data in api


  opendiv = () => {
    let thediv = document.getElementById("overlay");
    thediv.style.transform = "scale(1)";
  };

  closediv = () => {
    let thediv = document.getElementById("overlay");
    thediv.style.transform = "scale(0)";
  };

  render() {
    return (
      <>
        <div className="bg">
          <div className="z-3 position-absolute tittle">
            <h1>welcome!</h1>
            <h3>
              We are delighted to have you visit our website. You can click here
              to fill out the form to join us. We kindly request that you fill
              out the form in English for better understanding and
              communication.
            </h3>
            <input value={"Click Here"} type="button" onClick={this.opendiv} />
          </div>

          <div className="bg-overlay"></div>
          <div className="overlay" id="overlay">
            <div className="contentoverlay container">
              <div className="row mb-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="name@example
                    com"
                    id="inputEmail4"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="col">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    id="inputPassword4"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="mb-3">
                <ImageUpload />
              </div>

              <button onClick={this.postData} className="btn btn-success m-2">
                Submit
              </button>
              <button onClick={this.closediv} className="btn btn-danger m-2">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
