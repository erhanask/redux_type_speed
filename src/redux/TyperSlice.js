import {createSlice} from "@reduxjs/toolkit";


const TyperSlice = createSlice({
    name: "typerSlice",
    initialState: {
        words: ['Lorem', 'Ipsum', 'dizgi', 've', 'baskı', 'endüstrisinde', 'kullanılan', 'mağara', 'metinlerdir.', 'Lorem', 'Ipsum', 'adı', 'bilinmeyen', 'bir', 'matbaacının', 'bir', 'hurufat', 'numune', 'kitabı', 'oluşturmak', 'üzere', 'bir', 'yazı', 'galerisini', 'alarak', 'karıştırdığı', 'beri', 'endüstri', 'standardı', 'sahte', 'metinler', 'olarak', 'kullanılmıştır', 'Beşyüz', 'yıl', 'boyunca', 'varlığını', 'sürdürmekle', 'kalmamış', 'aynı', 'zamanda', 'pek', 'değişmeden', 'elektronik', 'dizgiye', 'de', 'sıçramıştır.', 'Lorem', 'Ipsum', 'pasajları', 'da', 'içeren', 'Letraset', 'yapraklarının', 'yayınlanması', 'ile', 've', 'yakın', 'zamanda', 'Aldus', 'PageMaker', 'gibi', 'Lorem', 'Ipsum', 'sürümleri', 'içeren', 'masaüstü', 'yayıncılık', 'yazılımları', 'ile', 'popüler', 'olmuştur.'],
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