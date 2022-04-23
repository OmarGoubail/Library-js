
let library = [];



function Book(title, author, pages, readingStatus) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readingStatus = readingStatus

}





function addBookToLibrary(title, author, pages, readingStatus){
    
    book = new Book(title, author, pages, readingStatus)
    library.push(book)
    
    
}

addBookToLibrary("life", 'omar', 300,'read')
addBookToLibrary("death", 'Joy', 800,'not yet read')
addBookToLibrary("Neither alive nor dead", "farida", 100, 'read')


function displayBooks(){

    for (i = 0; i < library.length; i++){
        
        console.table(library[i])
    }
}

displayBooks()

console.table(library)

const getBookFromInput = () => {
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const isRead = document.getElementById('isRead').checked
    return addBookToLibrary(title, author, pages, isRead)
  }


getBookFromInput()
console.table(library)