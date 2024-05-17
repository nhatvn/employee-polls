import { fireEvent, render } from "@testing-library/react";
import LoginPage from "../components/LoginPage";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "../reducers";
import middleware from "../middleware";
import { BrowserRouter as Router } from "react-router-dom";
import { handleInitialData } from "../actions/shared";

describe('LoginPage', () => {
    it('will match snapshot', async () => {
        const store = createStore(reducers, middleware);
        await store.dispatch(handleInitialData());
        var component = render(
            <Provider store={store}>
                <Router>
                    <LoginPage />
                </Router>
            </Provider>
        );
        expect(component).toMatchSnapshot();
    })

    it('will display Password incorrect.', async () => {
        const store = createStore(reducers, middleware);
        await store.dispatch(handleInitialData());
        var component = render(
            <Provider store={store}>
                <Router>
                    <LoginPage />
                </Router>
            </Provider>
        );
        var loginForm = component.getByTestId('loginForm');
        fireEvent.submit(loginForm);
        expect(component.getByTestId('wrongPassword').textContent).toEqual('Password incorrect.');
    })

    it('will display login form', async () => {
        const store = createStore(reducers, middleware);
        await store.dispatch(handleInitialData());
        var component = render(
            <Provider store={store}>
                <Router>
                    <LoginPage />
                </Router>
            </Provider>
        );
        var loginForm = component.getByTestId('loginForm');
        expect(loginForm).toBeInTheDocument();
    })
})