import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import holder from '../../../assets/works/women.jpg'
import Stack from 'react-bootstrap/Stack';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';

const CardItem = (props) => {
  const { title, description, labels, image, link } = props.work;

  return (

    <Card style={{ width: '40rem', margin: '8px' }}>
      <Row>
        <Col className='card-image'>
          <Card.Img style={{ height: '100%', overflow: 'hidden' }} src={image} />
        </Col>
        <Col>
          <Card.Body style={{ paddingLeft: '0' }}>
              <Card.Title style={{ textAlign: 'left' }}>
                <a href={link} target='_blank' rel="noopener noreferrer" style={{ textDecoration: 'none' }}>{title}</a>
              </Card.Title>
            <Card.Text style={{ textAlign: 'left' }}>
              {description}
            </Card.Text>
            <Stack direction="horizontal" gap={1}>
              {
                labels.map((label, id) =>
                  <Badge key={id} bg={label.color}>{label.title}</Badge>
                )
              }
            </Stack>

          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}

export default CardItem;

