import React from 'react'
import './Summary.css'
import SummaryOption from './SummaryOption/SummaryOption'

class Summary extends React.Component {
    
    render() {
        const total = Object.keys(this.props.summary)
            .reduce((acc, curr) => acc + this.props.summary[curr].cost, 0);    

        return (
            <section className="main__summary">
            <h3>NEW GREENLEAF 2018</h3>
            <SummaryOption summary={this.props.summary} />
            <div className="summary__total">
              <div className="summary__total__label">Your Price: </div>
              <div className="summary__total__value">
              { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(total) }
              </div>
            </div>
          </section>
        )

        

    }
}

export default Summary
