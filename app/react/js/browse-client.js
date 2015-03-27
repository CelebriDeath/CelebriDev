'use strict';

var React = require('react');
var ajax = require('jquery').ajax;

var Celeb = React.createClass({

  render: function() {
    return <li><a href="https://celebrideath.herokuapp.com/#/profiles/550e1d7b91d7bb030008eb48"><span>{this.props.data.moniker + ' • '}</span>{this.props.data.category1}</a></li>
    // return <li>{<a href='https://celebrideath.herokuapp.com/#/profiles/' + this.props.data._id + '"'} /> + this.props.data.moniker + ' • ' + this.props.data.category1 + '</a>'}</li>
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

React.render(<Browse celebsBaseUrl={'/api/v1/celebs'}/>, document.getElementById("browse"));
