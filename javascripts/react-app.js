// var Quotes = require('react-components/quotes.js');



var quotes =
[{"text": "Let's dance like crazy potatoes on difficult days", "speaker": "Andre"}];


var RandomQuote = React.createClass({
  render: function() {
    var thing = this.props.toggler;
    var max = quotes.length-1;
    var min = 0;
    var randNum = Math.floor(Math.random() * (max - min + 1)) + min;
    var dat = quotes[randNum];
    var quote = dat["text"];
    var speaker = dat["speaker"];
    return (
      <div className="quote-block cover-text">
        <h1>{ quote }</h1>
        <p className="speaker"> - { speaker }</p>
      </div>
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
      <div className="cover-block">
        <div className="cover-container">
          <div className="inner cover">
            <RandomQuote toggler={this.state.thing} />
            <!--div className="quote-toggle" onClick={this.toggle}>
              <p></p>
            </div-->
          </div>
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




