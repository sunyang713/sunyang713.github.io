// var Quotes = require('react-components/quotes.js');



var quotes =
[{"text": "Confused? Excellent. Keep calm and carry on.", "speaker": "Sworcery"},
 {"text": "Take up the challenge", "speaker": "Z"},
 {"text": "You're cute. I'm cute. We should go out.", "speaker": "Z"},
 {"text": "Can we not?", "speaker": "Z"},
 {"text": "My dad gave me some advice before he died. He said, son, if you see a beautiful woman, you have to flirt with her. It's rude not to.", "speaker": "Lowell"},
 {"text": "Let's dance like crazy potatoes on difficult days", "speaker": "Andre"}];


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
      <div className="quote-block">
        <h1 className="cover-heading">{ quote }</h1>
        <p className="lead"> - { speaker }</p>
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
            <div className="quote-toggle" onClick={this.toggle}>
              <p></p>
            </div>
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




