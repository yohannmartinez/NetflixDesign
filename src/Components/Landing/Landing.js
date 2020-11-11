import React from 'react';
import axios from 'axios';
import TrendingCard from '../TrendingCard/TrendingCard';

import './Landing.scss';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: null
    };
  }

  componentDidMount() {
    console.log(process.env);
    axios
      .get(
        `https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.REACT_APP_API_TOKEN}&language=en-FR`
      )
      .then(res => this.setState({ series: res.data.results.splice(0, 5) }));
  }

  handleClick = (serie_id) => {
    window.location.href = "/serie/" + serie_id
  }

  render() {
    return (
      <React.Fragment>
        {this.state.series && (
          <div
            onClick={() => {
              console.log(this.state);
            }}
            className="landing__globalContainer"
          >
            <div
              className="landing__trendingContainer"
              style={{
                backgroundImage: `url('${process.env.REACT_APP_IMAGE_LINK +
                  this.state.series[0].backdrop_path}')`
              }}
            >
              {this.state.series[0].original_name}
            </div>

            <div className="trendingCard__globalContainer">
              {this.state.series.splice(1, 4).map(serie => (
                <div onClick={()=>{this.handleClick(serie.id)}}>
                  <TrendingCard
                    title={serie.name}
                    imageSerie={
                      process.env.REACT_APP_IMAGE_LINK + serie.backdrop_path
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Landing;
