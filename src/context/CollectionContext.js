import { useState, createContext, useEffect } from 'react';

export const CollectionContext = createContext();
export const CollectionProvider = (props) => {

  const [collections, setCollections] = useState(JSON.parse(localStorage.getItem('collections')) || [])

  useEffect(() => {
    localStorage.setItem('collections', JSON.stringify(collections))
  }, [collections])


  const isDuplicate = (newName) => {
    for (let i = 0; i < collections.length; i++) {
      if (newName.toLowerCase() === collections[i].name.toLowerCase()) return true
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

  const deleteCollection = (name) => {
    const idx = collections.findIndex(collection => collection.name === name)
    if (idx > -1) {
      const temp = [...collections]
      temp.splice(idx, 1)
      setCollections(temp)
    }
    else {
      return 'Collection not found'
    }
    return null
  }

  const getCollectionByName = (name) => {
    for (let i = 0; i < collections.length; i++) {
      if (name.toLowerCase() === collections[i].name.toLowerCase()) return collections[i]
    }
    return null
  }

  const addAnimeToCollection = (anime, collection) => {
    const collectionIdx = collections.findIndex(coll => coll.name === collection)
    if (collectionIdx !== -1) {
      const animeIdx = collections[collectionIdx].animeList.findIndex(anim => anim.id === anime.id)
      if (animeIdx === -1) {
        const temp = [...collections]
        temp[collectionIdx].animeList.push(anime)
        setCollections(temp);
      }
    }
  }

  const isCollectionContained = (collection, animeId) => {
    const animeIdx = collection.animeList.findIndex(anim => anim.id === animeId)
    if (animeIdx === -1) {
      return false
    }
    else {
      return true
    }
  }

  return (
    <CollectionContext.Provider value={{
      collections,
      addNewCollection,
      deleteCollection,
      getCollectionByName,
      addAnimeToCollection,
      isCollectionContained
    }}>
      {props.children}
    </CollectionContext.Provider>
  )
}