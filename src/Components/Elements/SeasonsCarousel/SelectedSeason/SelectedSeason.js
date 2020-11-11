import React from 'react'
import "./SelectedSeason.scss"

class SelectedSeason extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        console.log("selected season is", this.props.season)
        return (
            <div>
                {this.props.season &&
                    <div className="selectedSeason__entete" style={{ backgroundImage: `url('${process.env.REACT_APP_IMAGE_LINK + this.props.season.poster_path}')` }}>
                        {this.props.season.name}
                    </div>
                }
            </div>
        )
    }
}

export default SelectedSeason