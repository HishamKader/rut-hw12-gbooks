import axios from "axios"

// spaces example in api search query the%20joy%20luck%20club

export default {
        // using google api, search for the user input.
        getBook: function (title){
            return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=AIzaSyDrahnrWwfTZcCcOo8EBVfxgt_zJZpJHqI`);
         },
        saveBook: function(bookData){
                return axios.post("/api/books", bookData);
        },
        getSavedBooks(){
                return axios.get("/api/books");
        },
        deleteBook(id){
                return axios.delete("/api/books/" + id);
        }
}
