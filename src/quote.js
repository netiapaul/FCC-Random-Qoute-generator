import React from 'react';
import Twitter from './assets/twitter.svg';
import Tumblr from './assets/tumblr.svg';
import Quote from './assets/quote.svg';

class QuoteMachine extends React.Component{

    constructor(props){
        super(props);
        this.state={
            quote:""
        }
        this.newQuote = this.newQuote.bind(this);
    }

    newQuote(){
        fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes")
        .then(res => res.json())
        .then(data => data.forEach(quotes => {
           this.setState({
               quote:quotes
           })
        }))
        .catch(err => console.log(err))
    }

    componentDidMount() {
        this.newQuote()
    }

   render() {
        const {quote} = this.state;   

       return(
        <>
        <div className="card m-5" id="quote-box">
            <div className="card-body">
                <blockquote class="blockquote mb-0">
                    <img src={Quote} className="App-logo" alt="logo" width={25}/>
                    <p id="text">{quote.quote}</p>
                    <footer class="blockquote-footer float-right" id="author">
                        {quote.author}
                    </footer>
                </blockquote>

            <br/>

                <div className="row mt-4">

                    <div className="col d-flex flex-row">

                        <div className="mr-3">
                        <a href="twitter.com/intent/tweet" id="tweet-quote">
                            <button type="button" className="btn btn-secondary btn-sm">
                                <img src={Twitter} className="App-logo" alt="logo" width={25}/>
                             </button>
                        </a>
                             
                        </div>

                        <div>
                            <button type="button" className="btn btn-secondary btn-sm">
                            <img src={Tumblr} className="App-logo" alt="logo" width={25}/>
                            </button>
                        </div>

                    </div>

                    <div className="col">
                        <div>
                         <button type="button" id="new-quote" className="btn btn-primary float-right" onClick={this.newQuote}>New Quote</button>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
            <p className="text-center">by Paul Netia</p>
        </>
    )}
    
};

export default QuoteMachine;