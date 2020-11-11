import React from 'react';
import axios from 'axios';
import './Landing.scss';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: null
    };
  }

    componentDidMount() {
        console.log(process.env)
        axios.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.REACT_APP_API_TOKEN}&language=en-FR`).then((res) => this.setState({ series: res.data.results.splice(0, 5) }))
    }

    render() {
        return (
            <React.Fragment>
                {this.state.series &&

                    <div onClick={() => { console.log(this.state) }} className="landing__globalContainer">
                        <div className="landing__trendingContainer" style={{backgroundImage : `url('${process.env.REACT_APP_IMAGE_LINK + this.state.series[0].backdrop_path}')`}}>
                            {this.state.series[0].original_name}
                        </div>

                        <React.Fragment>
                            {this.state.series.splice(1,4).map((serie) => (
                                <div>{serie.original_name}</div>
                            ))}
                        </React.Fragment>

                    </div>
                }
            </React.Fragment>
        )
    }
}

export default Landing;
