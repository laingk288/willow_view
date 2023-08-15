import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ForsaleComponent } from './components/forsale/forsale.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ProfilesComponent } from './components/profiles/profiles.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'forsale', component: ForsaleComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'profiles', component: ProfilesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
