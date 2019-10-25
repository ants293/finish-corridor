import VirtualizedTable from "../shared/VirtualizedTable/VirtualizedTable";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { updateFinishCorridorList } from "../../actions/FinishCorridorActions";

function FinishCorridor(props) {
    const { timingsList, updateTimingsList } = props;

    useEffect(() => {
        updateTimingsList();
        updateReaders();
        }, []
    );

    return (
        <VirtualizedTable
            options={{
                list: timingsList,
                rowHeight: 20,
                headerHeight: 20
            }}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        timingsList: state.finishCorridor.timingsList,
        readers: state.finishCorridor.readers,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateTimingsList: () => updateFinishCorridorList(dispatch),
        updateReaders: () => updateReaders(dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FinishCorridor);
