export const countAction = () => ({
    type: "ADD_PRODUCT",
    // payload для счётчика не нужен, т.к. мы просто увиличиваем его на 1, а код
    // который это делает уже есть в редьюсере counterReducer.
})