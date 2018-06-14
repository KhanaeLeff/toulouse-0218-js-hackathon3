/* global $ */
import React, { Component } from 'react'

class Carousel extends Component {
  render () {
    return (
      <div className="ui-coverflow-wrapper ui-clearfix">

        <div className="wrapper ui-coverflow" id="coverflow">
          <img
            src="https://coverflowjs.github.io/coverflow/assets/img/musicforthejiltedgeneration.jpg"
            alt="The Prodigy - music for the jilted generation"
            data-license="http://creativecommons.org/licenses/by/2.0/"
            data-contact="http://www.flickr.com/photos/exquisitur/"
            data-author="Jason Hickey" />
          <img
            src="https://coverflowjs.github.io/coverflow/assets/img/iscream.jpg"
            alt="Nana Kitade - I scream"
            data-license="http://creativecommons.org/licenses/by/2.0/"
            data-contact="http://www.flickr.com/photos/puuikibeach/"
            data-author="davidd" />
          <img
            src="https://coverflowjs.github.io/coverflow/assets/img/isayyeah.jpg"
            alt="I say Yeah!"
            data-license="http://creativecommons.org/licenses/by/2.0/"
            data-contact="http://www.flickr.com/photos/fotologic/"
            data-author="fotologic" />
          <img
            src="https://coverflowjs.github.io/coverflow/assets/img/bluesalley.jpg"
            alt="Wynton Maralis - blues alley"
            data-license="http://creativecommons.org/licenses/by/2.0/"
            data-contact="http://www.flickr.com/photos/exquisitur/"
            data-author="Jason Hickey" />
          <img
            src="https://coverflowjs.github.io/coverflow/assets/img/studyinbrown.jpg"
            alt="Study In Brown"
            data-license="http://creativecommons.org/licenses/by/2.0/"
            data-contact="http://www.flickr.com/photos/exquisitur/"
            data-author="Jason Hickey" />
          <img
            src="https://coverflowjs.github.io/coverflow/assets/img/thewall.jpg"
            alt="Pink Floyd - The wall"
            data-license="http://creativecommons.org/licenses/by/2.0/"
            data-contact="http://www.flickr.com/photos/exquisitur/"
            data-author="Jason Hickey" />
          <img
            src="https://coverflowjs.github.io/coverflow/assets/img/thesidewinder.jpg"
            alt="Lee Morgan - The Sidewinder"
            data-license="http://creativecommons.org/licenses/by/2.0/"
            data-contact="http://www.flickr.com/photos/exquisitur/"
            data-author="Jason Hickey" />
          <img
            src="https://coverflowjs.github.io/coverflow/assets/img/jazzgiant.jpg"
            alt="Bud Powell - Jazz Giant"
            data-license="http://creativecommons.org/licenses/by/2.0/"
            data-contact="http://www.flickr.com/photos/exquisitur/"
            data-author="Jason Hickey" />
          <img
            src="https://coverflowjs.github.io/coverflow/assets/img/milestones.jpg"
            alt="Miles Davis - Milestones"
            data-license="http://creativecommons.org/licenses/by/2.0/"
            data-contact="http://www.flickr.com/photos/exquisitur/"
            data-author="Jason Hickey" />
          <img
            src="https://coverflowjs.github.io/coverflow/assets/img/billieholiday.jpg"
            alt="Billie Holiday - lady in autumn: the best of the verve years"
            data-license="http://creativecommons.org/licenses/by/2.0/"
            data-contact="http://www.flickr.com/photos/exquisitur/"
            data-author="Jason Hickey" />
          <img
            src="https://coverflowjs.github.io/coverflow/assets/img/fineandmellow.jpg"
            alt="Ella Fitzgerald - Fine and mellow"
            data-license="http://creativecommons.org/licenses/by/2.0/"
            data-contact="http://www.flickr.com/photos/exquisitur/"
            data-author="Jason Hickey" />
          <img
            src="https://coverflowjs.github.io/coverflow/assets/img/scenesinthecity.jpg"
            alt="Branford Maralis - Scenes in the city"
            data-license="http://creativecommons.org/licenses/by/2.0/"
            data-contact="http://www.flickr.com/photos/exquisitur/"
            data-author="Jason Hickey" />
          <img
            src="https://coverflowjs.github.io/coverflow/assets/img/acdc.jpg"
            alt="ACDC"
            data-license="http://creativecommons.org/licenses/by/2.0/"
            data-contact="http://www.flickr.com/photos/mccoycreations/"
            data-author="Mary McCoy" />
        </div>
      </div>
    )
  }
  componentDidMount () {
    $(function () {
      var $license = $('#license')
      var $coverflow = $('#coverflow').coverflow({
        active: 2
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
