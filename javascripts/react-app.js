// var Quotes = require('react-components/quotes.js');






var RandomQuote = React.createClass({
  render: function() {
    var thing = this.props.toggler;
    var max = 10;
    var min = 0;
    var randNum = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randNum);
    return (
      <p> hello </p>
    );
  }
});



var QuoteBlock = React.createClass({
  getInitialState: function() {
    return {
      thing: false
    };
  },

  toggle: function() {
    this.setState({
      thing: !this.state.thing
    });
  },

  render: function() {
    return (
      <div id="quote-block">
        <div className="quote-text">
          <RandomQuote toggler={this.state.thing} />
        </div>
        <div className="quote-toggle-button">
          <a onClick={this.toggle}>Click to Toggle</a>
        </div>
      </div>
    );
  }
});


var Shit = React.createClass({
  render: function() {
    // var thing = this.props.toggler;
    // var randNum = Math.floor(Math.random() * (max - min + 1)) + min;
    // console.log(randNum);
    return (
      <p> hello </p>

    );
  }
});



React.render(
  <QuoteBlock />,
  document.getElementById('react-app')
);


















var ExampleApplication = React.createClass({
  render: function() {
    var elapsed = Math.round(this.props.elapsed  / 100);
    var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );
    var message =
      'React has been successfully running for ' + seconds + ' seconds.';

    return <p>{message}</p>;
  }
});

var start = new Date().getTime();

setInterval(function() {
  React.render(
    <ExampleApplication elapsed={new Date().getTime() - start} />,
    document.getElementById('react-app-timer')
  );
}, 50);


