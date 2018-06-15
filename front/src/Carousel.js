/* global $ */
import React, { Component } from 'react'
import './App.css'

class Carousel extends Component {
  UNSAFE_componentWillReceiveProps (props) {
    $('#coverflow' ).coverflow( 'select', props.index );
  }
  render () {
    return (
      <div className="ui-coverflow-wrapper ui-clearfix">

        <div className="wrapper ui-coverflow" id="coverflow">

          <div className="ui card">
            <iframe width="560" height="315"
              src="https://www.youtube.com/embed/-PvMOppVmeo?&autoplay=0" frameBorder="500">
            </iframe>
            <div className="content" width='400px' >
              <a className="header" href="https://www.pepsnews.com/ecologie-des-cargos-electriques/" target="blank">Les cargos écolos 2.0</a>
              <br/>
              <div className="meta">
                <a>Dès la rentrée la société Néerlandaise Port-Liner lancera des cargos « verts » munis de batteries rechargeables par énergie solaire et renouvelable (éolienne).
Ce sont une quinzaine de bateaux entre 50 et 110 mètres de long  capables de transporter jusqu’à 280 conteneurs qui seront loués pour remplacer les dizaines de milliers de camions qui circulent chaque année.</a>
                <br/>
              </div>
            </div>
          </div>

           <div className="ui card">
             <iframe width="560" height="315"
               src="https://www.youtube.com/embed/nc7Z3EBMevg?&autoplay=0" frameBorder="500">
             </iframe>
             <div className="content" width='400px' >
               <a className="header" href="https://www.pepsnews.com/combien-de-minutes-de-sport-pour-etre-heureux/" target="blank">Le sport rend heureux, c’est mesuré </a>
               <br/>
               <div className="meta">
                 <a>Une étude portant sur plus de 500 000 personnes  publiée dans le Journal of Happiness Studies, a découvert que la pratique d’une activité physique durant seulement 10 minutes au courant de la semaine peut améliorer considérablement les chances de se sentir heureux.</a>
                 <br/>
               </div>
             </div>
           </div>

          <div className="ui card">
            <iframe width="560" height="315"
              src="https://www.youtube.com/embed/CVa-vneVoQs?&autoplay=0" frameBorder="500">
            </iframe>
            <div className="content" width='400px' >
              <a className="header" href="http://www.alloweb.org/levee-de-fonds-coworking-laboikos-leve-1-7-million-deuros/" target="blank">Un espace de CoWorking en province levé 1,7 millions d’euros</a>
              <br/>
              <div className="meta">
                <a>Le Tiers-Lieu Lab’Oikos basé à Toulouse dans le quartier de SAont-aubin se donne les moyens de ses ambitions grace à une levée de fonds de 1,7 Milllions auprès du Credit Agricole ou encore la Societe Generale.
Pour en savoir plus, sur cet acteur toulousain de l’économie positive ça se passe i</a>
                <br/>
              </div>
            </div>
          </div>


          <div className="ui card">
            <iframe width="560" height="315"
              src="https://www.youtube.com/embed/CP_2T9oTyBc?&autoplay=0" frameBorder="500">
            </iframe>
            <div className="content" width='400px' >
              <a className="header" href="https://www.pepsnews.com/un-ordinateur-pour-detecter-plus-precisement-le-cancer-de-la-peau/" target="blank">Une IA contre le cancer</a>
              <br/>
              <div className="meta">
                <a>Une équipe de chercheurs allemands, américains et français a créé un système d’intelligence artificielle qui permet de distinguer les lésions cutanées dangereuses des lésions bénignes. Pour son apprentissage, la machine a assimilé plus de 100 000 images et lors d’une confrontation avec des dermatologues, cette intelligence artificielle a détecté 95% de mélanomes contre 86,6  
Pour en savoir plus cliquez ici </a>
                <br/>
              </div>
            </div>
          </div>


          <div className="ui card">
            <iframe width="560" height="315"
              src="https://www.youtube.com/embed/nsuwAplB1eg?&autoplay=0" frameBorder="500">
            </iframe>
            <div className="content" width='400px' >
              <a className="header" href="https://www.tdg.ch/savoirs/environnement/choisir-economie-verte-rentable/story/30129048" target="blank">L’économie est plus rentable c’est prouvé !</a>
              <br/>
              <div className="meta">
                <a>L'économie verte est non seulement nécessaire mais réalisable. Si nous ne misons pas sur elle, les générations futures en pâtiront, ont plaidé des scientifiques des EPF en appelant à soutenir l'initiative des écologistes en votation le 25 septembre.</a>
                <br/>
              </div>
            </div>
          </div>

          <div className="ui card">
            <iframe width="560" height="315"
              src="https://www.youtube.com/embed/kVpVbEaWdIY?&autoplay=0" frameBorder="500">
            </iframe>
            <div className="content" width='400px' >
              <a className="header" href="https://france3-regions.blog.francetvinfo.fr/medias-midi-pyrenees/2015/08/18/une-nouvelle-ecole-de-journalisme-a-toulouse.html" target="blank">Une ecole de Journalisme fait peau neuve à Toulouse</a>
              <br/>
              <div className="meta">
                <a>C’est un ancien eleve d’une école de Journalisme qui a permis l’Institut Supérieur de Journalisme de Toulouse (ISJT) de ne pas mettre la clé sous la porte. Le nom reste le même mais c’est bien la seule chose qui n’a pas été chambouler par Guillaume Truilhé, repreneur et directeur de l’établissement.</a>
                <br/>
              </div>
            </div>
          </div>


        </div>
      </div>
    )
  }
  componentDidMount () {
    $(function () {
      var $license = $('#license')
      var $coverflow = $('#coverflow').coverflow({
        active: 3
        // select: function (ev, ui) {
        //   var el = ui.active

        //   $license.html([
        //     '<p>',
        //     '<a href="' + el.data('license') + '">Some rights reserved</a> by ',
        //     '<a href="' + el.data('contact') + '"><em>' + el.data('author') + '</em></a>',
        //     '</p>'
        //   ].join(''))
        // }
      })

      $(window).smartresize(function () {
        $coverflow.coverflow()
      })
    })
  }
}
export default Carousel
