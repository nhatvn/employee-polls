import { fireEvent } from "@testing-library/react";
import LoginPage from "../components/LoginPage";
import { getTestUsers, renderWithProviders } from "./setup-test";

describe('LoginPage', () => {
    it('will match snapshot', () => {
        var component = renderWithProviders(<LoginPage />, {
            preloadedState: {
                users: getTestUsers()
            }
        });
        expect(component).toMatchSnapshot();
    })

    it('will display Password incorrect.', () => {
        var component = renderWithProviders(<LoginPage />, {
            preloadedState: {
                users: getTestUsers()
            }
        });
        var loginForm = component.getByTestId('loginForm');
        fireEvent.submit(loginForm);
        expect(component.getByTestId('wrongPassword').textContent).toEqual('Password incorrect.');
    })

    it('will display login form', async () => {
        var component = renderWithProviders(<LoginPage />, {
            preloadedState: {
                users: getTestUsers()
            }
        });
        var loginForm = component.getByTestId('loginForm');
        expect(loginForm).toBeInTheDocument();
    })
})