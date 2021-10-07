import { Component } from "react";
import { Card, Col, Button } from "react-bootstrap";

export default class Favorites extends Component {

  // componentDidMount(){
  //   this.props.getFavoritesFromDB();
  // }

  render() {
    this.props.getFavoritesFromDB();
    return(
      <>
      
        {this.props.favoritesData && 
          <Col className="card-column" xs={1} sm={1} md={1} lg={1}>
            {this.props.favoritesData.map( (recipeData) => <FavCard deleteFavoriteFromDB={this.props.deleteFavoriteFromDB} key={recipeData._id} recipeData={recipeData} />              
              )}
          </Col>
        }
        <div class="favoritesFooter"></div>
      
      </>
    )
  }
}

class FavCard extends Component {
  render(){
   
    return(
      <Card className="favoriteCard" key={this.props.recipeData._id} style={{ width: '69rem' }}>
        <Card.Title className='favoriteCardTitle'>{this.props.recipeData.title}</Card.Title>
          <div class="favoriteRecipe">
            <img class="favorite-image" alt="favoriteRecipe" src={this.props.recipeData.image}/>
            <div class="favIngredientTitle">Ingredients</div> 
            <div class="favIngredient">{this.props.recipeData.ingredients}</div>
            <div class="favRecipeTitle">Recipe</div>
            <div class="favRecipe">{this.props.recipeData.recipe}</div>
            {/* <Card.Body>
              
              <Card.Img className="favorite-image" variant="top" src={this.props.recipeData.image}></Card.Img>
                <Card.Text style={{flex: 1, flexWrap: 'wrap'}} className="favorite-ingredients">Ingredients: {this.props.recipeData.ingredients}</Card.Text>
                <Card.Text style={{flex: 1, flexWrap: 'wrap'}}className="favorite-recipe">Recipe: {this.props.recipeData.recipe}</Card.Text>          
            </Card.Body> */}
          <Button onClick={() => this.props.deleteFavoriteFromDB(this.props.recipeData.id)} className="favoriteDelete" variant="danger">Remove</Button>
          </div>
      </Card>
      
      
    )
  }
}
