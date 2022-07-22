import { CollectionListContainer, ComponentContainer, Title, InputContainer, EmptyContainer, EmptyText } from './styled'
import CollectionCard from '../../components/CollectionCard'
import { CollectionContext } from '../../context/CollectionContext'
import { useContext, useState } from 'react'
import FloatingButton from '../../components/FloatingButton'
import ConfirmationModal from '../../components/Modal/ConfirmationModal'
import Input from '../../components/Input'
import toast from 'react-hot-toast';

const CollectionListPage = () => {
  const { collections, addNewCollection, editCollection } = useContext(CollectionContext)
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);
  const [collectionName, setCollectionName] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [oldName, setOldName] = useState('');

  const onNameChange = (e) => {
    setCollectionName(e.target.value)
  }

  const onClickCancel = () => {
    setIsOpenCreateModal(false)
    setIsEditing(false)
    setCollectionName('')
  }

  const onClickPrimary = () => {
    let err = null;
    if (!isEditing) {
      err = addNewCollection(collectionName)
    }
    else {
      err = editCollection(oldName, collectionName)
    }

    if (err) {
      toast.error(err)
    }
    else {
      if (isEditing) toast.success('Edit collection success')
      else toast.success('Create collection success')
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
              <CollectionCard
                details={collection}
                key={index}
                setOpen={setIsOpenCreateModal}
                setIsEditing={setIsEditing}
                setCollectionName={setCollectionName}
                setOldName={setOldName}
              />
            )
          })
        }
        {
          collections.length === 0 &&
          (
            <EmptyContainer>
              <EmptyText>
                Empty List of Collection
              </EmptyText>
            </EmptyContainer>
          )
        }
      </CollectionListContainer>
      <FloatingButton onClick={() => setIsOpenCreateModal(true)} />

      {/* Modals */}
      <ConfirmationModal
        title={isEditing ? 'Edit Collection' : 'Create New Collection'}
        text='Collection name must be unique and does not contain special char'
        open={isOpenCreateModal}
        setOpen={setIsOpenCreateModal}
        primaryButtonText={isEditing ? 'Edit' : 'Create'}
        onPrimaryClick={onClickPrimary}
        onSecondaryClick={onClickCancel}
      >
        <InputContainer>
          <Input placeholder={'Collection Name'} value={collectionName} onChange={onNameChange} />
        </InputContainer>
      </ConfirmationModal>
    </ComponentContainer>
  )
}

export default CollectionListPage