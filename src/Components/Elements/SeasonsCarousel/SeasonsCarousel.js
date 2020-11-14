import React from 'react'
import Season from "./Season/Season"
import './SeasonsCarousel.scss'

class SeasonsCarousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedSeason: 1,
            isSelectingSeason: false,
        }
        this.handleSelectSeason = this.handleSelectSeason.bind(this)
        this.setSeason = this.setSeason.bind(this)
    }

    handleSelectSeason() {
        this.setState({ isSelectingSeason: true })
    }

    setSeason(selectedSeason){
        this.setState({selectedSeason : selectedSeason, isSelectingSeason: false})
    }

    render() {
        console.log(this.props)
        return (
            <div className="seasons__carouselContainer">
                <div className="seasons__seasonsContainer" style={{transform: `translateX(-${this.state.selectedSeason - 1}00vw)`}}>
                    {this.props.seasons.map((season, index) => (
                        <Season handleSelectSeason={this.handleSelectSeason} isSelectingSeason={this.state.isSelectingSeason} serieInfos={this.props.serieInfos} season={season} seasonNumber={index} serieId={this.props.serieId} />
                    ))}
                </div>

                {this.state.isSelectingSeason === true &&
                    <div >
                        {this.props.seasons.map((season, index) => (
                            <div onClick={()=>{this.setSeason(index + 1)}}>{index + 1}</div>
                        ))}
                    </div>
                }
            </div>
        )
    }
}

export default SeasonsCarousel