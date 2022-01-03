import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank.service';
import { FormBuilder, FormControl, FormGroup , Validator, Validators} from '@angular/forms';
import { Router , ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-bank',
  templateUrl: './edit-bank.component.html',
  styleUrls: ['./edit-bank.component.css']
})
export class EditBankComponent implements OnInit {
  angForm:FormGroup = new FormGroup({});
  bank:any
  constructor(private route:ActivatedRoute,private router : Router,private fb:FormBuilder,private bs:BankService) {
    this.angForm = this.fb.group({
      'bname' : new FormControl('')
   })
  }

  ngOnInit(): void {
   this.route.params.subscribe(params=> {
     this.bs.editbank(params['id']).subscribe(res => {
       this.bank =res
     })
   })

     
  }

  editbank(id:string,bname:string)
  {
    this.bs.editbank(bname)
    this.router.navigate(['display'])

    
  }
  
}
