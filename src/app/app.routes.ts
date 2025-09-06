import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Aboutus } from './components/aboutus/aboutus';
import { Careers } from './components/careers/careers';
import { Contactus } from './components/contactus/contactus';
import { Notfound } from './components/notfound/notfound';
import { Users } from './components/users/users';
import { Userdetails } from './components/userdetails/userdetails';
import { ProductList } from './components/product-list/product-list';
import { Productdetails } from './components/productdetails/productdetails';
import { PermanentJobs } from './components/permanent-jobs/permanent-jobs';
import { ContractJobs } from './components/contract-jobs/contract-jobs';
import { UploadVideo } from './components/upload-video/upload-video';
import { trainerGuard } from './guards/trainer-guard';
import { canExitGuard } from './guards/can-exit-guard';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: '', component: Home },
  { path: 'aboutus', component: Aboutus },
  {
    path: 'careers',
    component: Careers,
    children: [
      { path: '', component: PermanentJobs },
      { path: 'permanent', component: PermanentJobs },
      { path: 'contract', component: ContractJobs },
    ]
  },
  {
    path: 'contactus',
    component: Contactus,
    canDeactivate: [canExitGuard]
  },
  { path: 'users', component: Users },
  { path: 'userdetails/:id', component: Userdetails },
  { path: 'products', component: ProductList },
  { path: 'productdetails', component: Productdetails },
  {
    path: 'uploadvideo',
    component: UploadVideo,
    canActivate: [trainerGuard]
  },
  { path: '**', component: Notfound }
];
