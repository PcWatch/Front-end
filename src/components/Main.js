import { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import Recipecard from "./RecipeCard";
import RecipeModal from "./RecipeModal";
import Search from "./Search";
// import FavoritesList from "./Favorites";
import axios from "axios";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRecipeModal: false,
      searchQuery: "",
      favorites: [],
      searchButton:	"🔍",
    };
  }

  handleModal = () => {
    this.setState({
      showRecipeModal: !this.state.showRecipeModal,
    });
  };

  getRecipes = async (event) => {
    event.preventDefault();
    let recipeURL = `${process.env.REACT_APP_SERVER}/recipe`;
    const recipeResponse = await axios.get(recipeURL);
    console.log("get recipes is working");
  };

  getSearchQuery = (userSearchQuery) => {
    this.setState({
      searchQuery: userSearchQuery,
    });
    console.log("get search query is working");
  };

  addFavorite = (favorite) => {
    const { favorites } = this.state;
    if (
      !favorites.some((alreadyFavorite) => alreadyFavorite.id === favorite.id)
    ) {
      this.setState({
        favorites: [...this.state.favorites, favorite],
      });
    }
  };

  render() {
    console.log(this.state.searchQuery);
    return (
      <>
        {/* <FavoritesList favorites={this.state.favorites} /> */}
        <Search searchQuery={this.state.searchQuery} getSearchQuery={this.getSearchQuery} getRecipes={this.getRecipes}/>
        <Recipecard handleModal={this.handleModal} />
        <RecipeModal show={this.state.showRecipeModal} handleModal={this.handleModal}
        />
      </>
    );
  }
}
export default withAuth0(Main);
