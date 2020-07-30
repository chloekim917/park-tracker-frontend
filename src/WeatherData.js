import React from 'react';
import WeatherForeCard from './WeatherForeCard';

const weatherApiToken = '208b3b7be7768ae6d6a78cb08682333f'

class WeatherData extends React.Component{

    state = {
        currTemp: 0,
        feelsLike: 0,
        minTemp: 0,
        maxTemp: 0,
        icon: '',
        mainCond: '',
        sevenDayFore: []
    }

    componentDidMount(){
        fetch(`http://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=${this.props.lat}&lon=${this.props.lng}&appid=${weatherApiToken}`)
        .then(resp => resp.json())  
        .then(weatherData => {console.log(weatherData.daily)
                this.setState({
                    currTemp: weatherData.current.temp,
                    feelsLike: weatherData.current.feels_like,
                    // minTemp: weatherData.main.temp_min,
                    // maxTemp: weatherData.main.temp_max,
                    icon: weatherData.current.weather[0].icon,
                    mainCond: weatherData.current.weather[0].main,
                    sevenDayFore: weatherData.daily
                })}
        )
       }
       render(){
        //    const newForearr = {...this.state.sevenDayFore}
        //    console.log(newForearr);
       return(
           <div>
           <div className="weatherBox">
                <h3>The current weather conditions at {this.props.name} are:</h3>
               <img className='weatherIcon' src={`http://openweathermap.org/img/wn/${this.state.icon}@2x.png`} alt={this.state.mainCond} />
                <h3>{this.state.mainCond}</h3>
               <p>Current temperature: </p><h3 className='weatherData'>{this.state.currTemp}°F</h3>
               <p>Feels like: </p><h3 className='weatherData'>{this.state.feelsLike}°F</h3>
               {/* <p>High: </p><h3 className='weatherData'>{this.state.sevenDayFore[0][0].temp.max}°F</h3>
               <p>Low: </p><h3 className='weatherData'>{this.state.sevenDayFore[0][0].temp.min}°F</h3> */}
               <main className='forecast-main'>
                   <h4>Seven Day Forecast</h4>
               {this.state.sevenDayFore.slice(1).map(day => <WeatherForeCard key={day.index} {...day}/> 
               )}
               </main>
           </div>
           </div>
       )}
}

export default WeatherData