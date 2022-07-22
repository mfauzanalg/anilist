import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom'
import CollectionListPage from '..'
import { CollectionProvider } from '../../../context/CollectionContext'
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';

const component = (
  <CollectionProvider>
    <MemoryRouter>
      <CollectionListPage />
    </MemoryRouter>
  </CollectionProvider>
)

const renderComponent = () => {
  return render(component)
}

it('CollectionListPage render correctly', () => {
  renderComponent();
})

it('If collection is empty', () => {
  renderComponent();
  expect(screen.getByText('Empty List of Collection')).toBeInTheDocument();

  const tree = renderer.create(component).toJSON;
  expect(tree).toMatchSnapshot();
})


it('Integration test on ContainerPageList', () => {
  renderComponent();

  // Add item to list
  userEvent.click(screen.queryByTestId('floating-button'));

  // expect modal is appear
  expect(screen.queryByTestId('modal')).toHaveTextContent('Create New Collection');

  // click cancel
  userEvent.click(screen.getByText('Cancel'))

  // expect modal is dissappear
  expect(screen.queryByTestId('modal')).toBeNull();

  // Click add again
  userEvent.click(screen.queryByTestId('floating-button'));

  // fill with special character
  userEvent.type(screen.getByPlaceholderText('Collection Name'), 'special char!')

  // click create and should not create any collection
  userEvent.click(screen.getByText('Create'));
  expect(screen.getByText('Empty List of Collection')).toBeInTheDocument();

  // fill with valid name
  userEvent.clear(screen.getByPlaceholderText('Collection Name'))
  userEvent.type(screen.getByPlaceholderText('Collection Name'), 'AnimeCollection')

  // click create
  userEvent.click(screen.getByText('Create'));

  // collection should be created
  expect(screen.queryAllByTestId('collection-card')).toHaveLength(1);
  expect(screen.getByTestId('collection-card').getAttribute('value')).toBe('AnimeCollection')

  // modal should be closed after success
  expect(screen.queryByTestId('modal')).toBeNull();

  // create collection with same name
  userEvent.click(screen.queryByTestId('floating-button'));
  userEvent.type(screen.getByPlaceholderText('Collection Name'), 'AnimeCollection');
  userEvent.click(screen.getByText('Create'));

  // Collection should not be created
  expect(screen.queryAllByTestId('collection-card')).toHaveLength(1);
  userEvent.click(screen.getByText('Cancel'));

  // Edit the collection
  userEvent.click(screen.getByTestId('edit-button'));
  userEvent.clear(screen.getByPlaceholderText('Collection Name'))
  userEvent.type(screen.getByPlaceholderText('Collection Name'), 'AnimeCollectionNew')

  // Click edit
  userEvent.click(screen.getByText('Edit'));

  // The collection name should be changed
  expect(screen.queryAllByTestId('collection-card')).toHaveLength(1);
  expect(screen.getByTestId('collection-card').getAttribute('value')).toBe('AnimeCollectionNew')

  // Modal should be closed
  expect(screen.queryByTestId('modal')).toBeNull();

  // Delete collection
  userEvent.click(screen.getByTestId('delete-button'));
  userEvent.click(screen.getByText('Delete'));

  // Collection should be empty again
  expect(screen.queryAllByTestId('collection-card')).toHaveLength(0);
  expect(screen.getByText('Empty List of Collection')).toBeInTheDocument();

  // Modal should be closed
  expect(screen.queryByTestId('modal')).toBeNull();
})

