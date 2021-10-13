import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateExpenseComponent } from './create-expense/create-expense.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';

const routes: Routes = [
  { path:'expenses', component:ExpenseListComponent },
  { path:'create-expense', component:CreateExpenseComponent},
  { path:'', redirectTo:'expenses', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
