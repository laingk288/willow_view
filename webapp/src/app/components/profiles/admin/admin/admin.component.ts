import { Component } from '@angular/core';
import { Irotation } from 'src/app/interfaces/irotation';
import { Iuser } from 'src/app/interfaces/iuser';
import { RotationplannerService } from 'src/app/services/rotationplanner.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  cropDisplay!: Irotation[];
  user!:Iuser;


  constructor(private rotationplannerService: RotationplannerService, private userService: UserService){
    this.user = this.userService.getUserData();
    
    rotationplannerService.getRotationPlanner().subscribe({
      next: (results) => {
        this.cropDisplay = results;
      },
      error:(err) => {
        console.log(err);
        alert('An issue occurred');
      }
    });
  }


}
