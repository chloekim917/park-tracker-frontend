import React from 'react';
import ParkCard from './ParkCard';
import MapView from './MapView';
import SearchBar from './SearchBar'
import MapOption from './map-marker.gif'
import CardOption from './icon-list-view.gif'

class ParkIndex extends React.Component {  
  state={
    mapDisplay: false
  }

  toggleDisplay = () => {
    this.setState({mapDisplay: !this.state.mapDisplay})
  }

  renderCard = () => {
    if (this.props.searchBy === 'By Name')
    {let cards = this.props.parks.filter(card => card.name.toLowerCase().includes(this.props.searchTerm.toLowerCase()))
      let sortedCard = cards.sort((a, b) => a.name.localeCompare(b.name))
      
      return(
        <>
       {sortedCard.map (park=><ParkCard key={park.id} {...park} push={this.props.history.push} handleNewUserPark={this.props.handleNewUserPark} comments={this.props.comments} userId={this.props.userId} visited={this.props.visited}/>)}
       </>
      )
    }else{
      let cards = this.props.parks.filter(card => card.state.toLowerCase().includes(this.props.searchTerm.toLowerCase()))
      let sortedCard = cards.sort((a, b) => a.name.localeCompare(b.name))
      
      return(
        <>
       {sortedCard.map (park=><ParkCard key={park.id} {...park} push={this.props.history.push} handleNewUserPark={this.props.handleNewUserPark} comments={this.props.comments} userId={this.props.userId} visited={this.props.visited}/>)}
       </>
      )
    }

  }

  renderMap = () => {
    return(
      <MapView parks={this.props.parks} />
    )
  }

  render(){
    return (
      <div className="park-index-page">
        <SearchBar handleSearchChange={this.props.handleSearchChange} searchTerm={this.props.searchTerm} toggleSearchType={this.props.toggleSearchType} searchBy={this.props.searchBy}/>
        <div className='mapview-button' onClick={this.toggleDisplay}>{this.state.mapDisplay ? <img className='card-option' src={CardOption}/> : <img className='map-option' src={MapOption}/>}</div>
        {this.state.mapDisplay ? this.renderMap() : this.renderCard()}
      </div>
  )
  }
}

export default ParkIndex;