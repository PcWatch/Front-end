import { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import Recipecard from "./RecipeCard";
import RecipeModal from "./RecipeModal";
import Search from "./Search";

class Main extends Component {
  render() {
    return (
      <>
        <Search searchQuery={this.props.searchQuery} getSearchQuery={this.props.getSearchQuery} getRecipes={this.props.getRecipes}/>
        <Recipecard handleModal={this.props.handleModal} recipe={this.props.recipe} getRecipeId={this.props.getRecipeId} getfullRecipes={this.props.getfullRecipes} handleOpen={this.props.openModel} />
        <RecipeModal show={this.props.show} handleModal={this.props.handleModal} saveFavoriteToDB={this.props.saveFavoriteToDB} selectedRecipe={this.props.fullRecipe}/>
      </>
    );
  }
}
export default withAuth0(Main);
