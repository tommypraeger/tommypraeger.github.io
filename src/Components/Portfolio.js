import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = 'images/portfolio/' + projects.image;
        return <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={projects.url} title={projects.title} target="_blank" rel="noopener noreferrer">
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                </div>
              </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
          <p>{projects.category}</p>
        </div>
      })
    }

    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">

            <h1>Projects</h1>

            <div id="portfolio-wrapper" className="cf">
              {projects}
            </div>
            <div className="twelve columns">
              Most of my other big projects have been done for classes or internships, 
              but I hope to add more soon. For now, I have some smaller projects on my GitHub.
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
