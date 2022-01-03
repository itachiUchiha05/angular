import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBankComponent } from './add-bank/add-bank.component';
import { GetBankComponent } from './get-bank/get-bank.component';

const routes: Routes = [
  {
  path : 'create',
    component: AddBankComponent
  },
  {
      path : "edit/:id "
  },
    
  {
    path: 'display',
    component: GetBankComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
