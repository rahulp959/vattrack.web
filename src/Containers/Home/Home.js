import React from 'react'
import {connect} from 'react-redux'
import TableRecentFlights from './TableRecentFlights/TableRecentFlights'
import TableStats from './TableStats/TableStats'
import './Home.scss'

import { fetchGeneral } from '../../ducks/general.js'
import { fetchRecent } from '../../ducks/recent.js'

let generalDispatcher, recentDispatcher
const refreshTime = 120000

class Home extends React.Component {
  componentDidMount () {
    this.props.dispatch(fetchGeneral())
    this.props.dispatch(fetchRecent())

    generalDispatcher = setInterval(() => this.props.dispatch(fetchGeneral()), refreshTime)
    recentDispatcher = setInterval(() => this.props.dispatch(fetchRecent()), refreshTime)
  }

  componentWillUnmount () {
    clearInterval(generalDispatcher)
    clearInterval(recentDispatcher)
  }

  render () {
    return (
      <div>
        <div className='home'>
          <div className='recentbox'>
            <div className='title'>recent</div>
            <TableRecentFlights recent={this.props.recent} />
          </div>
          <div className='statsbox'>
            <div className='title'>Number Statistics</div>
            <TableStats general={this.props.general} />
            <div className='sincebox' style={{textTransform: 'none'}}>Since Apr 30 2017</div>
          </div>
        </div>
        <div className='timelapse'>
          <iframe src='https://www.youtube.com/embed/GdT4xmhjEVk?ecver=1' frameBorder='0' />
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {general: state.get('general'), recent: state.get('recent')}
}

export default connect(mapStateToProps)(Home)
