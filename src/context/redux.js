const ReduxStoreContext = React.createContext();

const ReduxProvider = ({ store, children }) => (
  <ReduxStoreContext.Provider value={store}>
    {children}
  </ReduxStoreContext.Provider>
);