export const initialState={
    basket:[],
    user:null,
    name:null
}
export const reducer=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD':
            return{
                ...state,
                basket:[...state.basket,action.item]
            }
        case 'REMOVE':
            const index=state.basket.findIndex(item=>item.id===action.id)
            let newBasket=[...state.basket]
            if(index>=0){
                newBasket.splice(index,1)
            }
            return {
                ...state,
                basket:newBasket}
        case 'SET':
            return{
                ...state,
                user:action.user,
            }
        case 'NAME':
            return{
                ...state,
                name:action.name
            }
    }
    return state
}