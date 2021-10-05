import {Component} from "react";
import {withAuth0} from '@auth0/auth0-react';
import Recipecard from "./RecipeCard";
import RecipeModal from './RecipeModal';
import Search from './Search';
import Favorites from './Favorites';
import axios from "axios";


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRecipeModal: false,
      searchQuery: '',
      favorite: false
    }
  }

  handleModal = () => {
    this.setState({
      showRecipeModal: !this.state.showRecipeModal
      
    })
    
  }

  getRecipes = async (event) => {
    event.preventDefault();
    let recipeURL=`${process.env.REACT_APP_SERVER}/recipe`
    const recipeResponse = await axios.get(recipeURL);
        console.log('get recipes is working')


  }
  getSearchQuery = (userSearchQuery) => {
    this.setState({
      searchQuery: userSearchQuery
    })
    console.log('get search query is working')
  }

  render() {
    console.log(this.state.searchQuery)
    return (
      <>

       {/* <Favorites show={this.state.favorite}/>        */}
       <Search searchQuery={this.state.searchQuery} getSearchQuery={this.getSearchQuery} getRecipes={this.getRecipes}/>
       <Recipecard handleModal={this.handleModal}/>
       <RecipeModal show={this.state.showRecipeModal} handleModal={this.handleModal}/>
      
      </>
    );
  }
}
export default withAuth0(Main);
