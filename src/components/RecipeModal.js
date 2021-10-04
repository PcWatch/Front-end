import {Component} from "react";
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

class Recipecard extends Component {
  getRecipes = async () => {
    
  }

  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.handleModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://spoonacular.com/recipeImages/{ID}-{SIZE}.{TYPE}" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="Danger" onClick={this.props.handleModal}>
              Close
            </Button>
            <Button variant="Success">
              Add to Favorites
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default Recipecard;
