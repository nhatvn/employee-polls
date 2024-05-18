import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createStore } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import reducer from "../reducers"

export function renderWithProviders(
    ui,
    {
        preloadedState = {},
        store = createStore(
            reducer, preloadedState
        ),
        ...renderOptions
    } = {}
) {
    function Wrapper({ children }) {
        return <Provider store={store}>
            <Router>
                {children}
            </Router>
        </Provider>
    }
    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}

export function getTestUsers() {
    let users = {
        sarahedo: {
            id: 'sarahedo',
            password: 'password123',
            name: 'Sarah Edo',
            avatarURL: 'woman-user-color-icon.png',
            answers: {
                "8xf0y6ziyjabvozdd253nd": 'optionOne',
                "6ni6ok3ym7mf1p33lnez": 'optionOne',
                "am8ehyc8byjqgar0jgpub9": 'optionTwo',
                "loxhs1bqm25b708cmbf3g": 'optionTwo'
            },
            questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
        },
        tylermcginnis: {
            id: 'tylermcginnis',
            password: 'abc321',
            name: 'Tyler McGinnis',
            avatarURL: 'man-user-color-icon.png',
            answers: {
                "vthrdm985a262al8qx3do": 'optionOne',
                "xj352vofupe1dqz9emx13r": 'optionTwo',
            },
            questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
        }
    };

    return users;
}