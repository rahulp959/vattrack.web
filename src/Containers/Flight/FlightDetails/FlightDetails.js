import React from 'react'

class FlightDetails extends React.Component {
  render () {
    return (
      <div className='flightdetails'>
        <div className='dividedtitle'>Flight Times</div>
        <table>
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>Departure</th>
              <th>Landing</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Actual/<i>Estimated</i>
              </td>
              <td>{this.props.flightData.get('departed_at') ? this.props.flightData.get('departed_at') : 'Not Departed'}</td>
              <td>
                {
                  (this.props.flightData.get('status') === 'Incomplete')
                    ? 'Unknown'
                    : (this.props.flightData.get('status') !== 'Arrived')
                      ? (this.props.flightData.get('arrival_est') === 'Unknown') ? '' : (<i>Est {this.props.flightData.get('arrival_est')}</i>)
                      : this.props.flightData.get('arrived_at')
                }
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default FlightDetails
