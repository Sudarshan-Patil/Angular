import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { BranchComponent } from './branch/branch.component';
import { SubjectComponent } from './subject/subject.component';
import { InvalidComponent } from './invalid/invalid.component';

const routes: Routes = [
  {path:'', component:MainComponent},
  {path:'branch', component:BranchComponent},
  {path:'subject', component:SubjectComponent},
  {path:'**', component:InvalidComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
