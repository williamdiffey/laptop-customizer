import React from 'react'
import './FeatureList.css'
import FeatureItem from './FeatureItem/FeatureItem'

class FeatureList extends React.Component {
  render() {
    const { features } = this.props
    const listContent = Object.keys(this.props.features)
    .map((key, index) => {

    return (
      <div className="feature" key={index}>
      <div className="feature__name">{key}</div>
      <ul className="feature__list">
         <FeatureItem features={features} key={index} index={index} onUpdate={this.props.onUpdate} />  
      </ul>
    </div>
    )
  })

    return (
      <section className="main__form">
        <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
        {listContent}  
      </section>
    )


  }
  
}

export default FeatureList