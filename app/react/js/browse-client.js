'use strict';

var React = require('react');
var ajax = require('jquery').ajax;

var Celeb = React.createClass({

  render: function() {
    return <li><span>{this.props.data.moniker + ' • '}</span><span>{this.props.data.category1 + ' • '}</span>{this.props.data.age}</li>
  }
});

var CelebForm = React.createClass({

  getInitialState: function() {
    return {newCeleb: {moniker: '', category: '', deathDate: ''}};
  },

  profileChange: function(event) {
    var stateCopy = this.state;
    if (event.target.name === 'new-moniker')
      stateCopy.newCeleb.moniker = event.target.value;
    if (event.target.name === 'new-category1')
      stateCopy.newCeleb.category1 = event.target.value;
    if (event.target.name === 'new-category2')
      stateCopy.newCeleb.category2 = event.target.value;
    if (event.target.name === 'new-category3')
      stateCopy.newCeleb.category3 = event.target.value;
    if (event.target.name === 'new-lastName')
      stateCopy.newCeleb.lastName = event.target.value;
    if (event.target.name === 'new-firstName')
      stateCopy.newCeleb.firstName = event.target.value;
    if (event.target.name === 'new-middleName')
      stateCopy.newCeleb.middleName = event.target.value;
    if (event.target.name === 'new-suffix')
      stateCopy.newCeleb.suffix = event.target.value;
    if (event.target.name === 'new-birth')
      stateCopy.newCeleb.birth = event.target.value;
    if (event.target.name === 'new-death')
      stateCopy.newCeleb.death = event.target.value;
    if (event.target.name === 'new-age')
      stateCopy.newCeleb.age = event.target.value;
    if (event.target.name === 'new-bio')
      stateCopy.newCeleb.bio = event.target.value;
    if (event.target.name === 'new-photoLink')
      stateCopy.newCeleb.photoLink = event.target.value;
    if (event.target.name === 'new-burialCoords')
      stateCopy.newCeleb.burialCoords = event.target.value;
    if (event.target.name === 'new-burialAddy')
      stateCopy.newCeleb.burialAddy = event.target.value;
    if (event.target.name === 'new-burialCity')
      stateCopy.newCeleb.burialCity = event.target.value;
    if (event.target.name === 'new-burialState')
      stateCopy.newCeleb.burialState = event.target.value;
    if (event.target.name === 'new-burialZIP')
      stateCopy.newCeleb.burialZIP = event.target.value;
    if (event.target.name === 'new-burialCountry')
      stateCopy.newCeleb.burialCountry = event.target.value;
    if (event.target.name === 'new-burialFacility')
      stateCopy.newCeleb.burialFacility = event.target.value;
    if (event.target.name === 'new-howDied')
      stateCopy.newCeleb.howDied = event.target.value;
    this.setState(stateCopy);
  },

  profileSubmit: function(event) {
    event.preventDefault();
    console.log(this.state.newCeleb);
    var newCeleb = this.state.newCeleb;
    ajax({
      url: this.props.url,
      contentType: 'application/json',
      type: 'POST',
      data: JSON.stringify(newCeleb),
      success: function(data) {
        this.props.onNewCelebSubmit(data);
        // the next line clears the form after hitting submit button
        this.setState({newCeleb: {moniker: '', category: '', deathDate: ''}});
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
  },

  render: function() {
    return (

      <form onSubmit={this.profileSubmit}>
        <h3>Stuff</h3>
      </form>
    )
  }
});

var CelebList = React.createClass({

  render: function() {
    var celebs = this.props.data.map(function(celeb) {
      return <Celeb data={celeb} key={celeb._id}/>;
    });
    return (
      <section>
        <h1 class="titleFont">List of All Celebrities in Database:</h1>
        <ul>
          {celebs}
        </ul>
      </section>
    )
  }
});

var DataEntry = React.createClass({

  getInitialState: function() {
    return {celebsData: []};
  },

  onNewCeleb: function(celeb) {
    celeb._id = this.state.celebsData.length + 1;
    var stateCopy = this.state;
    stateCopy.celebsData.push(celeb);
    this.setState(stateCopy);
  },

  componentDidMount: function() {
    ajax({
      url: this.props.celebsBaseUrl,
      dataType: 'json',
      success: function(data) {
        var state = this.state;
        state.celebsData = data;
        this.setState(state);
      }.bind(this),
      error: function(xhr, status) {
        console.log(xhr, status);
      }
    });
  },

  render: function() {
    return (
      <main class="contain cf">
        <CelebList data={this.state.celebsData} />
      </main>
    )
  }
});

var Browse = React.createClass({

  getInitialState: function() {
    return {celebsData: []};
  },

  onNewCeleb: function(celeb) {
    celeb._id = this.state.celebsData.length + 1;
    var stateCopy = this.state;
    stateCopy.celebsData.push(celeb);
    this.setState(stateCopy);
  },

  componentDidMount: function() {
    ajax({
      url: this.props.celebsBaseUrl,
      dataType: 'json',
      success: function(data) {
        var state = this.state;
        state.celebsData = data;
        this.setState(state);
      }.bind(this),
      error: function(xhr, status) {
        console.log(xhr, status);
      }
    });
  },

  render: function() {
    return (
      <main class="contain cf">
        <CelebList data={this.state.celebsData} />
      </main>
    )
  }
});

React.render(<DataEntry celebsBaseUrl={'/api/v1/celebs'}/>, document.getElementById("browse"));
