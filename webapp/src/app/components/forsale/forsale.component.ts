import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Iadvertise } from 'src/app/interfaces/iadvertise';
import { AdvertisementsService } from 'src/app/services/advertisements.service';

@Component({
  selector: 'app-forsale',
  templateUrl: './forsale.component.html',
  styleUrls: ['./forsale.component.css']
})
//injecting advertisements.service.ts into component
export class ForsaleComponent {

  sale!: Iadvertise[];
  item!: Iadvertise;
  saleForm!: FormGroup;
  file!: null;
  isEdit: boolean = false;   //indicates whether we're in edit mode or not.  
  equipmentId: number = 0;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private advertisementsService: AdvertisementsService, private router: Router) {
    this.saleForm = formBuilder.group({
      equipment_name: ['', [Validators.required]],
      manufacturer: ['', [Validators.required]],
      model: ['', [Validators.required]],
      meter_reads: ['', [Validators.required]],
      price: ['', [Validators.required]],
      details: ['', [Validators.required]],
    });

    this.advertisementsService.getAdvertisements().subscribe({
      next: (result) => {
        this.sale = result;
      }
    })
  }
  //images
  onChange(event: any) {
    this.file = event.target.files[0];
  }
  //Method created for the Edit Button to set isEdit to true to indicate we're in Edit mode
  makeEditActive(editId: number) {
    this.isEdit = true;
    this.equipmentId = editId;
    // console.log(this.equipmentId);
    this.advertisementsService.getAdvertisement(this.equipmentId).subscribe({
      next: (result) => {
        //PrePopulates the form
        this.saleForm.patchValue(result);
        console.log(result);
      }
    })
  }
//When Add new Item button is clicked makeEditFalse() executed
  makeEditFalse() {
    this.isEdit = false;
  }
  //Method created to indicate Editing or Adding Item when Form is submitted
  choose(){
    if(this.isEdit) {this.edit();} else {this.add();}
  }
  //Method called in Choose () to add advertisement
  add() {
    let formData = new FormData();

    //Adds all the form fields into the formData object.
    for (let key in this.saleForm.value) {
      formData.append(key, this.saleForm.value[key]);
    }
    if (this.file !== null) {
      formData.append('image', this.file);
    }
    this.advertisementsService.createAdvertisement(formData).subscribe({
      next: (result) => {
        alert('Advertisement was created successfully');
        this.saleForm.reset();
      },
      error: (err) => {
        console.log(err);
        alert('Something went wrong');
      }
    });
  }
  //Method called in Choose()to edit advertisement
  edit() {
    this.advertisementsService.editAdvertisement(this.equipmentId, this.saleForm.value).subscribe({
      next: (result) => {
        alert('Advertisement was edited successfully');
        this.saleForm.reset();
      },
      error: (err) => {
        console.log(err);
        alert('Something went wrong');
      }
    })
  }
  //Method created for Delete Button. Once clicked, will delete by the equipment ID 
  delete(equipment_id: number) {
    this.advertisementsService.deleteAdvertisement(equipment_id).subscribe({
      next: (result) => {
        alert('Advertisment deleted successfully');
      },
      error: (err) => {
        console.log(err);
        alert('Something went wrong');
      }
    });
  }
}
