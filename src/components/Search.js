import React from "react";
import { FormControl, Button, Form } from "react-bootstrap";
import RecipeCard from "./RecipeCard"
import '../App.css'

class Search extends React.Component {
  searchEvent = (event) => {
    event.preventDefault();
    this.props.getSearchQuery(event.target.value)
  }
  render() {
    return (
      <>
        <Form className="searchForm">
          <FormControl onChange={this.searchEvent} type="text" placeholder="What food would you like to search?" className="primarySearch" />
          <Button onClick={this.props.getRecipes} className="searchButton" variant="success">Search Now!</Button>
        </Form>
      </>
    );
  }
}
export default Search;