import React, { useContext } from "react";
import "./FocusList.css";
import BoxList from "../BoxList/BoxList";
import { useState } from "react";
import { useEffect } from "react";
import tasksService from "../../../services/tasks";
import MainContext from "../../../context/MainContext";

export default function FocusList() {

    const context = useContext(MainContext);
    console.log("🚀 ~ file: FocusList.jsx ~ line 12 ~ FocusList ~ context", context)
    const { dispatch, state } = context;

    // const [data, setData] = useState("fetching");
    const data = state?.lists || "loading";
    //   setData(res);

    async function getData() {
        const task = new tasksService();
        const res = await task.getData();

        dispatch({
            type: "initialLoad",
            payload: res
        });
        data = res;
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="focusList">
            {data != "fetching" ? (
                <div className="listContainer">
                    {data?.length > 0 ? data.map((x) =>
                        <BoxList title={x.title} details={x.details} type={x.types} level={x.level} />
                    ) : <BoxList title="Seems quite empty here" />}
                </div>
            ) : (
                <div className="lds-roller">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            )}
        </div>
    );
}
