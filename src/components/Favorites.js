import { Component } from "react";
import Card from "react-bootstrap/Card";
// import RecipeCard from "./components/RecipeCard";
// import RecipeModal from "./components/RecipeModal";
// import Navigation from "./components/Navigation";
import Button from 'react-bootstrap/Button'

export default class Favorites extends Component {
  constructor(props) {
    super(props);
    ;
  }

  
  // removeFavorite = (id) => {
  //   let index = favorites.indexOf(id);
  //   console.log(index);
  //   let temp = [...favorites.slice(0, index), ...favorites.slice(index + 1)];
  //   setFavorite(temp);
  // };

  
  render() {
    //const favorites = this.props.favorites;
    return (
    // favorites.forEach( recipe => {
    //   return (
    //     <Card key={recipe.id} style={{ width: "18rem" }}>
    //       <Card.Img
    //         variant="top"
    //         src="https://spoonacular.com/recipeImages/{ID}-{SIZE}.{TYPE}"
    //       />
    //       <Card.Body>
    //         <Card.Title>Card Title</Card.Title>
    //         <Card.Text>
    //           Some quick example text to build on the card title and make up the
    //           bulk of the card's content.
    //         </Card.Text>
    //       </Card.Body>
    //       <Card.Footer>
    //         <Button>Remove From Favorites</Button>
    //       </Card.Footer>
    //     </Card>
    //   );
    // })

    // );
    <h1>favorites</h1>
    )
  }
}
