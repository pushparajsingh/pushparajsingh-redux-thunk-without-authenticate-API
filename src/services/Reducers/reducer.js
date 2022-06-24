import { ADD_TO_CART,REMOVE_TO_CART } from '../constants'
const initialState = {
    cardData: 0,
    ReducerData:[]
}
export default function cardItems(state=initialState,action)

{
    console.log(899,action.payload)
    switch(action.type)
    {
        case ADD_TO_CART:
            console.warn('reducer',action);
            return {
                ...state,
            cardData:state.cardData + 1 
            }

            case REMOVE_TO_CART:
                console.warn('reducer',action);
                return {
                    ...state,
                cardData:state.cardData - 1 
                }
            case "GET_POST":
                return{
                    ...state,
                    ReducerData : action.payload
                }
         
        default:
            {   
            return {

                ...state,
          
            }
            }
    }

}