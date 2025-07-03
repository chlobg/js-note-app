const noteInput = document.getElementById("note");
const saveButton = document.getElementById("saveNote");
const noteList = document.getElementById("noteList");

document.addEventListener("DOMContentLoaded", loadNotes);

saveButton.addEventListener("click", () => {
  const noteText = noteInput.value.trim();

  if (noteText === "") return;

  const note = {
    id: Date.now(),
    text: noteText,
  };

  const notes = getNotes();
  notes.push(note);
  localStorage.setItem("notes", JSON.stringify(notes));

  addNoteToDOM(note);
  noteInput.value = "";
});

function getNotes() {
  const notes = localStorage.getItem("notes");
  return notes ? JSON.parse(notes) : [];
}

function loadNotes() {
  const notes = getNotes();
  const emptyMessage = document.getElementById("noteEmpty");

  if (notes.length === 0) {
    emptyMessage.style.display = "flex";
  } else {
    emptyMessage.style.display = "none";
    notes.forEach(addNoteToDOM);
  }
}

function addNoteToDOM(note) {
  const div = document.createElement("div");
  div.className = "note__item";
  div.innerHTML = `
    <div class="note__meta">${formatDate(note.id)}</div>
    <p>${note.text}</p>
    <button class="note__delete" data-id="${
      note.id
    }" title="Delete note">🗑️</button>
  `;
  noteList.appendChild(div);
}

function formatDate(timestamp) {
  const now = new Date(timestamp);
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const period = hours >= 12 ? "PM" : "AM";
  const formattedHour = hours % 12 || 12;
  return `Today at ${formattedHour}:${minutes} ${period}`;
}

noteList.addEventListener("click", (e) => {
  if (e.target.classList.contains("note__delete")) {
    const id = Number(e.target.getAttribute("data-id"));
    deleteNote(id);
  }
});

function deleteNote(id) {
  let notes = getNotes().filter((note) => note.id !== id);
  localStorage.setItem("notes", JSON.stringify(notes));
  noteList.innerHTML = "";
  loadNotes();
}
