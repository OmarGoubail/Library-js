let myLibrary = [];



form_div = document.querySelector('.book_form')
form = document.getElementById('form');
submit_btn = document.getElementById('submit_book_btn');
Add_btn = document.getElementById('add_book_btn');
close_btn = document.getElementById('close_form_btn')



function Book(title, author, pages, reading_status) {
  // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.reading_status = reading_status;
}


const Book1 = new Book('War and Peace', 'Tolstoy, Leo', 967, 'Read')

myLibrary.push(Book1)



function addBookToLibrary() {
  // do stuff here
    let formData = new FormData(form)

    let title = formData.get('title')
    let author = formData.get('author')
    let pages = formData.get('pages')
    let reading_status = formData.get('reading_status') == "read" ? 'Read' : "Not read yet" 

    myLibrary.push(new Book("Hard Times", "Dickens, Charles", '460', 'Not read yet'))
    // console.log(myLibrary)



}







//add Book to Library
submit_btn.addEventListener("click", addBookToLibrary)

// Show/Hide form
Add_btn.addEventListener("click", () => {
  form_div.classList.toggle("show_book_form");
});

close_btn.addEventListener("click", () => {
  form_div.classList.toggle("show_book_form");
});

