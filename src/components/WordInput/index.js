export const WordInput = () => {

    return (
        <div className={`row mt-2 w-100 mx-0`}>
            <input type={`text`} placeholder={`Click To Start`} onClick={(e) => {
                console.log('TEST')
            }} className={`col-12 form-control`}/>
        </div>
    )
}