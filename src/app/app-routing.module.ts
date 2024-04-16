import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './residences/residences.component';
import { FormResidenceCompComponent } from './form-residence-comp/form-residence-comp.component';
import { ApartmentsComponent } from './apartments/apartments.component';

const routes: Routes = [
  {path: 'home', component:ResidencesComponent},
  {path:'addResidence', component:FormResidenceCompComponent},
  { path: 'apartments/:residenceId', component: ApartmentsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
