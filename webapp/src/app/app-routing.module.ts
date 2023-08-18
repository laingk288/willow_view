import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ForsaleComponent } from './components/forsale/forsale.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AdminComponent } from './components/profiles/admin/admin/admin.component';
import { UserComponent } from './components/profiles/user/user/user.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'forsale', component: ForsaleComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'profiles/admin', component: AdminComponent},
  {path: 'profiles/user', component: UserComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
