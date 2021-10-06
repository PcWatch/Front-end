import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";
import Main from "./components/Main";
import Login from "./components/Login";
import Favorites from "./components/Favorites";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRecipeModal: false,
      searchQuery: "",
      favorites: [],
      setFavorites: [],
      recipe: [],
      fullRecipe: [],
      recipeId: null,
      selectedRecipe: [],
    };
  }

  getRecipeId = (selectedRecipeId) => {
    this.setState({
      recipeId: selectedRecipeId,
    });
  };

  handleOpen = (recipeId) =>{
    this.getfullRecipes(recipeId);
    this.setState({
      showRecipeModal: true
    })
  }

  handleModal = () => {
    this.setState({
      showRecipeModal: false,
    });
  };

  getRecipes = async (event) => {
    event.preventDefault();
    let recipeURL = `${process.env.REACT_APP_SERVER}/recipe?search=${this.state.searchQuery}`;
    const recipeResponse = await axios.get(recipeURL);
    this.setState({
      recipe: recipeResponse.data,
    });
  };

  getfullRecipes = async (id) => {
    // event.preventDefault();
    let recipeURL = `${process.env.REACT_APP_SERVER}/recipe/${id}`;
    const recipeResponse = await axios.get(recipeURL);
    console.log(recipeResponse.data);
    this.setState({
      fullRecipe: recipeResponse.data,
    });
  };

  getSearchQuery = (userSearchQuery) => {
    this.setState({
      searchQuery: userSearchQuery,
    });
    console.log("get search query is working");
  };

  // addFavorite = (favorite) => {
  //   const { favorites } = this.state;
  //   if (
  //     !favorites.some((alreadyFavorite) => alreadyFavorite.id === favorite.id)
  //   ) {
  //     this.setState({
  //       favorites: [...this.state.favorites, favorite],
  //     });
  //   }
  // };

  saveFavoriteToDB = async (id) => {
    console.log(this.props.auth0.user.email)
    // this takes a recipe ID and (i guess optional) user email and saves the full recipe to the DB
    const postURL = `${process.env.REACT_APP_SERVER}/favorite/${id}?email=${this.props.auth0.user.email}`;
    await axios.post(postURL);
    console.log("item saved to favorites");
  };

  getFavoritesFromDB = async () => {
    // this returns fav items from the DB, can add optional search query by using query 'title'
    const getURL = `${process.env.REACT_APP_SERVER}/favorite`;
    const response = await axios.get(getURL);
    const favoritesData = response.data;
    this.setState({
      favoritesData,
    });
    console.log("got items from favorites");
  };

  deleteFavoriteFromDB = async (id) => {
    // this deletes a fav from the DB by id
    const deleteURL = `${process.env.REACT_APP_SERVER}/favorite/${id}`;
    await axios.delete(deleteURL);
    console.log("item with ID: ", id, " was deleted");
  };

  render() {
    console.log(this.props.auth0)
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/">
              {this.props.auth0.isAuthenticated ? (
                <>
                  <Navigation />
                  <Main
                    openModel={this.handleOpen}
                    searchQuery={this.state.searchQuery}
                    getSearchQuery={this.getSearchQuery}
                    getRecipes={this.getRecipes}
                    handleModal={this.handleModal}
                    show={this.state.showRecipeModal}
                    recipe={this.state.recipe}
                    fullRecipe={this.state.fullRecipe}
                    getRecipeId={this.getRecipeId}
                    getfullRecipes={this.getfullRecipes}
                    saveFavoriteToDB={this.saveFavoriteToDB}
                  />
                </>
              ) : (
                <Login />
              )}
            </Route>
            <Navigation />
            <Route path="/Favorties">
              <Favorites getFavoritesFromDB={this.getFavoritesFromDB} deleteFavoriteFromDB={this.deleteFavoriteFromDB} saveFavoriteToDB={this.saveFavoriteToDB}/>
            </Route>
          </Switch>
        </Router>
        <Footer />
      </>
    );
  }
}
export default withAuth0(App);
