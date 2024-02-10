const defaultState = {
    basket: []
}

export const basketReducer = (state = defaultState, action) => {
    switch(action.type){
        case "ADD_TO_BASKET":
            console.log("Adding to basket:", action.payload)
        return {
            ...state,
            basket: [...state.basket, action.payload]
            
        }
        default: return state
    }
}

export default basketReducer