import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/student';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-show-result',
  templateUrl: './show-result.component.html',
  styleUrls: ['./show-result.component.css'],
})
export class ShowResultComponent implements OnInit {
  student: Student[] = [];
  rollNo: string = '';
  name: string = '';
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((param) => {
      this.rollNo = param.get('rollNo') || '';
      this.name = param.get('name') || '';
    });

    this.studentService.search(this.rollNo, this.name).subscribe((data) => {
      Object.assign(this.student, data);
    });
  }

  goBack() {
    this.location.back();
  }
}
