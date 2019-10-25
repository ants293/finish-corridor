import { setCapturesWatcher, setReadersWatcher } from "../../actions/FinishCorridorActions";
import { connect } from "react-redux";
import Component from "./FinishCorridor";

const mapStateToProps = (state) => {
    return {
        capturesList: state.finishCorridor.capturesList,
        readers: state.finishCorridor.readers,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setCapturesWatcher: () => setCapturesWatcher(dispatch),
        setReadersWatcher: () => setReadersWatcher(dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
