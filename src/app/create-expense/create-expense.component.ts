import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpenseService } from '../expense.service';
import { Expenses } from '../expenses';

@Component({
  selector: 'app-create-expense',
  templateUrl: './create-expense.component.html',
  styleUrls: ['./create-expense.component.css']
})
export class CreateExpenseComponent implements OnInit {

  expenses : Expenses = new Expenses();
  constructor(private expenseService : ExpenseService,private router: Router) { }

  ngOnInit(): void {
  }
  saveExpense(expenses : Expenses){
    console.log(expenses)
    this.expenseService.createExpense(expenses).subscribe( data =>{
      console.log(data);
      this.goToExpenseList();
    },
    error => console.log(error));
  }

  goToExpenseList(){
    this.router.navigate(['/expenses']);
  }

  onSubmit(){
    console.log(this.expenses);
    this.saveExpense(this.expenses);
  }

}
