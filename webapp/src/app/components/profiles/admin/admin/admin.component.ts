import { Component } from '@angular/core';
import { Irotation } from 'src/app/interfaces/irotation';
import { RotationplannerService } from 'src/app/services/rotationplanner.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  cropDisplay!: Irotation[];

  constructor(private rotationplannerService: RotationplannerService){
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
