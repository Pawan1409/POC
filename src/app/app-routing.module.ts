import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDisplayComponent } from './user-display/user-display.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  {path:'', component: UserDisplayComponent},
  {path:'addUser', component: UserFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
