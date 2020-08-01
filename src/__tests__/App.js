import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import {render, fireEvent, screen} from '@testing-library/react';
import axios from 'axios';
import ItemThumbnail from '../components/item-thumbnail';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


test('Fetch makes an API call and displays the greeting', async () => {
  
  const fakeAxios = {
    get: jest.fn(() => Promise.resolve({data: {greeting: 'hello there'}})),
  }

  const url = 'https://www.googleapis.com/youtube/v3/search'
  render(<App axios={fakeAxios} />)
  fireEvent.click(screen.getByTestId('videoTitle'))

  const greetingNode = await screen.findByTestId('videoTitle')

  expect(axios.get).toHaveBeenCalledTimes(1)
  expect(axios.get).toHaveBeenCalledWith(url)
  expect(greetingNode).toHaveTextContent('cars')
})