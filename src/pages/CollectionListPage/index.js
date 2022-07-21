import { ButtonContainer, CollectionListContainer, ComponentContainer, Title, InputContainer } from './styled'
import CollectionCard from '../../components/CollectionCard'
import { CollectionContext } from '../../context/CollectionContext'
import { useContext, useState } from 'react'
import FloatingButton from '../../components/FloatingButton'
import Modal from '../../components/Modal'
import Button from '../../components/Button'
import Input from '../../components/Input'

const CollectionListPage = () => {
  const { collections, addNewCollection } = useContext(CollectionContext)
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);
  const [collectionName, setCollectionName] = useState('');

  const onNameChange = (e) => {
    setCollectionName(e.target.value)
  }

  const handleNewCollection = (name) => {
    const err = addNewCollection(name)
    if (err) {
      alert(err)
    }
    else {
      setIsOpenCreateModal(false);
      setCollectionName('');
    }
  }

  return (
    <ComponentContainer>
      <Title>
        Collection List
      </Title>
      <CollectionListContainer>
        {
          collections && collections.map((collection, index) => {
            return (
              <CollectionCard details={collection} key={index} />
            )
          })
        }
      </CollectionListContainer>
      <FloatingButton onClick={() => setIsOpenCreateModal(true)} />

      {/* Modals */}
      <Modal
        title='Create New Collection'
        text='Collection name must be unique and does not contain special char'
        open={isOpenCreateModal}
        setOpen={setIsOpenCreateModal}
      >
        <InputContainer>
          <Input placeholder={'Collection Name'} value={collectionName} onChange={onNameChange} />
        </InputContainer>
        <ButtonContainer>
          <Button type={'secondary'} size={48} onClick={() => setIsOpenCreateModal(false)}>
            Cancel
          </Button>
          <Button type={'primary'} size={48} onClick={() => handleNewCollection(collectionName)}>
            Create
          </Button>
        </ButtonContainer>
      </Modal>

    </ComponentContainer>
  )
}

export default CollectionListPage