import React from 'react'
import {FullPage, Slide} from 'react-full-page'

class PageSlide extends React.Component {
  render () {
    return (
      <FullPage>
        <Slide className="pageun">
          <h1>Inner slide content</h1>
        </Slide>
        <Slide className="pagedeux">
          <h1>Another slide content</h1>
        </Slide>
        <Slide className="pagetrois">
          <h1>The last one</h1>
        </Slide>
      </FullPage>
    )
  }
}
export default PageSlide
