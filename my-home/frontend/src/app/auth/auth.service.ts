import { Injectable, signal } from '@angular/core';

// Demo credentials until a backend auth API exists.
const DEMO_USER = { email: 'admin@example.com', password: 'password123', name: 'Admin' };
const KEY = 'my-home-user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  readonly user = signal<{ email: string; name: string } | null>(
    JSON.parse(localStorage.getItem(KEY) ?? 'null')
  );

  login(email: string, password: string): boolean {
    if (email.trim().toLowerCase() !== DEMO_USER.email || password !== DEMO_USER.password) {
      return false;
    }
    const user = { email: DEMO_USER.email, name: DEMO_USER.name };
    localStorage.setItem(KEY, JSON.stringify(user));
    this.user.set(user);
    return true;
  }

  logout(): void {
    localStorage.removeItem(KEY);
    this.user.set(null);
  }

  isLoggedIn(): boolean {
    return this.user() !== null;
  }
}
