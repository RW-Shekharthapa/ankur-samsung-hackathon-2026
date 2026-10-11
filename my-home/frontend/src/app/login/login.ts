import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  private auth = inject(AuthService);
  private router = inject(Router);

  email = '';
  password = '';
  error = signal('');

  submit(): void {
    if (!this.email || !this.password) {
      this.error.set('Please enter email and password.');
      return;
    }
    if (this.auth.login(this.email, this.password)) {
      this.router.navigateByUrl('/dashboard');
    } else {
      this.error.set('Invalid email or password.');
    }
  }
}
