import {createSlice} from '@reduxjs/toolkit';
import { addQuizId } from '../topics/TopicsSlice';


const quizzesSlice = createSlice({
    name:'quizzes',
    initialState:{quizzes:{}},
    reducers:{
        addQuiz:(state, action) => {
            const {id, topicId, name, cardIds} = action.payload;
            state.quizzes[id] = {
                id:id,
                name: name,
                topicId: topicId,
                cardIds: cardIds,
            }
        },
        
    }
});

export const thunkAction = (args) => {
    const {id, topicId, name, cardIds} = args;
    return (dispatch) => {

        dispatch(addQuiz({
            id:id,
            name: name,
            topicId: topicId,
            cardIds: cardIds,
        }));

        dispatch(addQuizId({
            quizId:id, 
            topicId:topicId,
        }));

    }
}

export const selectQuizzes = (state) => {return state.quizzes.quizzes};
export const {addQuiz}  = quizzesSlice.actions;

export default quizzesSlice.reducer;