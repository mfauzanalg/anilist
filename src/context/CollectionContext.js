import { useState, createContext, useEffect } from 'react';

export const CollectionContext = createContext();
export const CollectionProvider = (props) => {

  const [collections, setCollections] = useState(JSON.parse(localStorage.getItem('collections')) || [])

  useEffect(() => {
    localStorage.setItem('collections', JSON.stringify(collections))
  }, [collections])


  const isDuplicate = (newName) => {
    for (let i = 0; i < collections.length; i++) {
      if (newName === collections[i].name) return true
    }
    return false
  }

  const validateName = (newName) => {
    const pattern = /^[a-zA-Z0-9_]*$/i;
    if (!newName) return 'Collection name cannot be empty'
    if (!newName.match(pattern)) return 'Special character is not allowed'
    if (isDuplicate(newName)) return 'Collection name must be unique'
    return null
  }

  const addNewCollection = (name) => {
    const err = validateName(name)
    if (!err) {
      const temp = [...collections]
      temp.push({
        name: name,
        animeList: [],
        cover: 'empty4.jpeg',
      })
      setCollections(temp);
      return null
    }
    else {
      return err
    }
  }

  return (
    <CollectionContext.Provider value={{ collections, addNewCollection }}>
      {props.children}
    </CollectionContext.Provider>
  )
}