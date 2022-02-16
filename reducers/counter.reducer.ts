// Action Types
interface DECREMENT {
  type: DECREMENT
}

export enum ActionType {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
}

export interface IncrementAction {
  type: ActionType.INCREMENT
}

export interface DecrementAction {
  type: ActionType.DECREMENT
}

export type Action = IncrementAction | DecrementAction

// Action Creators
export const increment = (): IncrementAction => ({ type: ActionType.INCREMENT })
export const decrement = (): DecrementAction => ({ type: ActionType.DECREMENT })

const initialState = {
  number: 0,
}

export default function counter(state = initialState, Action: Action) {
  switch (Action.type) {
    case ActionType.INCREMENT:
      return {
        ...state,
        number: state.number + 1,
      }
    case ActionType.DECREMENT:
      return {
        ...state,
        number: state.number - 1,
      }
    default:
      return state
  }
}
