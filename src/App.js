import React from "react";
import "./App.css";
import List from "./List";
import * as NotesService from "./notesService";
import { allResolved } from "q";

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
    const response = await NotesService.fetchNotes();
    const allNotes = response.data;

    this.setState({ list: allNotes });
  }

  async saveNote() {
    await NotesService.saveNote(this.state.noteText);
    await this.fetchNotes();
  }

  render() {
    return (
      <div>
        <header className="navbar navbar-dark shadow-sm">
          <h3>Notes Keep</h3>
        </header>
        <div className="jumbotron text-center">
          <section>
            <div className="container">
              <p className="form-group">
                <textarea
                  className="form-control"
                  value={this.state.noteText}
                  placeholder="Add New Note"
                  onChange={event => this.updateNoteText(event)}
                ></textarea>
              </p>
              <p>
                <button
                  className="btn btn-primary my-2"
                  onClick={() => this.saveNote()}
                >
                  Save
                </button>
              </p>
            </div>
          </section>

          <div className="album py-5 bg-light">
            <div className="container">
              <List value={this.state.list} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
