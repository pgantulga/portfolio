import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import notFound from '../assets/errorTwo.png'

const NotFound = () => {
  return (
    <div className="notFoundWrapper">
      <Container>     
        <h2>Oops...</h2>
        <p>The page you are looking for is not exists</p>
        <div className="notFoundCover">
          <img src={notFound} alt="notfound" />
        </div>
        {/* CUSTOM BUTTON */}
        <Link to="/">
          <Button>
            Go home
          </Button>
        </Link>
      </Container>
    </div>
  )
}

export default NotFound