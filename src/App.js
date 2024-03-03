import logo from "./logo.svg";
import "./App.css";

import { connect } from "react-redux";
import { increaseCounter, decreaseCounter } from "./action/actions";
// import store from "./redux/store";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
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

    const fetchAllUser = async () => {
        const res = await axios.get("http://localhost:8080/api/v1/user/read");
        const data = res && res.data ? res.data : [];
        console.log(">> check data: ", data);
    };

    useEffect(() => {
        fetchAllUser();
    }, []);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Hello world</p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <div>Count: {newCount}</div>

                <button onClick={() => handleIncrease()}>Increase Count</button>

                <button onClick={() => dispatch(decreaseCounter())}>
                    Decrease Count
                </button>
            </header>
        </div>
    );
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
