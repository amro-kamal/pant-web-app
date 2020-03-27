import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClosedCaptioning } from "@fortawesome/free-solid-svg-icons";
class WebClasificationDiv extends Component {
  componentDidMount() {
    console.log("openPicker");
    document.getElementById("file-input").click();
  }
  showPicked = e => {
    console.log("showPicked");
    console.log("file uploaded", e.target.files[0]);

    // document.getElementById("upload-label").innerHTML = e.target.files[0].name;
    var reader = new FileReader();
    reader.onload = e => {
      document.getElementById("image-picked").src = e.target.result;
      document.getElementById("image-picked").className = "image-picked";
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  analyze = () => {
    console.log("analyze");

    var uploadedFiles = document.getElementById("file-input").files;

    if (uploadedFiles.length !== 1) alert("Please select a file to analyze!");
    else {
      document.getElementById("analyze-button").innerHTML = "Analyzing...";

      console.log("uploadFiles", uploadedFiles[0]);

      var formdata = new FormData();
      let imagefile = uploadedFiles[0];
      formdata.append("imageData", imagefile);

      for (var p of formdata) {
        console.log("formdata element ", p);
      }

      // var loc = window.location;
      fetch("http://localhost:4000/api/classify", {
        method: "post",
        // headers: { "Content-Type": "application/json" },
        body: formdata // JSON.stringify(formdata)
      })
        .then(res => res.json())
        .then(data => console.log(data));
    }
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row d-flex justify-content-center classification-box shadow">
            <div className="col-4 col-lg-3">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link active">Active</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Disabled</a>
                </li>
              </ul>
            </div>

            <div className="col-8 col-lg-5 ">
              <div className="no-display">
                <input
                  id="file-input"
                  className="no-display"
                  type="file"
                  name="file"
                  accept="image/*"
                  onChange={this.showPicked}
                />
              </div>

              <img
                id="image-picked"
                className="no-display"
                alt="Chosen Image"
                height={200}
                width={200}
              />
              <div>
                <button
                  id="analyze-button"
                  className="analyze-button"
                  type="button"
                  onClick={this.analyze}
                >
                  Analyze
                </button>
              </div>
            </div>

            <div className="col col-lg-4">
              <div className="result-label">
                <label id="result-label" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WebClasificationDiv;
// class WebClasificationDiv extends Component {
//   state = {};
//   render() {

//   }
// }

// export default WebClasificationDiv;

{
  /* <button
            id="btn"
            className="choose-file-button"
            type="button"
            onClick={this.openPicker}
          >
            Select Image
          </button> */
}
{
  /* <div className="upload-label">
            <label id="upload-label">No file chosen</label>
          </div> */
}
