import React from 'react'
import './SummaryOption.css'

class SummaryOption extends React.Component {
    render() {
        return (Object.keys(this.props.summary)
                .map(key => <div className="summary__option" key={key}>
                    <div className="summary__option__label">{key}  </div>
                    <div className="summary__option__value">{this.props.summary[key].name}</div>
                    <div className="summary__option__cost">
                    { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                        .format(this.props.summary[key].cost) }
                    </div>
                </div>
                )
        )
    }
}

export default SummaryOption