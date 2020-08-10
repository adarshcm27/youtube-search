import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { render, screen } from '@testing-library/react';

describe('App', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    it('title to be present', () => {
        render(<App />);  
        expect(screen.getByText('Youtube search app')).toBeInTheDocument();
    });
    
    it('text box to be present', () => {
        render(<App />);    
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('button to be present', () => {
        render(<App />);    
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

});