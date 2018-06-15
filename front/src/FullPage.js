import React from 'react'
import {FullPage, Slide} from 'react-full-page'
import {Grid, Image, Button, Icon, Form, Header, Checkbox, Modal, Input, Radio, Select, options, value, TextArea} from '../node_modules/semantic-ui-react'
import terre from './images/terre.png'
import toulouse from './images/toulouse.png'

class PageSlide extends React.Component {
  render () {
    return (
      <FullPage>
        <Slide id="pageun" className="pageun">
          <Grid column='five'>
            <Grid.Row>
              <Grid.Column>
              </Grid.Column>
              <Grid.Column className="tagEcologie">
                <a href='#pagedeux'> Ecologie </a>
              </Grid.Column>
              <Grid.Column>
              </Grid.Column>
              <Grid.Column>
              </Grid.Column>
              <Grid.Column className="tagSocial">
                <a href='#pagedeux'> Social </a>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column className="tagSante">
                <a href='#pagedeux'> Santé </a>
              </Grid.Column>
              <Grid.Column>
              </Grid.Column>
              <Grid.Column className="tagEconomie">
                <a href='#pagedeux'> Economie </a>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column className="tagTechno">
                <a href='#pagedeux'> Technologie </a>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column className="contribuez">
                <a href="#pagetrois"> Contribuez </a>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Slide>

        <Slide id="pagedeux" className="pagedeux">
          <Grid column='one'>
            <Grid.Column>
              <Image className="earth" src={terre} centered alt="pourquoi ça marche pas ?"></Image>
            </Grid.Column>
          </Grid>
        </Slide>

        <Slide id="pagetrois" className="pagetrois">
          <Form>
            <Form.Group widths='equal'>
              <Form.Field control={Input} label='Votre nom' placeholder='Hubert' />
              <Form.Field control={Input} label='Votre prénom' placeholder='Benoît' />
              <Form.Field control={Input} label='Employeur' placeholder='Wild Code School' />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Field control={Input} label='Titre' placeholder='Le beurre salé' />
              <Form.Field control={Input} label='Lien de la vidéo' placeholder='Lien de la vidéo' />
              <Form.Field control={Input} label="Lien de l'article" placeholder="Lien vers l'article" />
            </Form.Group>
            <Form.Group>
              <Form.Field control={Input} label="Localisation" placeholder="Brest" />
            </Form.Group>
            <Form.Field control={TextArea} label="Résumé de l'article" placeholder='Tout le monde aime le beurre salé ! [...]'/>
            <Form.Group wdths='equal'>
              <Form.Field control={Checkbox} label='Ecologie' />
              <Form.Field control={Checkbox} label='Santé' />
              <Form.Field control={Checkbox} label='Techonologie' />
              <Form.Field control={Checkbox} label='Economie' />
              <Form.Field control={Checkbox} label='Social' />
            </Form.Group>
            <Form.Field control={Button}>Uploadez votre vidéo (15s max)</Form.Field>
          </Form>
        </Slide>
      </FullPage>
    )
  }
}
export default PageSlide
