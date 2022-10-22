import {createSlice} from "@reduxjs/toolkit";
import {wordData} from "../data/wordData";


const TyperSlice = createSlice({
    name: "typerSlice",
    initialState: {
        words: wordData.sort(() => 0.5 - Math.random()).slice(0, 250),
        timeLeft: 60,
        correct: 0,
        wrong: 0,
        isStarted: false
    },
    reducers: {
        reduceTime: (state, action) => {
            if (state.timeLeft !== 0)
                state.timeLeft--;
            else
                state.isStarted = false;
        },
        setStarted: (state, action) => {
            state.isStarted = action.payload;
        },
        answerCheck: (state, action) => {
            let words = state.words;
            let entered = action.payload.replace(' ', '');
            for (let i = 0;i <= words.length; i++) {
                if (words[i] === entered) {
                    state.correct = state.correct + 1;
                } else {
                    state.wrong = state.wrong + 1;
                }
                words.shift();
                state.words = words;
                break;
            }
        }
    },
})

export const {reduceTime, setStarted, answerCheck} = TyperSlice.actions;
export default TyperSlice.reducer;