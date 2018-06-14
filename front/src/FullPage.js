import React from 'react'
import {FullPage, Slide} from 'react-full-page'
import {Grid, Image} from './node-modules/semantic-ui-react'
import terre from './images/terre.png'

class PageSlide extends React.Component {
  render () {
    return (
      <FullPage>
        <Slide className="pageun">
        </Slide>
        <Slide className="pagedeux">
          <Grid column='one'>
            <Grid.Column>
              <Image src={terre} centered alt="pourquoi ça marche pas ?"></Image>
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
