import React from 'react'
import { Container, Card} from 'react-bootstrap'
import "./Search.css"
import SavedBooks from "../components/SavedBooks/SavedBooks"
import API from "../utils/API"

class Saved extends React.Component {
    state = {
        books: []
    }

    componentDidMount = () => {
        this.getSavedBooks();
    }

    getSavedBooks = () => {
        API.getSavedBooks()
        .then(res => {
            this.setState({
                books: res.data
            })
            console.log(this.state.books);
        })
        .catch(err => console.log( err))
    }


    render(){
        return(
            <Container>
                <Card>
                <Card.Header className="header-img">
                    </Card.Header>
                        <Card.Body>
                            <h3 className="text-center">Your saved books</h3>
                        </Card.Body>
                        </Card>
                        {this.state.books.length ? (
                    <SavedBooks
                        books={this.state.books}
                        />
                    ) : (
                    <div>
                        <hr/>
                    <p className="lead font-italic">No results to display</p>
                    </div>
                )}
            </Container>
        )
    }
}
export default Saved