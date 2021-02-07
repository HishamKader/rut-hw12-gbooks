import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'
import { FaReadme, FaTrashAlt } from 'react-icons/fa'

function SavedBooks(props){
    console.log(props)
    return(
        // map through the books so we get the entire result list
        props.books.map((book) => (
            <Card key={book.id}>
                <Card.Header>
                <h3>{book.title}</h3>
                <p className="lead">{book.authors && book.authors.length > 1 ? book.authors.join(" & ") : book.authors}</p>
                </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col>
                                <img className="img-fluid" alt="Book thumbnail" src={book.image ? book.image:
                                        "https://img.icons8.com/cute-clipart/64/000000/no-image.png"}/>
                                        <br/>
                                <a href={book.link} target="_blank" rel="noreferrer" >
                                <Button variant="danger" className="px-2 mt-2"><FaReadme/></Button>
                                    </a>
                                <Button variant="danger" className="px-2 ml-1 mt-2"><FaTrashAlt/></Button>
                            </Col>
                            <Col>
                                <p className="lead">
                                {book.description}
                                </p>

                            </Col>
                        </Row>           
                    </Card.Body>
            </Card>
        ))
    )
}
export default SavedBooks