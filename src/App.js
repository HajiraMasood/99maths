import React from "react";
import "./App.css";
import axios from "axios";

const BASE_URL = "/api";

class List extends React.Component {
  showList(list) {
    const notes = [...list];
    const listItems = notes.map(note => {
      return (
        <div class="col-md-4" key={note._id}>
          <div class="card mb-4 shadow-sm">
            <div class="card-body">
              <p class="card-text">{note.text}</p>
            </div>
          </div>
        </div>
      );
    });
    return <div class="row">{listItems}</div>;
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

  componentDidMount() {
    this.fetchNotes();
  }

  updateNoteText(event) {
    const inputText = event.target.value;
    this.setState({ noteText: inputText });
  }

  async fetchNotes() {
    const response = await axios.get(`${BASE_URL}/notes`);
    const allNotes = response.data;

    this.setState({ list: allNotes });
  }

  async saveNote() {
    const newNote = { text: this.state.noteText };
    await axios.post(`${BASE_URL}/notes`, newNote);
    await this.fetchNotes();
  }

  render() {
    return (
      <div>
        <header class="navbar navbar-dark shadow-sm">
          <h3>Notes Keep</h3>
        </header>
        <body class="jumbotron text-center">
          <section>
            <div class="container">
              <p class="form-group">
                <textarea
                  class="form-control"
                  value={this.state.noteText}
                  placeholder="Add New Note"
                  onChange={event => this.updateNoteText(event)}
                ></textarea>
              </p>
              <p>
                <button
                  class="btn btn-primary my-2"
                  onClick={() => this.saveNote()}
                >
                  Save
                </button>
              </p>
            </div>
          </section>

          <div class="album py-5 bg-light">
            <div class="container">
              <List value={this.state.list} />
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
