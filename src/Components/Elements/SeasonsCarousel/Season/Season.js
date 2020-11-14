import Axios from 'axios'
import React from 'react'
import Episode from "../Episode/Episode"
import "./Season.scss"

class Season extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            season: null,
        }
    }

    componentDidMount() {
        Axios.get(`https://api.themoviedb.org/3/tv/${this.props.serieId}/season/${this.props.seasonNumber + 1}?api_key=${process.env.REACT_APP_API_TOKEN}&language=en-US`).then((res) => {
            this.setState({ season: res.data })
        })
    }

    render() {
        return (
            <div className="season__globalContainer" onClick={() => { console.log("season is", this.state.season) }}>
                {this.state.season &&
                    <React.Fragment>
                        <div className="season__enteteBackground" style={{ backgroundImage: `url('${process.env.REACT_APP_IMAGE_LINK + this.state.season.poster_path}')` }}></div>

                        {this.props.isSelectingSeason === false &&
                            <React.Fragment>
                                <div className="season__entete" >

                                    <div className="season__serieInfos">
                                        <h1>{this.props.serieInfos.name}</h1>
                                        <div>
                                            <span>{this.props.serieInfos.vote_average * 10}% Match</span>
                                            <span>{this.props.serieInfos.first_air_date.split("-")[0] + "-" + this.props.serieInfos.last_air_date.split("-")[0]} </span>
                                        </div>
                                        <button>Play</button>
                                    </div>

                                    <div>
                                        <p>season {this.state.season.season_number}</p>
                                        <button onClick={() => { this.props.handleSelectSeason() }}>See others seasons</button>
                                        <div className="season__episodesContainer">
                                            {this.state.season.episodes.map((episode) => (
                                                <Episode episode={episode} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="season__details">
                                    <div>
                                        <h1 className="season__detailsTitle">Overview</h1>
                                        <span>{this.state.season.overview}</span>
                                    </div>
                                    <div>
                                        <h1 className="season__detailsTitle">Tous les détails que tu veux</h1>
                                        <span>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</span>
                                    </div>


                                </div>
                            </React.Fragment>
                        }

                    </React.Fragment>
                }
            </div>
        )
    }
}

export default Season