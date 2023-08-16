import { Component, OnInit } from '@angular/core';
import { Igallery } from 'src/app/interfaces/igallery';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  photoGallery!: Igallery[];

  constructor(private galleryService: GalleryService){
    galleryService.getGallery().subscribe({
      next: (results) => {
        this.photoGallery = results;
      },
      error: (err) => {
        console.log(err);
        alert('An issue occurred');
      }
    });
  }

  //KL can work on this later 
  ngOnInit(): void {}
  //show image Preview
  // onPreviewImage(){}


}
