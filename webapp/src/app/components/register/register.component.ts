import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  file = null;

  constructor(private formBuilder: FormBuilder, private userService: UserService){
    this.registerForm = formBuilder.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onChange(event: any) {
    this.file = event.target.files[0];
  }

  register(){
    let formData = new FormData();

    //Adds all the form fields into the formData object.
    for(let key in this.registerForm.value){
      formData.append(key, this.registerForm.value[key]);
    }
    
    this.userService.registerUser(formData).subscribe({
      next: (result) => {
        console.log(result);
        alert('User was created successfully');
      },
      error: (err) => {
        console.log(err);
        alert(err);
      }
    });
  }

}
