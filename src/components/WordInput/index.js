import {useDispatch, useSelector} from "react-redux";
import {answerCheck, reduceTime, setStarted} from "../../redux/TyperSlice";

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
        dispatch(answerCheck(word));
    }
    return (
        <div className={`row mt-2 w-100 mx-0`}>
            <span onClick={() => window.location.reload() } className={`p-0 text-center border rounded bg-light ${timeLeft === 0 ? '':'d-none'}`}>
                Game Over, Click To Restart
            </span>
            <input type={`text`} placeholder={`Type To Start`} onChange={(e) => {
                if (!isStarted) {
                    startGame();
                } else {
                    if (e.target.value.slice(-1) === ' ') {
                        checkWord(e.target.value);
                        e.target.value = "";
                    }
                }
            }} className={`col-12 form-control ${timeLeft === 0 ? 'd-none':''}`}/>
        </div>
    )
}