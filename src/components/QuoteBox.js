import {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

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
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default QuoteBox;