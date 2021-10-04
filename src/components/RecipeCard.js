import { Component } from "react";
import Card from 'react-bootstrap/Card'


class Recipecard extends Component {
  modalEvent = (event) => {
    this.props.handleModal();
  }

  render() {
    return (
      <>
       <Card onClick={this.modalEvent} style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://spoonacular.com/recipeImages/{ID}-{SIZE}.{TYPE}" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>          
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
       
      </>
    );
  }
}
export default Recipecard;
