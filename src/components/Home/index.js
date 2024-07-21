import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import TeamCard from '../TeamCard'
class Home extends Component {
  state = {
    iplTeams: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getIPlTeams()
  }

  getIPlTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)
    const updatedList = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({iplTeams: updatedList, isLoading: false})
  }

  render() {
    const {isLoading, iplTeams} = this.state
    return (
      <div className="main-home">
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <>
            <div className="side">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="ipl-logo"
              />
              <h1 className="h1">IPL Dashboard</h1>
            </div>
            <ul className="ul">
              {iplTeams.map(each => (
                <TeamCard details={each} key={each.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default Home
