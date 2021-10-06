import { Component } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

class RecipeModal extends Component {
  getRecipes = async () => {};

  handleClick = () => {
    this.props.saveFavoriteToDB(this.props.selectedRecipe.id)
  }

  render() {
    return (
      <>
        <Modal key={this.props.selectedRecipe.id} show={this.props.show} onHide={this.props.handleModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.selectedRecipe.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top"src={this.props.selectedRecipe.image} />
              <Card.Body>
                <Card.Title>Directions</Card.Title>
                <Card.Text>{this.props.selectedRecipe.recipe}</Card.Text>
                {/* <Card.Text>{this.props.ingredients.map( ingredient => ())}</Card.Text> */}
                <Card.Title>Ingredients</Card.Title>
                {/* {this.props.selectedRecipe.ingredients.map( (ingredient) => 
                <Card.Text>`${ingredient}`</Card.Text>)} */}
              </Card.Body>
            </Card>
          </Modal.Body>
          <Modal.Footer onClick={()=>this.handleClick()}>
            Add to Favorites
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}




// constructor(props){
//   super(props);
//   console.log()
// }
export default RecipeModal;
