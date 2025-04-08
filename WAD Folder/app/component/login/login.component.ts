import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';  // ✅ Import Router
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = { email: '', password: '' };

  constructor(private router: Router) {}  // ✅ No more error

  login() {
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');

    if (storedUser.email === this.user.email && storedUser.password === this.user.password) {
      localStorage.setItem('isLoggedIn', 'true');  
      alert('Login Successful');
      this.router.navigate(['/home']);  
    } else {
      alert('Invalid credentials');
    }
  }
}

