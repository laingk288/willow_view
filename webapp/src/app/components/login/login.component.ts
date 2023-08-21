import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router:Router){

    this.loginForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  login(){
    let formData = this.loginForm.value;

    this.userService.loginUser(formData).subscribe({
      next: (result) => {
        //Store the user data on our browser
        localStorage.setItem("currentUser", JSON.stringify(result)); 
        this.router.navigate(['profiles/admin']);
        alert('Login was successful');
      },
      error: (err) => {
        alert(err.error);
        console.log(err);
      }
    })
  }
  

}
