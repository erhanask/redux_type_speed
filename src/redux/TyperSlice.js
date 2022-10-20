import {createSlice} from "@reduxjs/toolkit";


const TyperSlice = createSlice({
    name: "typerSlice",
    initialState: {
        words: ['Lorem', 'Ipsum', 'dizgi', 've', 'baskı', 'endüstrisinde', 'kullanılan', 'mağara', 'metinlerdir.', 'Lorem', 'Ipsum', 'adı', 'bilinmeyen', 'bir', 'matbaacının', 'bir', 'hurufat', 'numune', 'kitabı', 'oluşturmak', 'üzere', 'bir', 'yazı', 'galerisini', 'alarak', 'karıştırdığı', 'beri', 'endüstri', 'standardı', 'sahte', 'metinler', 'olarak', 'kullanılmıştır', 'Beşyüz', 'yıl', 'boyunca', 'varlığını', 'sürdürmekle', 'kalmamış', 'aynı', 'zamanda', 'pek', 'değişmeden', 'elektronik', 'dizgiye', 'de', 'sıçramıştır.', 'Lorem', 'Ipsum', 'pasajları', 'da', 'içeren', 'Letraset', 'yapraklarının', 'yayınlanması', 'ile', 've', 'yakın', 'zamanda', 'Aldus', 'PageMaker', 'gibi', 'Lorem', 'Ipsum', 'sürümleri', 'içeren', 'masaüstü', 'yayıncılık', 'yazılımları', 'ile', 'popüler', 'olmuştur.'],
        timeLeft: 60,
        correct: 10,
        wrong: 5,
    },
    reducers: {
    },
})


export default TyperSlice.reducer;