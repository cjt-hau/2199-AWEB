import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-emplist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './emplist.component.html',
  styleUrl: './emplist.component.css'
})
export class EmplistComponent {
  employees = [
    { 'empNum' : 1, 'name' : 'Anne Banawa', 'gender' : 'Female', 'email' : 'annebanawa@gmail.com', 'empStatus' : true, 'salary' : '₱15,000'},
    { 'empNum' : 2, 'name' : 'Cris Pichi', 'gender' : 'Male', 'email' : 'crispichi@gmail.com', 'empStatus' : false, 'salary' : '₱12,500'},
    { 'empNum' : 3, 'name' : 'Don Nutella', 'gender' : 'Male', 'email' : 'donnutella@gmail.com', 'empStatus' : false, 'salary' : '₱20,000'},
    { 'empNum' : 4, 'name' : 'Sassy Siopao', 'gender' : 'Female', 'email' : 'sassysiopao@gmail.com', 'empStatus' : true, 'salary' : '₱17,500'},
    { 'empNum' : 5, 'name' : 'Cheddar Lagaya', 'gender' : 'Male', 'email' : 'cheddarlagaya@gmail.com', 'empStatus' : true, 'salary' : '₱10,000'}
  ];
}
