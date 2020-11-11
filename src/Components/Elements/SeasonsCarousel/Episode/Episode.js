import React from 'react'
import './Episode.scss'

class Episode extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return(
            <div className="episode__container" style={{backgroundImage : `url('${process.env.REACT_APP_IMAGE_LINK + this.props.episode.still_path}')`}}>
                {this.props.episode.name}
            </div>
        )
    }
}

export default Episode