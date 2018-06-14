import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'

class Accueil extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //   }
  render () {
    return (
      <Grid columns='one'>
        <Grid columns='three'>
          <Grid.Row>
            <p> Coucou </p>
          </Grid.Row>
          <Grid.Row>
            <p> Coucou </p>
          </Grid.Row>
          <Grid.Row>
            <p> Coucou </p>
          </Grid.Row>
        </Grid>
      </Grid>
    )
  }
}

export default Accueil
