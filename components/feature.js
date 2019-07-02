import React from 'react'
import SbEditable from 'storyblok-react'

export default class extends React.Component {
  render() {
    const { content } = this.props
    return (
      <SbEditable content={content}>
        <div className="feature util__flex-eq">
          <h2 className="teaser-head">{content.headline}</h2>
          <img className="teaser-image" src={content.icon}/>
          <p>{content.text}</p>
          {console.log(content)}
          <style jsx>{`
            .teaser-head {color:red; 
                font-size:32px
              }
              .teaser-image {
                height:160px;
              }
              .teaser-text {
                font-size:22;
                color:black;
                text-align: left;
              }

      
          `}</style>
        </div>
      </SbEditable>
    )
  }
}