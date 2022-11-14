import { taskDeleted, taskUpdated } from "./actionTypes";

export function taskReducer(state = [], action) {
    switch (action.type) {
        case taskUpdated: {
            const newArray = [...state];
            const elementIndex = newArray.findIndex(
                (el) => el.id === action.payload.id
            );
            newArray[elementIndex] = {
                ...newArray[elementIndex],
                ...action.payload,
            };
            return newArray;
        }
        case taskDeleted: {
            let newArray = [...state];
            //console.log("newArray1", newArray);
            const sortedArray = newArray.find(
                (el) => el.id !== action.payload.id
            );
            //console.log("sortedArray", sortedArray);
            newArray = [sortedArray];
            //console.log("newArray2", newArray);

            return newArray;
        }

        default:
            return state;
    }
}
