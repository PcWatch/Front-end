import React from 'react';
import Placeholder from 'react-bootstrap/Placeholder'

export default class Footer extends React.Component {
  render(){
    return (
      <>
        <Placeholder xs={12} bg="dark" />
          <p>APP NAME (WIP)&trade;</p>
        <Placeholder xs={12} bg="dark" />
      </>
    );
  }
}