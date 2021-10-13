import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../expense.service';
import { Expenses } from '../expenses';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {

  expenses: Expenses[]=[];

  constructor(private expenseService : ExpenseService) { }

  ngOnInit(): void {
    this.getExpenses();
  }

  private getExpenses(){
    this.expenseService.getEmployeesList().subscribe(data =>{
      this.expenses = data
    });
  }

  deleteExpense(id: number){
    this.expenseService.deleteExpense(id).subscribe( data => {
      console.log(data);
      this.getExpenses();
    })
  }

}
