import React from "react";
import Note from "./Note";

class List extends React.Component {
  showList(list) {
    const notes = [...list];
    const listItems = notes.map(note => {
      return (
        <div className="col-md-4" key={note._id}>
          <Note value={note} />
        </div>
      );
    });
    return <div className="row">{listItems}</div>;
  }

  render() {
    return <div>{this.showList(this.props.value)}</div>;
  }
}

export default List;
