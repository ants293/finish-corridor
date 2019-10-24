import VirtualizedTable from "../shared/VirtualizedTable/VirtualizedTable";
import React from "react";
import { connect } from "react-redux";

function FinishCorridor(props) {
    const { timingsList } = props;

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
        timingsList: state.finishCorridor.timingsList
    };
};

export default connect(mapStateToProps, null)(FinishCorridor);
