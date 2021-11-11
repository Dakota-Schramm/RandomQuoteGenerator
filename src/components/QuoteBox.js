import {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const QuoteBox = props => {
    const [quote, setQuote] = useState("")

    const getRandomQuote = () => {
        fetch("https://api.quotable.io/random")
        .then((res)=>{return res.json()})
        .then((res) => {
            setQuote(res)
        })
    }

    useEffect(()=> {
        getRandomQuote()
    }, [])

    return (
        <Card id="quote-box">
            <Card.Body>
                <Card.Title id="text" style={{color: 'black'}}>{quote.content}</Card.Title>
                <Card.Text id="author" style={{color: 'black'}}>{quote.author}</Card.Text>
                <Container>
                    <Row> 
                        <Col md={2}> 
                            <Button id="tweet-quote" variant="primary" href="https://twitter.com/intent/tweet">Tweet</Button>
                        </Col>
                        <Col md={{span: 4, offset: 6}}>
                            <Button id="new-quote" variant="primary" onClick={getRandomQuote}>New Quote</Button>
                        </Col>                        
                    </Row>  
                </Container>
            </Card.Body>
        </Card>
    )
}

export default QuoteBox;