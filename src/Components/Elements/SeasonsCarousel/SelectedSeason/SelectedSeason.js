import Axios from 'axios'
import React from 'react'
import Episode from "../Episode/Episode"
import "./SelectedSeason.scss"

class SelectedSeason extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            season: null,
        }
    }

    componentDidMount(){
        Axios.get(`https://api.themoviedb.org/3/tv/${this.props.serieId}/season/${this.props.seasonNumber + 1}?api_key=${process.env.REACT_APP_API_TOKEN}&language=en-US`).then((res)=>{
            this.setState({season: res.data})
        })
    }

    render() {
        
        return (
            <div onClick={()=>{console.log('season is ', this.state)}}>
                {this.state.season &&
                    <React.Fragment>
                        <div className="selectedSeason__entete" style={{ backgroundImage: `url('${process.env.REACT_APP_IMAGE_LINK + this.state.season.poster_path}')` }}>
                            
                        </div>
                        <div>
                            <p>season {this.state.season.season_number}</p>
                            <div>
                                {this.state.season.episodes.map((episode)=>(
                                    <Episode episode={episode}/>
                                ))}
                            </div>
                        </div>
                    </React.Fragment>
                }
            </div>
        )
    }
}

export default SelectedSeason