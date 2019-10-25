import { setTimingsListWatcher, setReadersWatcher } from "../../actions/FinishCorridorActions";
import { connect } from "react-redux";
import Component from "./FinishCorridor";

const mapStateToProps = (state) => {
    return {
        timingsList: state.finishCorridor.timingsList,
        readers: state.finishCorridor.readers,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setTimingsListWatcher: () => setTimingsListWatcher(dispatch),
        setReadersWatcher: () => setReadersWatcher(dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
