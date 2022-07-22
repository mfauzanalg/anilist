import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import { CollectionProvider } from '../../../context/CollectionContext';
import AnimeCard from '..'
import renderer from "react-test-renderer";

const animeCardAttribute = {
  title: 'Anime title',
  coverImage: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1-CXtrrkMpJ8Zq.png',
  id: 1,
  isHideDelete: false
}

const animeCardAttributeHideDelete = {
  title: 'Anime title',
  coverImage: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1-CXtrrkMpJ8Zq.png',
  id: 1,
  isHideDelete: true
}

const renderComponent = (attribute) => {
  return render(
    <CollectionProvider>
      <MemoryRouter>
        <AnimeCard {...attribute} />
      </MemoryRouter>
    </CollectionProvider>
  )
}

it('AnimeCard rendered correctly', () => {
  renderComponent(animeCardAttribute);
})

it('AnimeCard has correct name', () => {
  renderComponent(animeCardAttribute);
  expect(screen.getByTestId('anime-card-title')).toHaveTextContent('Anime title');
})

it('AnimeCard with close button', () => {
  renderComponent(animeCardAttribute);
  expect(screen.getByRole('button', { color: 'gray' })).toBeInTheDocument();
  expect(screen.getByRole('button', { color: 'gray' })).toBeEnabled();
})

it('AnimeCard without close button', () => {
  renderComponent(animeCardAttributeHideDelete);
  expect(screen.queryByTestId('corner-button')).toBeNull();
})

it("AnimeCard matches snapshot", () => {
  const tree = renderer.create(
    <CollectionProvider>
      <MemoryRouter>
        <AnimeCard {...animeCardAttribute} />
      </MemoryRouter>
    </CollectionProvider>
  ).toJSON;
  expect(tree).toMatchSnapshot();
});
