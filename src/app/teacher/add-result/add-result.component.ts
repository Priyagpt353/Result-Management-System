import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/student';
import { TeacherService } from 'src/app/teacher.service';

@Component({
  selector: 'app-add-result',
  templateUrl: './add-result.component.html',
  styleUrls: ['./add-result.component.css']
})
export class AddResultComponent implements OnInit {
  student: Student = new Student();
  errorMessage:string = "";

  constructor(private location: Location, private teacherService: TeacherService, private router: Router) { }

  ngOnInit(): void {
  }

  

  goBack(){
    this.location.back();
  }

  addResultForm = new FormGroup({
    rollNo: new FormControl('',[Validators.required]),
    name: new FormControl('',[Validators.required]),
    dob: new FormControl('', [Validators.required]),
    score: new FormControl('', [Validators.required])
  });

  get fields(){
    return this.addResultForm.controls;
  }

  onSubmit(){
    const {dob, name, score, rollNo} = this.addResultForm.value;
    if(this.addResultForm.invalid){
      this.errorMessage = "Please enter the required values";
      return false;
    }
    this.student.dob = dob || "";
    this.student.rollNo = rollNo || "";
    this.student.score = score || "";
    this.student.name = name || "";

    this.teacherService.addResult(this.student);
    console.log(this.student);
    this.router.navigate(["/teacher"]);
    return true;
  }

}
