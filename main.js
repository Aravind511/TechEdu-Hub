function searchNotes() {
    let input = document.getElementById("search").value.toLowerCase();
    let notes = document.querySelectorAll("#notes-list li");
    
    notes.forEach(note => {
        if (note.textContent.toLowerCase().includes(input)) {
            note.style.display = "block";
        } else {
            note.style.display = "none";
        }
    });
}
function showSubjects(year) {
    const subjects = {
        1: ["Mathematics", "Physics", "Chemistry", "Engineering Drawing"],
        2: ["Data Structures", "Object-Oriented Programming", "Database Management", "Digital Electronics"],
        3: ["Algorithms", "Operating Systems", "Computer Networks", "Software Engineering"],
        4: ["Machine Learning", "Artificial Intelligence", "Cloud Computing", "Cyber Security"]
    };

    const notesList = document.getElementById("notes-list");
    notesList.innerHTML = ""; // Clear previous subjects

    subjects[year].forEach(subject => {
        let li = document.createElement("li");
        li.textContent = subject;
        li.style.display = "block"; // Show subject
        notesList.appendChild(li);
    });
}
