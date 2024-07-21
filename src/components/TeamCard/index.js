// Write your code here
import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'
class TeamCard extends Component {
  state = {}
  render() {
    const {details} = this.props
    const {id, name, teamImageUrl} = details

    return (
      <Link to={`/team-matches/${id}`} className="link">
        <li className="li">
          <img src={teamImageUrl} alt={name} className="li-img" />
          <p className="li-name">{name}</p>
        </li>
      </Link>
    )
  }
}
export default TeamCard
