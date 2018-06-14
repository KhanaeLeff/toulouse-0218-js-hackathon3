import React from 'react'
import {FullPage, Slide} from 'react-full-page'
import {Grid, Image} from '../node_modules/semantic-ui-react'
import terre from './images/terre.png'
import WinNews from './images/Win_News.png'
import Boules from './images/traitboules.png'

let options= {
  arrowNavigation: true,
  navigation: true,

}
class PageSlide extends React.Component {
  render () {
    return (
      <FullPage>
        <Slide options className="pageun">
          <Grid column='three'>
            <Grid.Row verticalAlign='middle'>
              <Grid.Column>
                <Image className="winNews" src={WinNews} centered></Image>
                <Image className="boules" src={Boules} centered></Image>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Slide>

        <Slide className="pagedeux">
          <Grid column='one'>
            <Grid.Column>
              <Image className="earth" src={terre} centered alt="pourquoi ça marche pas ?"></Image>
            </Grid.Column>
          </Grid>
        </Slide>

        <Slide className="pagetrois">
        </Slide>
      </FullPage>
    )
  }
}
export default PageSlide
