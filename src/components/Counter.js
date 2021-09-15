import React from 'react';


class Counter extends React.Component {
    state = {
        counter: 0,
    }
    substract = () => {
        this.setState({counter : this.state.counter -1 });
    }
    add = () => {
        this.setState({counter : this.state.counter +1 });
    }
    reset = () => {
        this.setState({counter : 0 });
    }
    render() { 
        console.log(this.state)
        return ( <div className="container">
                <section className="box">
                    <div className="buttons">
                    <button className="sub" onClick={this.substract}>-</button>
                    <div className="numb"> {this.state.counter} </div>
                    <button className="add" onClick={this.add}>+</button>
                    </div>
                    <button className="reset" onClick={this.reset}>RESET</button>
            </section>
        </div>);
    }
}

export default Counter;