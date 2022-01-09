const useReduxState = () => { 
    const forceUpdate = useForceUpdate();
    const store = useContext(ReduxStoreContext);
    const state = useRef(store.getState());
    useEffect(() => {
      const callback = () => {
        state.current = store.getState();
        forceUpdate();
      };
      const unsubscribe = store.subscribe(callback);
      return unsubscribe;
    }, []);
    return state.current;
  };