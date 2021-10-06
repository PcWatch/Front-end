import { Component } from "react";
import { Card, Container, Col, Button } from "react-bootstrap";
// import RecipeCard from "./components/RecipeCard";
// import RecipeModal from "./components/RecipeModal";
// import Navigation from "./components/Navigation";
// import Button from 'react-bootstrap/Button'

export default class Favorites extends Component {

  componentDidMount(){
    this.props.getFavoritesFromDB()
    console.log('ismounting')
    console.log(this.props.getFavoritesFromDB())
  }

  render() {
    console.log(this.props.favoritesData)
    return(
      <Container>
        {this.props.favoritesData && 
          <Col xs={1} sm={1} md={1} lg={1}>
            {this.props.favoritesData.map( (recipeData) => <FavCard deleteFavoriteFromDB={this.props.deleteFavoriteFromDB} key={recipeData._id} recipeData={recipeData} />              
              )}
          </Col>
        }
      </Container> 
    )
  }
}

class FavCard extends Component {
  render(){
    console.log(this.props.favoritesData)
    console.log()
    return(
              <Card key={this.props.recipeData._id} style={{ width: '69rem' }}>
                
                <Card.Title>{this.props.recipeData.title}</Card.Title>
                  <div class="favoriteRecipe">
                    <Card.Body>
                      <Card.Img variant="top" src={this.props.recipeData.image}></Card.Img>
                        <Card.Text>Ingredients: {this.props.recipeData.ingredients}</Card.Text>
                        <Card.Text>Recipe: {this.props.recipeData.recipe}</Card.Text>          
                    </Card.Body>
                  <Button onClick={() => this.props.deleteFavoriteFromDB(this.props.recipeData._id)} className="favoriteDelete" variant="danger">69 this</Button>
                  </div>
              </Card>

    )
  }

}
