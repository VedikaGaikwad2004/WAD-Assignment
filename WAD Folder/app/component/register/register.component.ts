import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router'; // ✅ Import Router
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = { email: '', password: '' };

  constructor(private router: Router) {}  // ✅ No more error

  register() {
    if (this.user.email && this.user.password) {
      localStorage.setItem('user', JSON.stringify(this.user));
      alert('Registration Successful');
      this.router.navigate(['/login']);
    } else {
      alert('Please fill all fields');
    }
  }
}
