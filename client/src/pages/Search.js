import React from 'react'
import { Container, Card, Button, InputGroup, FormControl } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import Results  from  "../components/Results/Results"
import "./Search.css"
import API from "../utils/API"

class Search extends React.Component {

    // Build our state values
    state = {
        books: [],
        searchTerm: ""
    }

    // Set the state related to what's typed into the input box.
    handleInputChange = event => {
        const {name, value} = event.target; // pull the data out of the input box
        this.setState({
            [name]: value
        });
    };

    // Call our getBook() method when the search button is clicked/submitted.
    handleFormSubmit = event => {
        event.preventDefault(); // prevent the form from wiping out the value on
        this.getBook();
    }

    getBook = () => {
        const title = this.state.searchTerm.replace(/ /g,"%20").toLowerCase()
        console.log(title); // make sure the title looks right
        // pass the scrubbed title value into our API method getBook as a param.
        API.getBook(title)
        // then we will set our state so we can use the books data in the List component.
        .then(res => {
            this.setState({
            books: res.data.items
        })}).catch(err => console.log(err)); // catch any errors and display to console.
    }

    saveBook = bookData => {
        API.saveBook({
            _id: bookData.id,
            title: bookData.title,
            authors: bookData.authors,
            description: bookData.description,
            image: bookData.image,
            link: bookData.link
        }).then(console.log("Posted"))
        .catch(err => console.log(err))
    }

    render(){
    return (
        <>
            <Container>
                <Card>
                    <Card.Header className="header-img">
                    </Card.Header>
                        <Card.Body>
                        <h3 className="text-center">Search for Books</h3>
                            <InputGroup className="mb-3">
                                <FormControl 
                                    value={this.state.search}
                                    onChange={this.handleInputChange}
                                    placeholder="The Joy Luck Club"
                                    name="searchTerm"
                                />
                                <InputGroup.Append>
                                <Button 
                                variant="success"
                                onClick={this.handleFormSubmit}
                                ><FaSearch /></Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Card.Body>
                        </Card>
                    {this.state.books.length ? (
                    <Results
                        books={this.state.books}
                        save={this.saveBook}
                        />
                    ) : (
                    <div>
                        <hr/>
                    <p className="lead font-italic">No results to display</p>
                    </div>
                )}
                
            </Container>
        </>
    )
    }
}
export default Search