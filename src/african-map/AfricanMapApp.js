import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import AfricanMap from './AfricanMap';
import './AfricanMap.scss';

import classnames from 'classnames';

import SouthAfricaClip from './resource/video/SouthAfricaClip.mp4';
import ZimbabweClip from './resource/video/ZimbabweClip.mp4';
import NamibiaClip from './resource/video/NamibiaClip.mp4';
import MozambiqueClip from './resource/video/MozambiqueClip.mp4';
import BotswanaClip from './resource/video/BotswanaClip.mp4';

export default class AfricanMapApp extends Component {
  state = {
    activeCountries: [
      'Zimbabwe',
      'Botsuana',
      'SouthAfrica',
      'Mozambique',
      'Namibia'
    ],
    selectedCountry: ''
  };
  selectCountry = country => {
    this.setState({ selectedCountry: country });
  };

  render() {
    const { activeCountries, selectedCountry } = this.state;
    return (
      <>
        <h1
          className={classnames('main-title', {
            'main-title-shrinked': selectedCountry !== ''
          })}
        >
          Discover Africa
        </h1>
        <section id="african-map-app">
          <CountryDetail selectedCountry={selectedCountry} />
          {/* </ReactCSSTransitionGroup> */}
          <AfricanMap
            className="centered"
            countries={activeCountries}
            selectCountry={this.selectCountry}
          />
        </section>
        <Background selectedCountry={selectedCountry} />
      </>
    );
  }
}

function CountryDetail({ selectedCountry }) {
  return selectedCountry === '' ? (
    false
  ) : (
    <ReactCSSTransitionGroup
      transitionName="details"
      transitionAppear={true}
      transitionAppearTimeout={2000}
      transitionEnter={false}
      transitionLeave={false}
    >
      <div className="country-details" key="country-detail">
        <h1 key="country-detail-title">{selectedCountry}</h1>
        <Subtitle country={selectedCountry} />
        <p key="country-detail-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget
          varius est. Sed ut dictum lectus, sed euismod dolor. Phasellus
          placerat ultrices lorem. Donec blandit condimentum diam, sed fringilla
          nibh vulputate et. Nulla scelerisque ipsum quis mollis porttitor.
          Donec blandit id nibh sit amet gravida. Nullam interdum arcu erat, ut
          laoreet dolor viverra a. Sed condimentum tortor vitae dui blandit
          consectetur. Suspendisse semper convallis augue vel blandit. Aliquam
          erat volutpat. Vivamus consequat maximus nulla at eleifend. Vivamus
          viverra quam nec ipsum luctus bibendum. Vestibulum nec vestibulum mi,
          ut vestibulum justo. Suspendisse sed urna ut felis lacinia semper nec
          vitae massa.
        </p>
      </div>
    </ReactCSSTransitionGroup>
  );
}

function Subtitle({ country }) {
  let quote;
  switch (country) {
    default:
    case 'Namibia':
      quote = 'Wild and Appealing';
      break;
    case 'Botsuana':
      quote = 'Colourful and Happy';
      break;
    case 'Mozambique':
      quote = 'Calm and Mesmerizing';
      break;
    case 'Zimbabwe':
      quote = 'Mysterious and Untamed';
      break;
    case 'SouthAfrica':
      quote = 'Rich and Pround';
      break;
  }

  return (
    <h2 key="quote" className="country-quote">
      {quote}
    </h2>
  );
}

function Background({ selectedCountry }) {
  const video = setVideoUrl(selectedCountry);
  return selectedCountry !== '' ? (
    <ReactCSSTransitionGroup
      transitionName="video"
      transitionEnterTimeout={1000}
      transitionLeaveTimeout={500}
    >
      <video
        key={selectedCountry + '-video'}
        autoPlay
        muted
        loop
        className="background-video"
      >
        <source
          key={selectedCountry + '-video-src'}
          src={video}
          type="video/mp4"
        />
      </video>
    </ReactCSSTransitionGroup>
  ) : (
    <ReactCSSTransitionGroup
      transitionName="image"
      transitionEnterTimeout={5000}
      transitionLeaveTimeout={500}
    >
      <div className="background-image" />
    </ReactCSSTransitionGroup>
  );
}

function setVideoUrl(country) {
  switch (country) {
    default:
    case 'Namibia':
      return NamibiaClip;
    case 'Botsuana':
      return BotswanaClip;
    case 'Mozambique':
      return MozambiqueClip;
    case 'Zimbabwe':
      return ZimbabweClip;
    case 'SouthAfrica':
      return SouthAfricaClip;
  }
}
