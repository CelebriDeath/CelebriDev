'use strict';

var React = require('react');
var ajax = require('jquery').ajax;

var Celeb = React.createClass({

  render: function() {
    return <li><span>{this.props.data.moniker + ' • '}</span><span>{this.props.data.category1 + ' • '}</span>{this.props.data.age}</li>
  }
});

var CelebList = React.createClass({

  render: function() {
    var celebs = this.props.data.map(function(celeb) {
      return <Celeb data={celeb} key={celeb._id}/>;
    });
    return (
      <section>
        <h1 className="titleFont">List of All Celebrities in Database:</h1>
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
      <section className="contain cf">
        <CelebList data={this.state.celebsData} />
      </section>
    )
  }
});

var Browse = React.createClass({

  getInitialState: function() {
    return {celebsData: []};
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
      <section className="contain cf">
        <CelebList data={this.state.celebsData} />
      </section>
    )
  }
});

React.render(<DataEntry celebsBaseUrl={'/api/v1/celebs'}/>, document.getElementById("browse"));
