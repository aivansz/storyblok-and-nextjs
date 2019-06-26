import React from 'react'
import Components from './index'
import SbEditable from 'storyblok-react'

export default class extends React.Component {
  render() {
    return (
      <SbEditable content={this.props.content}>
        <div className="teaser">
          Hello world!
        </div>
      </SbEditable>
    )
  }
}