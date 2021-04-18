// import jwtDecode from 'jwt-decode';
import { IUser } from '../types/user';

class AuthService {
    private _accessToken: string | null = null;

    public getToken(): string | null {
        let token: string | null =
            this._accessToken || localStorage.getItem('token');

        if (token) {
            return token;
        }
        return null;
    }
    public isAuthenticated(): boolean {
        return !!this.getToken();
    }
    private setToken(token: string): void {
        this._accessToken = token;
        localStorage.setItem('token', token);
    }

    public async loginUser(
        email: string,
        password: string
    ): Promise<IUser | Error> {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        this.setToken('token string');
        return {
            email: 'email@gmail.com',
        };
    }
    // TODO: implement sign up
    public async signUpUser(email: string, password: string): Promise<IUser> {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        this.setToken('token string');
        return {
            email: 'email@gmail.com',
        };
    }
    // TODO: implement getting user data
    public async getUserData(): Promise<IUser | Error> {
        await new Promise((resolve) => setTimeout(resolve, 2500));
        return {
            email: 'email@gmail.com',
        };
    }
    public logout(): void {
        localStorage.removeItem('token');
        this._accessToken = null;
    }
}

export const authService = new AuthService();
