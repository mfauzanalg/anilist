import { ButtonContainer, CollectionListContainer, ComponentContainer, Title } from './styled'
import CollectionCard from '../../components/CollectionCard'
import { CollectionContext } from '../../context/CollectionContext'
import { useContext, useState } from 'react'
import FloatingButton from '../../components/FloatingButton'
import Modal from '../../components/Modal'
import Button from '../../components/Button'

const CollectionListPage = () => {
  const { collections, addNewCollection } = useContext(CollectionContext)
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);

  return (
    <ComponentContainer>
      <Title>
        Collection List
      </Title>
      <CollectionListContainer>
        {
          collections && collections.map((col, index) => {
            return (
              <CollectionCard title={col.name} key={index} />
            )
          })
        }
      </CollectionListContainer>
      <FloatingButton onClick={() => setIsOpenCreateModal(true)} />

      {/* Modals */}
      <Modal title='Create New Collection' open={isOpenCreateModal} setOpen={setIsOpenCreateModal}>
        <ButtonContainer>
          <Button type={'secondary'} onClick={() => console.log('a')}>
            Cancel
          </Button>
          <Button type={'primary'} onClick={() => console.log('b')}>
            Create
          </Button>
        </ButtonContainer>
      </Modal>

    </ComponentContainer>
  )
}

export default CollectionListPage