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

  const getCollectionCover = (collection) => {
    if (collection.animeList[0]) {
      return collection.animeList[0].coverImage.extraLarge
    }
    return `${process.env.PUBLIC_URL}/empty4.jpeg`
  }

  const validateName = (newName) => {
    const pattern = /^[a-zA-Z0-9_]*$/i;
    if (!newName) return 'Collection name cannot be empty'
    if (!newName.match(pattern)) return 'Special character is not allowed'
    if (isDuplicate(newName)) return 'Collection name must be unique'
    return null
  }

  const addNewCollection = (name, animes = []) => {
    const err = validateName(name)
    if (!err) {
      const temp = [...collections]
      temp.push({
        name: name,
        animeList: [...animes],
      })
      setCollections(temp);
      return null
    }
    else {
      return err
    }
  }

  const editCollection = (oldName, newName) => {
    let err = validateName(newName);
    if (oldName === newName) {
      err = 'Change the name before edit'
    }

    if (!err) {
      const idx = collections.findIndex(collection => collection.name === oldName)
      const temp = [...collections]
      temp[idx].name = newName
      setCollections(temp)
      return null;
    }
    else {
      return err;
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

  const addAnimeToCollection = (anime, collectionName) => {
    const collectionIdx = collections.findIndex(coll => coll.name === collectionName)
    if (collectionIdx !== -1) {
      const animeIdx = collections[collectionIdx].animeList.findIndex(anim => anim.id === anime.id)
      if (animeIdx === -1) {
        const temp = [...collections]
        temp[collectionIdx].animeList.push(anime)
        setCollections(temp);
      }
    }
    else {
      return 'Collection not found'
    }
  }

  const removeAnimeFromCollection = (animeId, collectionName) => {
    const collectionIdx = collections.findIndex(coll => coll.name === collectionName)
    if (collectionIdx !== -1) {
      const animeIdx = collections[collectionIdx].animeList.findIndex(anim => anim.id === animeId)
      if (animeIdx !== -1) {
        const temp = [...collections]
        temp[collectionIdx].animeList.splice(animeIdx, 1)
        setCollections(temp);
      }
      else {
        return 'Anime is not cointained in this collection'
      }
    }
    else {
      return 'Collection not found'
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

  const animeHasCollection = (animeId) => {
    const result = [];
    collections.forEach(coll => {
      if (isCollectionContained(coll, animeId)) {
        result.push(coll)
      }
    })
    return result
  }

  return (
    <CollectionContext.Provider value={{
      collections,
      addNewCollection,
      deleteCollection,
      getCollectionByName,
      addAnimeToCollection,
      isCollectionContained,
      animeHasCollection,
      getCollectionCover,
      removeAnimeFromCollection,
      editCollection,
    }}>
      {props.children}
    </CollectionContext.Provider>
  )
}