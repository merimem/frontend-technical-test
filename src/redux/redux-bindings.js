import React, { useContext, useEffect, useReducer, useRef, useMemo } from 'react';

const ReduxStoreContext = React.createContext();

export const ReduxProvider = ({ store, children }) => (
  <ReduxStoreContext.Provider value={store}>
    {children}
  </ReduxStoreContext.Provider>
);

export const useReduxDispatch = () => {
  const store = useContext(ReduxStoreContext);
  return store.dispatch;
};

export const useReduxState = () => { 
  const forceUpdate = useForceUpdate();
  const store = useContext(ReduxStoreContext);
  const state = useRef(store.getState());
  const used = useRef({});
  const handler = useMemo(() => ({
    get: (target, name) => {
      used.current[name] = true;
      return target[name];
    },
  }), []);
  useEffect(() => {
    const callback = () => {
      const nextState = store.getState();
      const changed = Object.keys(used.current)
        .find(key => state.current[key] !== nextState[key]);
      if (changed) {
        state.current = nextState;
        forceUpdate();
      }
    };
    const unsubscribe = store.subscribe(callback);
    return unsubscribe;
  }, []);
  return new Proxy(state.current, handler);
};

const forcedReducer = state => !state;
const useForceUpdate = () => useReducer(forcedReducer, false)[1];