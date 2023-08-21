import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Igallery } from 'src/app/interfaces/igallery';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent{
  @ViewChild('videoPlayer') videoplayer: ElementRef | undefined;

  photoGallery!: Igallery[];

  constructor(private galleryService: GalleryService, private item:ElementRef){
    let dom = item.nativeElement;
    // dom.style.backgroundColor = '#B1AE91';
    
    //Display all photos in Database
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


  myFunction(){}


  toggleVideo(){}

  //Lightbox thingz KL can work on this later 
 


}
