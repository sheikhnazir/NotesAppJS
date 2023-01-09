console.log('Welcome to Notes App. This is app.js')
showNotes();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    showNotes();
});

//Function to delete all elements of 
let deleteBtn = document.getElementById("deleteBtn");
deleteBtn.addEventListener("click", function (e) {
    if (confirm("Do You want to delete all the Notes") == true) {
        localStorage.clear();
        showNotes();
    }
})

//Function to clear TextField
let clearText = document.getElementById("clearText");
clearText.addEventListener("click", function (e) {
    let addTxt1 = document.getElementById("addTxt");

    addTxt1.value = "";
    console.log("clearText Working!...");
})

// Function to show elements from localStorage
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
              <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                      <div class="card-body">
                          <h5 class="card-title">Note ${index + 1}</h5>
                          <p class="card-text"> ${element}</p>
                          <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                          
                      </div>
                  </div>`;
    });
    let notesEle = document.getElementById("notes");
    if (notesObj.length != null) {
        notesEle.innerHTML = html;
    } else {
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
}


// Function to delete a note
function deleteNote(index) {
    //   console.log("I am deleting", index);

    if (confirm("Do you really want to delete this note!") == true) {
        let notes = localStorage.getItem("notes");
        if (notes == null) {
            notesObj = [];
        }
    } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}
// Search Method
let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})

/*
Further Features:
1. Add Title
2. Mark a note as Important
3. Separate notes by user
4. Sync and host to web server 
*/

/*
Further Features:
1. Add Title
2. Mark a note as Important
3. Separate notes by user
4. Sync and host to web server 
*/

// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/naazie/NotesApp.git
// git push -u origin main