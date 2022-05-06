import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

const server = setupServer(
    rest.post('https://ezwbsacoojmonmiqffad.supabase.co/auth/v1/token', (req, res, ctx) => res(ctx.json({
        "access_token": "MOCKED_ACCESS_TOKEN",
        "token_type": "bearer",
        "expires_in": 3600,
        "refresh_token": "MOCKED_REFRESH_TOKEN",
        "user": {
            "id": "89a069bd-4da4-40df-822f-58d5121ac6fb",
            "aud": "authenticated",
            "role": "authenticated",
            "email": "testclare@test.com",
            "email_confirmed_at": "2022-05-05T00:02:07.212352Z",
            "phone": "",
            "confirmed_at": "2022-05-05T00:02:07.212352Z",
            "last_sign_in_at": "2022-05-06T21:57:18.623031181Z",
            "app_metadata": {
                "provider": "email",
                "providers": [
                    "email"
                ]
            },
            "user_metadata": {},
            "identities": [
                {
                    "id": "123456",
                    "user_id": "123456",
                    "identity_data": {
                        "sub": "123456"
                    },
                    "provider": "email",
                    "last_sign_in_at": "2022-05-05T00:02:07.210656Z",
                    "created_at": "2022-05-05T00:02:07.210698Z",
                    "updated_at": "2022-05-05T00:02:07.210701Z"
                }
            ],
            "created_at": "2022-05-05T00:02:07.208426Z",
            "updated_at": "2022-05-06T21:57:18.624522Z"
        },
    }))
    ),
    rest.get('https://ezwbsacoojmonmiqffad.supabase.co/rest/v1/entries', (req, res, ctx) => res(ct.json([
        {
            "id": 191,
            "guest_id": "123456",
            "content": "hiiiiiii",
            "created_at": "2022-05-06T19:55:26.555527+00:00"
        },
        {
            "id": 190,
            "guest_id": "123456",
            "content": "hellllllllo",
            "created_at": "2022-05-06T19:54:39.582762+00:00"
        },
        {
            "id": 189,
            "guest_id": "123456",
            "content": "super new entry\n",
            "created_at": "2022-05-06T19:53:07.414439+00:00"
        },
        {
            "id": 187,
            "guest_id": "123456",
            "content": "new entry",
            "created_at": "2022-05-06T19:44:01.602373+00:00"
        },
        {
            "id": 176,
            "guest_id": "123456",
            "content": "hi",
            "created_at": "2022-05-06T19:18:02.924612+00:00"
        },
    ])))
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('App', () => {
    it('renders a list of entry, including when a new entry is added', async () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );
        
        
        const dashboardLink = screen.getByRole('link', { name: /view dashboard/i });
        userEvent.click(dashboardLink);
        
        const emailInput = screen.getByRole('textbox');
        userEvent.type(emailInput, 'testclare@test.com');
        
        const passwordInput = screen.getByPlaceholderText(/password/i);
        userEvent.type(passwordInput, 'supersecretpassword');
        
        const signUpButton = screen.getByRole('button', { name: /sign up/i });
        userEvent.click(signUpButton);
        
        userEvent.click(dashboardLink);
        
        const dashboardHeading = await screen.findByText('logged in as testclare@test.com');

        const entry = await screen.findByText('hi');
    });
});