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
    console.log(process.env);
    axios
      .get(
        `https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.REACT_APP_API_TOKEN}&language=en-FR`
      )
      .then(res => this.setState({ series: res.data.results.splice(0, 5) }));
  }

  render() {
    return (
      <div
        onClick={() => {
          console.log(this.state);
        }}
      >
        {this.state.series && (
          <React.Fragment>
            {this.state.series.map(serie => (
              <div>{serie.original_name}</div>
            ))}
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default Landing;
