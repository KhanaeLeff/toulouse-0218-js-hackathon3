import {React, Component} from 'react'
import { Grid, Image } from 'semantic-ui-react'

class Accueil extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //   }
  render () {
    return (
      <Grid columns='three' divided>
        <Grid.Row>
          <Grid.Column>
            <Image src='/assets/images/wireframe/media-paragraph.png' />
          </Grid.Column>
          <Grid.Column>
            <Image src='/assets/images/wireframe/media-paragraph.png' />
          </Grid.Column>
          <Grid.Column>
            <Image src='/assets/images/wireframe/media-paragraph.png' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Accueil
