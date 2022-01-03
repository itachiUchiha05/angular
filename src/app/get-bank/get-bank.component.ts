import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-get-bank',
  templateUrl: './get-bank.component.html',
  styleUrls: ['./get-bank.component.css']
})
export class GetBankComponent implements OnInit {
banks:any
  constructor(private bs:BankService) { }

  ngOnInit(): void {
    this.bs.getbank().subscribe(data=>{
      this.banks = data
    })
  }
  deletebank(id:any)
  {
    this.bs.deletebank(id).subscribe(res => {
      console.log('delete')
      this.ngOnInit();
    })
  }
}
