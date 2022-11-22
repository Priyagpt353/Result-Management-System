import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/student';
import { TeacherService } from 'src/app/teacher.service';

@Component({
  selector: 'app-edit-result',
  templateUrl: './edit-result.component.html',
  styleUrls: ['./edit-result.component.css']
})
export class EditResultComponent implements OnInit {
  student: Student = new Student();
  id: any;

  constructor(private location: Location, private teacherService: TeacherService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => this.id = param.get('id'));
    this.teacherService.getResult(this.id).subscribe(data =>{
      Object.assign(this.student, data);
    })    
    console.log(this.student);
  }

  goBack(){
    this.location.back();
  }

  updateResultForm = new FormGroup({
    rollNo: new FormControl(this.student.rollNo),
    name: new FormControl(this.student.name),
    dob: new FormControl(this.student.dob),
    score: new FormControl(this.student.score)
  });

  onSubmit(){
    const {dob, name, score, rollNo} = this.updateResultForm.value;
    this.student.dob = dob || this.student.dob;
    this.student.rollNo = rollNo || this.student.rollNo;
    this.student.score = score || this.student.score;
    this.student.name = name || this.student.name;
    this.teacherService.updateResult(this.student);
    console.log(this.student);
    this.router.navigate(["/teacher"]);
  }

}
