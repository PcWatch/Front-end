import { Component } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
// import IconButton from "material-components-web/IconButton";
// import React, { useState } from 'react';
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import Favorite from "@material-ui/icons/Favorite";

class RecipeModal extends Component {
  getRecipes = async () => {};

  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.handleModal}>
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
                <Card.Text>{this.props.selectedRecipe.ingredients.map( (ingredient) => <Card.Text>`${ingredient}`</Card.Text>)}</Card.Text>
              </Card.Body>
            </Card>
          </Modal.Body>
          <Modal.Footer>
            {/* {this.props.favorite && (
              <IconButton
                onClick={() => {
                  );
                }}
                aria-label="delete"
                color="primary"
              >
                <FavoriteBorderIcon></FavoriteBorderIcon>
              </IconButton>
            )}
            {!this.props.favorite && (
              <IconButton
                onClick={() => {
                  setFav(!fav);
                }}
                aria-label="delete"
                color="primary"
              >
                <Favorite></Favorite>
              </IconButton>
            )} */}
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
