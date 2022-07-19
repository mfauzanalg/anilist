import { useState, createContext, useEffect } from 'react';

export const CollectionContext = createContext();
export const CollectionProvider = (props) => {

  const [collections, setCollections] = useState(JSON.parse(localStorage.getItem('collections')) || [])

  useEffect(() => {
    localStorage.setItem('collections', JSON.stringify(collections))
  }, [collections])

  const addNewCollection = (name) => {
    const temp = [...collections]
    temp.push({ name: name })

    setCollections(temp);
  }

  return (
    <CollectionContext.Provider value={{ collections, addNewCollection }}>
      {props.children}
    </CollectionContext.Provider>
  )
}