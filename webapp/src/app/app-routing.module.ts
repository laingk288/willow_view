import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ForsaleComponent } from './components/forsale/forsale.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/profiles/admin/admin/admin.component';
import { UserComponent } from './components/profiles/user/user/user.component';
import { AuthguardService } from './services/authguard.service';
import { RegisterComponent } from './components/register/register.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'forsale', component: ForsaleComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profiles/admin', component: AdminComponent, canActivate:[AuthguardService]},
  {path: 'profiles/user', component: UserComponent},
  {path: 'register', component: RegisterComponent},
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
