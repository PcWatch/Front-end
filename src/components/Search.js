import React from "react";
import { FormControl, Button, Form } from "react-bootstrap";

class Search extends React.Component {
  searchEvent = (event) => {
    event.preventDefault();
    this.props.getSearchQuery(event.target.value)
  }
  render() {
    return (
      <>
        <Form inline>
          <FormControl onChange={this.searchEvent} type="text" placeholder="What food would you like to search?" className="mr-sm-2" />
          <Button onClick={this.props.getRecipes} variant="success">Search Now!</Button>
        </Form>
      </>
    );
  }
}
export default Search;