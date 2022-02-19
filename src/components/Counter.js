import classes from './Counter.module.css';
import { counterActions } from '../store/counter';
import { useSelector, useDispatch } from 'react-redux'
/* import { connect } from 'react-redux';
import { Component } from 'react'; */

const Counter = () => {

    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter.counter)
    const show = useSelector(state => state.counter.showCounter)

    const incrementCounterHandler = () =>{
        dispatch(counterActions.increment())
    }

    const increaseHandler = () =>{
        dispatch(counterActions.increase(5))
    }

    const decrementCounterHandler = () =>{
        dispatch(counterActions.decrement())
    }

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleCounter())
     };

    

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {show && <div className={classes.value}>{counter}</div> }
            {show && <div>
                <button onClick={incrementCounterHandler}>Increment</button>
                <button onClick={increaseHandler}>Increment by 5</button>
                <button onClick={decrementCounterHandler}>Decrement</button>
            </div>}
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter


/* class Counter extends Component {

    incrementCounterHandler() {
        this.props.increment()
    }

    decrementCounterHandler() {
        this.props.decrement()
    }

    toggleCounterHandler() {}

    render() {
        return (
            <main className={classes.counter}>
                <h1>Redux Counter</h1>
                <div className={classes.value}>{this.props.counter}</div>
                <div>
                    <button onClick={this.incrementCounterHandler.bind(this)}>Increment</button>
                    <button onClick={this.decrementCounterHandler.bind(this)}>Decrement</button>
                </div>
                <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
            </main>
        );
    }
}

const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({type: 'increment'}),
        decrement: () => dispatch({type: 'decrement'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter); */