/* global $ */
import React, { Component } from 'react'

class Carousel extends Component {
  render () {
    return (
      <div className="ui-coverflow-wrapper ui-clearfix">

        <div className="wrapper ui-coverflow" id="coverflow">

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
              src="https://www.youtube.com/embed/nc7Z3EBMevg?&autoplay=0" frameBorder="500">
            </iframe>
            <div className="content" width='400px' >
              <a className="header" href="https://www.pepsnews.com/combien-de-minutes-de-sport-pour-etre-heureux/" target="blank">L'Article de presse </a>
              <br/>
              <div className="meta">
                <a>Une étude portant sur plus de 500 000 personnes  publiée dans le Journal of Happiness Studies, a découvert que la pratique d’une activité physique durant seulement 10 minutes au courant de la semaine peut améliorer considérablement les chances de se sentir heureux.</a>
                <br/>
              </div>
            </div>
          </div>
          <div className="ui card">
            <iframe width="560" height="315"
              src="https://www.youtube.com/embed/nc7Z3EBMevg?&autoplay=0" frameBorder="500">
            </iframe>
            <div className="content" width='400px' >
              <a className="header" href="https://www.pepsnews.com/combien-de-minutes-de-sport-pour-etre-heureux/" target="blank">L'Article de presse </a>
              <br/>
              <div className="meta">
                <a>Une étude portant sur plus de 500 000 personnes  publiée dans le Journal of Happiness Studies, a découvert que la pratique d’une activité physique durant seulement 10 minutes au courant de la semaine peut améliorer considérablement les chances de se sentir heureux.</a>
                <br/>
              </div>
            </div>
          </div>
          <div className="ui card">
            <iframe width="560" height="315"
              src="https://www.youtube.com/embed/nc7Z3EBMevg?&autoplay=0" frameBorder="500">
            </iframe>
            <div className="content" width='400px' >
              <a className="header" href="https://www.pepsnews.com/combien-de-minutes-de-sport-pour-etre-heureux/" target="blank">L'Article de presse </a>
              <br/>
              <div className="meta">
                <a>Une étude portant sur plus de 500 000 personnes  publiée dans le Journal of Happiness Studies, a découvert que la pratique d’une activité physique durant seulement 10 minutes au courant de la semaine peut améliorer considérablement les chances de se sentir heureux.</a>
                <br/>
              </div>
            </div>
          </div>
          <div className="ui card">
            <iframe width="560" height="315"
              src="https://www.youtube.com/embed/nc7Z3EBMevg?&autoplay=0" frameBorder="500">
            </iframe>
            <div className="content" width='400px' >
              <a className="header" href="https://www.pepsnews.com/combien-de-minutes-de-sport-pour-etre-heureux/" target="blank">L'Article de presse </a>
              <br/>
              <div className="meta">
                <a>Une étude portant sur plus de 500 000 personnes  publiée dans le Journal of Happiness Studies, a découvert que la pratique d’une activité physique durant seulement 10 minutes au courant de la semaine peut améliorer considérablement les chances de se sentir heureux.</a>
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
        active: 5
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
