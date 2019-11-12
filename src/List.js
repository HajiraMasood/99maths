import React from "react";

class List extends React.Component {
  showList(list) {
    const notes = [...list];
    const listItems = notes.map(note => {
      return (
        <div className="col-md-4" key={note._id}>
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <p className="card-text">{note.text}</p>
            </div>
          </div>
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
