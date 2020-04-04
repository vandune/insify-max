import React from 'react'

type Action =
    { type: 'SET_ACTIVITY', payload: string }
  | { type: 'SET_COMPANY_SIZE', payload: number };

interface AppContext {
  state: AppState;
  dispatch: React.Dispatch<Action>;
}

interface AppState {
  size: number;
  activity: string;
}

const initialState: AppState = {
  size: 4,
  activity: 'beauty care',
}

const reducer = (state: AppState, action: Action): AppState => {
  const { type, payload } = action;

  switch (type) {
    case "SET_ACTIVITY": {
      return typeof payload === 'string' ? { ...state, activity: payload } : state;
    }
    case "SET_COMPANY_SIZE":
      return typeof payload === 'number' ? { ...state, size: payload } : state;

    default: return state;
  }
};

const CompanyContext = React.createContext({ state: initialState } as AppContext);
const CompanyProvider: React.FC = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <CompanyContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CompanyContext.Provider>
  );
}
export { CompanyContext, CompanyProvider };