import VirtualizedTable from "../shared/VirtualizedTable/VirtualizedTable";
import React from "react";

export default function FinishCorridor() {
    const list = [];

    return (
        <VirtualizedTable
            options={{
                list: [...list],
                rowHeight: 20,
                headerHeight: 20
            }}
        />
        )
}
