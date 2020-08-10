import React from 'react';
import MyHeader from '../components/my-header';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';

describe('MyHeader', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MyHeader />, div);
    });

    it('title to be present', () => {
      render(<MyHeader />);  
      expect(screen.getByText('Youtube search app')).toBeInTheDocument();
    });
});