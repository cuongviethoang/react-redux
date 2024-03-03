import logo from "./logo.svg";
// import "./App.css";

import { connect } from "react-redux";
import { increaseCounter, decreaseCounter } from "./action/actions";
// import store from "./redux/store";

import Home from "./components/Home";

import { useSelector, useDispatch } from "react-redux";

function App(props) {
    const dispatch = useDispatch();

    const newCount = useSelector((state) => {
        return state.counter.count;
    });

    const handleIncrease = () => {
        // props.increaseCounter();

        //fire actions
        // store.dispatch()
        dispatch(increaseCounter());
    };

    return <Home />;
}

// map state (redux store) + props react
// const mapStateToProps = (state) => {
//     return {
//         count: state.counter.count,
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         increaseCounter: () => dispatch(increaseCounter()),

//         decreaseCounter: () => dispatch(decreaseCounter()),
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
