import React from 'react'
import './Episode.scss'

class Episode extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
                {this.props.episode.still_path &&
                    <div className="episode__container" style={{ backgroundImage: `url('${process.env.REACT_APP_IMAGE_LINK + this.props.episode.still_path}')` }}>
                        {this.props.episode.episode_number.toString().length === 1 ? "0" + this.props.episode.episode_number : this.props.episode.episode_number}
                    </div>
                }
            </React.Fragment>
        )
    }
}

export default Episode