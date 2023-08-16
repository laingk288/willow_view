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
  editEquipmentId: number = 0;//store information about the edit equipment id. When we're in edit  mode we will set the editEquipId to some other value created other than zero.
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
  //Method created for Add New Item Method to indicate we're not in Edit mode
  makeEditFalse() {
    this.isEdit = false;
  }

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
  //Method in form where ngSubmit="edit()"" is called on the submit event
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
