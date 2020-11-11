import Axios from 'axios'
import React from 'react'
import SeasonsCarousel from '../Elements/SeasonsCarousel/SeasonsCarousel'

import './Serie.scss'

class Serie extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            serie: null,
        }
    }

    componentDidMount() {
        Axios.get(`http://api.themoviedb.org/3/tv/${window.location.pathname.split("/")[2]}?api_key=${process.env.REACT_APP_API_TOKEN}&append_to_response=videos`).then((res) => {
            this.setState({ serie: res.data })
        })
    }

    render() {
        return (
            <React.Fragment>
                {this.state.serie &&
                    <div onClick={() => { console.log(this.state) }}>
                        <SeasonsCarousel seasons={this.state.serie.seasons} />
                    </div>
                }
            </React.Fragment>
        )
    }
}

export default Serie 