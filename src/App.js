import logo from "./logo.svg";
// import "./App.css";

import { connect } from "react-redux";
import { increaseCounter, decreaseCounter } from "./action/actions";
// import store from "./redux/store";
import axios from "axios";

import Home from "./components/Home";

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
