import React from 'react'
import './FeatureItem.css'

class FeatureItem extends React.Component {
    render() {
        const currentKey = Object.keys(this.props.features)[this.props.index]
        return this.props.features[currentKey].map((item, index) => {
            const selectedClass = item.name === this.props.features[currentKey] ? 'feature__selected' : '';
            const featureClass = 'feature__option ' + selectedClass;
            return (
                <li key={index} className="feature__item">
                    <div className={featureClass} onClick={e => {
                        this.props.onUpdate(currentKey, item)}}>
                        { item.name }
                        ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(item.cost) })
                    </div>
                </li>)
        });
    }
}

export default FeatureItem