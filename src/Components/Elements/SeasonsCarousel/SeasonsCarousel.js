import React from 'react'
import SelectedSeason from "./SelectedSeason/SelectedSeason"

class SeasonsCarousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedSeason: 0,
            isSelectingSeason : false,
        }
    }

    render() {
        return (
            <div>
                <SelectedSeason season={this.props.seasons[this.state.selectedSeason]} seasonNumber={this.state.selectedSeason} />

            </div>
        )
    }
}

export default SeasonsCarousel