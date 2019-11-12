import React from "react";
import "./App.css";

class List extends React.Component {
  showList(list) {
    const notes = [...list];
    const listItems = notes.map(note => {
      return <li>{note}</li>;
    });
    return <ul>{listItems}</ul>;
  }

  render() {
    return <div>{this.showList(this.props.value)}</div>;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteText: "",
      list: []
    };
  }

  updateNoteText(event) {
    const inputText = event.target.value;
    this.setState({ noteText: inputText });
    console.log(this.state.noteText);
  }

  saveNote() {
    const savedList = [...this.state.list, this.state.noteText];
    this.setState({ list: savedList });
    console.log(this.state.list);
  }

  render() {
    return (
      <div className="App">
        <header>
          <h3>Notes Keep</h3>
        </header>
        <body>
          <div>
            <input
              className="note"
              type="textarea"
              value={this.state.noteText}
              onChange={e => this.updateNoteText(e)}
            ></input>
            <button onClick={() => this.saveNote()}>Save</button>
          </div>
          <div>
            <List value={this.state.list} />
          </div>
        </body>
      </div>
    );
  }
}

export default App;
