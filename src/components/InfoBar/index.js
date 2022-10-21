import {useSelector} from "react-redux";

export const InfoBar = () => {
    const timeLeft = useSelector(state => state.typer.timeLeft);
    
    return (
        <div className={`InfoBarWrapper row mt-2`}>
            <div className={`timeLeft col-4 pr-0`}>
                <div className={`border rounded bg-light text-center h5 p-1 m-0`}>
                    {timeLeft}
                </div>
            </div>
            <div className={`trueCount col-4`}>
                <div className={`border rounded bg-light text-center text-success h5 p-1 m-0`}>
                    15
                </div>
            </div>
            <div className={`falseCount col-4 pl-0`}>
                <div className={`border rounded bg-light text-center text-danger h5 p-1 m-0`}>
                    25
                </div>
            </div>
        </div>
    )
}