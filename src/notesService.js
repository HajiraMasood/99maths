import axios from "axios";

const BASE_URL = "/api";

export async function fetchNotes() {
  const response = await axios.get(`${BASE_URL}/notes`);
  return response;
}
export async function saveNote(noteText) {
  const newNote = { text: noteText };
  await axios.post(`${BASE_URL}/notes`, newNote);
}
