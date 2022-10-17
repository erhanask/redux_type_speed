export const InfoBar = () => {


    return (
        <div className={`InfoBarWrapper row mt-2`}>
            <div className={`timeLeft col-4`}>
                <div className={`border rounded bg-light text-center h5 p-1`}>
                    60 S
                </div>
            </div>
            <div className={`trueCount col-4`}>
                <div className={`border rounded bg-light text-center text-success h5 p-1`}>
                    15
                </div>
            </div>
            <div className={`falseCount col-4`}>
                <div className={`border rounded bg-light text-center text-danger h5 p-1`}>
                    25
                </div>
            </div>
        </div>
    )
}