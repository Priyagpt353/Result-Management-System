import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-result',
  templateUrl: './find-result.component.html',
  styleUrls: ['./find-result.component.css']
})
export class FindResultComponent implements OnInit {
  rollNo:string = "";
  name:string = "";
  errorMessage:string = "";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  SearchParams = new FormGroup({
    rollNo: new FormControl('',[Validators.required]),
    name: new FormControl('', [Validators.required]),
  })

  get fields(){
    return this.SearchParams.controls;
  }

  onSubmit(){
    let {rollNo, name} = this.SearchParams.value;
    if(this.SearchParams.invalid){
      this.errorMessage = "Please enter the required values";
      return false;
    }
    this.router.navigate(['/student/show-result'], {queryParams: {rollNo,name}});
    return true;
  }

}
