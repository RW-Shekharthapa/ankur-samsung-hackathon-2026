import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  private auth = inject(AuthService);
  private router = inject(Router);

  user = this.auth.user;
  stats = [
    { label: 'Total Users', value: '1,248' },
    { label: 'Active Sessions', value: '86' },
    { label: 'Revenue', value: '$12,480' },
    { label: 'Open Tickets', value: '14' }
  ];

  logout(): void {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }
}
