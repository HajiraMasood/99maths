import React from "react";

class Note extends React.Component {
  render() {
    return (
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <p className="card-text">{this.props.value.text}</p>
        </div>
      </div>
    );
  }
}

export default Note;
