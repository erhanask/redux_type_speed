import {useDispatch, useSelector} from "react-redux";
import {reduceTime, setStarted} from "../../redux/TyperSlice";

export const WordInput = () => {
    const dispatch = useDispatch();
    const timeLeft = useSelector(state => state.typer.timeLeft);
    const isStarted = useSelector(state => state.typer.isStarted);

    const startGame = () => {
        dispatch(setStarted(true));

        //will be end of this function to initializing
        setInterval(() => {
            dispatch(reduceTime());
        }, 1000);
    }

    const checkWord = (word) => {
        console.log(word);
    }
    return (
        <div className={`row mt-2 w-100 mx-0`}>
            <input type={`text`} placeholder={`Type To Start`} onChange={(e) => {
                if (!isStarted) {
                    startGame();
                } else {
                    if (e.target.value.slice(-1) === ' ') {
                        checkWord(e.target.value);
                        e.target.value = "";
                    }
                }
            }} className={`col-12 form-control`}/>
        </div>
    )
}