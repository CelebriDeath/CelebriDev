'use strict';

var React = require('react');
var ajax = require('jquery').ajax;

var celebsData = [{moniker: 'John F. Kennedy', category: 'politician', deathDate: 19631122, _id: 1}];

var Celeb = React.createClass({

  render: function() {
    return <li><span>{this.props.data.moniker + ' • '}</span><span>{this.props.data.category1 + ' • '}</span>{this.props.data.death}</li>
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
        <h3>Data Entry Instructions</h3>
        <h4>1. Most data can be pulled from Wikipedia and www.findagrave.com; do not worry about giving citations.</h4>
        <h4>2. For the coordinates, look for them inside the link on Google Maps. Will look something like the example below.</h4>
        <h4>3. THANKS! Every little bit helps. We can edit later.</h4>
        <p><label htmlFor="new-moniker"></label>
        <input id="new-moniker" type="text" value={this.state.newCeleb.moniker} onChange={this.profileChange} name="new-moniker" /> Moniker: (Marilyn Monroe)</p>

        <p><label htmlFor="new-category1"></label>
        <input id="new-category1" type="text" value={this.state.newCeleb.category1} onChange={this.profileChange} name="new-category1" /> Category 1: (Actor)</p>

        <p><label htmlFor="new-category2"></label>
        <input id="new-category2" type="text" value={this.state.newCeleb.category2} onChange={this.profileChange} name="new-category2" /> Category 2: (Model)</p>

        <p><label htmlFor="new-category3"></label>
        <input id="new-category3" type="text" value={this.state.newCeleb.category3} onChange={this.profileChange} name="new-category3" /> Category 3: (Wife of Joe DiMaggio and Arthur Miller)</p>

        <p><label htmlFor="new-lastName"></label>
        <input id="new-lastName" type="text" value={this.state.newCeleb.lastName} onChange={this.profileChange} name="new-lastName" /> Last Name: (Baker)</p>

        <p><label htmlFor="new-firstName"></label>
        <input id="new-firstName" type="text" value={this.state.newCeleb.firstName} onChange={this.profileChange} name="new-firstName" /> First Name: (Norma)</p>

        <p><label htmlFor="new-middleName"></label>
        <input id="new-middleName" type="text" value={this.state.newCeleb.middleName} onChange={this.profileChange} name="new-middleName" /> Middle Name: (Jeane)</p>

        <p><label htmlFor="new-suffix"></label>
        <input id="new-suffix" type="text" value={this.state.newCeleb.suffix} onChange={this.profileChange} name="new-suffix" /> Suffix: ( )</p>

        <p><label htmlFor="new-birth"></label>
        <input id="new-birth" type="text" value={this.state.newCeleb.birth} onChange={this.profileChange} name="new-birth" /> Birth: (19260601) YYYYMMDD</p>

        <p><label htmlFor="new-death"></label>
        <input id="new-death" type="text" value={this.state.newCeleb.death} onChange={this.profileChange} name="new-death" /> Death: (19620805) YYYYMMDD</p>

        <p><label htmlFor="new-howDied"></label>
        <input id="new-howDied" type="text" value={this.state.newCeleb.howDied} onChange={this.profileChange} name="new-howDied" /> How Died: (Overdose)</p>

        <p><label htmlFor="new-age"></label>
        <input id="new-age" type="text" value={this.state.newCeleb.age} onChange={this.profileChange} name="new-age" /> Age: (36)</p>

        <p><label htmlFor="new-death"></label>
        <input id="new-bio" type="text" value={this.state.newCeleb.bio} onChange={this.profileChange} name="new-bio" /> Bio: (Just cut and paste the first paragraph of Wikipedia for now)</p>

        <p><label htmlFor="new-photoLink"></label>
        <input id="new-photoLink" type="text" value={this.state.newCeleb.photoLink} onChange={this.profileChange} name="new-photoLink" />  Photo Link: ("right-click on the image to get its link")</p>

        <p><label htmlFor="new-burialCoords"></label>
        <input id="new-burialCoords" type="text" value={this.state.newCeleb.burialCoords} onChange={this.profileChange} name="new-burialCoords" /> Grave - Coordinates: (34.05847, -118.43979)</p>

        <p><label htmlFor="new-burialAddy"></label>
        <input id="new-burialAddy" type="text" value={this.state.newCeleb.burialAddy} onChange={this.profileChange} name="new-burialAddy" /> Grave - Address: (1218 Glendon Avenue)</p>

        <p><label htmlFor="new-burialCity"></label>
        <input id="new-burialCity" type="text" value={this.state.newCeleb.burialCity} onChange={this.profileChange} name="new-burialCity" /> Grave - City: (Los Angeles)</p>

        <p><label htmlFor="new-burialState"></label>
        <input id="new-burialState" type="text" value={this.state.newCeleb.burialState} onChange={this.profileChange} name="new-burialState" /> Grave - State: (CA)</p>

        <p><label htmlFor="new-burialZIP"></label>
        <input id="new-burialZIP" type="text" value={this.state.newCeleb.burialZIP} onChange={this.profileChange} name="new-burialZIP" /> Grave - ZIP: (90024)</p>

        <p><label htmlFor="new-burialCountry"></label>
        <input id="new-burialCountry" type="text" value={this.state.newCeleb.burialCountry} onChange={this.profileChange} name="new-burialCountry" /> Grave - Country: (USA)</p>

        <p><label htmlFor="new-burialFacility"></label>
        <input id="new-burialFacility" type="text" value={this.state.newCeleb.burialFacility} onChange={this.profileChange} name="new-burialFacility" /> Grave - Facility: (Westwood Village Memorial Park Cemetery)</p>

        <button type="submit">Create New Celebrity</button>
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
        <h1>Dead Celebrities Already Entered:</h1>
        <ul>
          {celebs}
        </ul>
      </section>
    )
  }
});

var CelebsApp = React.createClass({

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
      <main>
        <CelebForm onNewCelebSubmit={this.onNewCeleb} url={this.props.celebsBaseUrl}/>
        <CelebList data={this.state.celebsData} />
      </main>
    )
  }
});

React.render(<CelebsApp celebsBaseUrl={'/api/v1/celebs'}/>, document.body);
