import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: string;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: "TRANS0001", name: 'Raj Kumar', weight: 500, symbol: '05-Sep-2021'},
  {position: "TRANS0002", name: 'Ajay Kumar', weight: 1000, symbol: '04-Sep-2021'},
  {position: "TRANS0003", name: 'Vijay Kumar', weight: 1500, symbol: '03-Sep-2021'},
  {position: "TRANS0004", name: 'Aditya Kumar', weight: 500, symbol: '02-Sep-2021'},
  {position: "TRANS0005", name: 'Gautam Kumar', weight: 1500, symbol: '01-Sep-2021'},
];

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
