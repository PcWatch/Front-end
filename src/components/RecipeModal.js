
import { Component } from "react";
import  { Card, Modal, Button } from "react-bootstrap";

class RecipeModal extends Component {
  handleAddClick = () => {
    this.props.saveFavoriteToDB(this.props.selectedRecipe.id)
    this.props.getFavoritesFromDB()
  }
  handleDeleteClick = (id) => {
      this.props.deleteFavoriteFromDB(id)
      this.props.getFavoritesFromDB()
  }

  render() {
    
    // console.log(this.props.selectedRecipe)
    // console.log(this.props.favoritesData)
    return (
      <>
        <Modal size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered className="recipe-modal" key={this.props.selectedRecipe.id} show={this.props.show} onHide={this.props.handleModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.selectedRecipe.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card className="modal-card">
              <Card.Img id="modal-image" style={{ width: "20rem" }} variant="top"src={this.props.selectedRecipe.image} />
                <div id="modal-ingredients">
                <Card.Title>Ingredients</Card.Title>
                {/* {this.props.selectedRecipe.ingredients.map( (recipeData) =>
                      <Card.Text>recipeData</Card.Text>
                )} */}
                <Card.Text>{this.props.selectedRecipe.ingredients}</Card.Text>
                </div>
                <div>
                <Card.Title>Directions</Card.Title>
                <Card.Text>{this.props.selectedRecipe.recipe}</Card.Text>
                </div>
            </Card>
          </Modal.Body>
          <Modal.Footer>
            {this.props.isFavorited ? 
              <Button onClick={()=>this.handleDeleteClick(this.props.selectedRecipe.id)}>Remove from Favorites</Button>
               : 
                <Button onClick={()=>this.handleAddClick()}>Add to Favorites</Button>
              } 
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default RecipeModal;
