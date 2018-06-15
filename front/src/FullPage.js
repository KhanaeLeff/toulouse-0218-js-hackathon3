import React from 'react'
import {FullPage, Slide} from 'react-full-page'
import {Grid, Image} from '../node_modules/semantic-ui-react'
import terre from './images/terre.png'
import WinNews from './images/WinNews.png'

class PageSlide extends React.Component {
  render () {
    return (
      <FullPage>
        <Slide options className="pageun">
          <Grid column='five'>
            <Grid.Row>
              <Grid.Column>
              </Grid.Column>
              <Grid.Column className="tagEcologie">
                <a> Ecologie </a>
              </Grid.Column>
              <Grid.Column>
              </Grid.Column>
              <Grid.Column>
              </Grid.Column>
              <Grid.Column className="tagSocial">
                <a> Social </a>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column className="tagSante">
                <a> Santé </a>
              </Grid.Column>
              <Grid.Column className="tagEconomie">
                <a> Economie </a>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column className="tagTechno">
                <a> Technologie </a>
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
      </FullPage>
    )
  }
}
export default PageSlide
