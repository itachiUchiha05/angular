import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank.service';
import { FormBuilder, FormControl, FormGroup , Validator, Validators} from '@angular/forms';
import { Router , ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-bank',
  templateUrl: './add-bank.component.html',
  styleUrls: ['./add-bank.component.css']
})
export class AddBankComponent implements OnInit {
  angForm:FormGroup = new FormGroup({});
  constructor(private route:ActivatedRoute,private router : Router,private fb:FormBuilder,private bs:BankService) { }

  ngOnInit(): void {
    this.angForm = this.fb.group({
      'bname' : new FormControl(''),
      'head': new FormControl(''),
      'address': new FormControl(''),
    })
  }

  addbank(bname:string,head:string,address:string)
  {
    this.bs.addbank(bname,head,address).subscribe(data => {
      console.log(this.angForm.value);
      this.router.navigate(['display'])
    })
  }

}
