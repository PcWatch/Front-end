import { Component } from "react";
import Card from "react-bootstrap/Card";
// import RecipeCard from "./components/RecipeCard";
// import RecipeModal from "./components/RecipeModal";
// import Navigation from "./components/Navigation";
import Button from 'react-bootstrap/Button'

export default class Favorites extends Component {
  // async componentDidMount() {
  //   if (this.props.auth0.isAuthenticated) {
  //     const res = await this.props.auth0.getIdTokenClaims();

  //     const jwt = res.__raw;

  //     const config = {
  //       headers: { Authorization: `Bearer ${jwt}` },
  //       method: "get",
  //       baseURL: process.env.REACT_APP_SERVER,
  //       url: "/recipe",
  //     };

  //     const recipeResponse = await axios(config);
  //     // this.setState({ recipe: recipeResponse.data });
  //     this.setState({ user: this.props.auth0.user });
  //     console.log("USERAuth0:", this.props.auth0.user);
  //   }
  // }
  // constructor(props) {
  //   super(props);
  //   ;
  // }

  
  // removeFavorite = (id) => {
  //   let index = favorites.indexOf(id);
  //   console.log(index);
  //   let temp = [...favorites.slice(0, index), ...favorites.slice(index + 1)];
  //   setFavorite(temp);
  // };

  
  render() {
    //const favorites = this.props.favorites;
    // return (
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
    return(
    //     favorites.forEach( recipe => {
    //       <Card style={{ width: "18rem" }}>
    //       <Card.Img variant="top"src={this.props.selectedRecipe.image} />
    //       <Card.Body>
    //         <Card.Title>Directions</Card.Title>
    //         <Card.Text>{this.props.selectedRecipe.recipe}</Card.Text>
    //         {/* <Card.Text>{this.props.ingredients.map( ingredient => ())}</Card.Text> */}
    //         <Card.Title>Ingredients</Card.Title>
    //         {/* <Card.Text>{this.props.selectedRecipe.ingredients.map( (ingredient) => <Card.Text>`${ingredient}`</Card.Text>)}</Card.Text> */}
    //       </Card.Body>
    //     </Card>
    //     })
    // );
    // )
  //}
    <h1>favorites</h1>
    )
}
}
