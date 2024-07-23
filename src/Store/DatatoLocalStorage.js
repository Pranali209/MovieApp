function getFromLocalStorage(key) {
    try {
      const serializedState = localStorage.getItem(key);
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (error) {
      console.error('Error getting data from local storage:', error);
      return undefined;
    }
  }
  
  function setToLocalStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving data to local storage:', error);
    }
  }