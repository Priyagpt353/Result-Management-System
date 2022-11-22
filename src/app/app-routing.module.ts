import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './home/home.component';
import { AddResultComponent } from './teacher/add-result/add-result.component';
import { FindResultComponent } from './student/find-result/find-result.component';
import { ShowResultComponent } from './student/show-result/show-result.component';
import { EditResultComponent } from './teacher/edit-result/edit-result.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'login/:role',
    component: LoginComponent,
  },
  {
    path: 'teacher/edit-result/:id',
    component: EditResultComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'teacher/add-result',
    component: AddResultComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'teacher',
    component: TeacherComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'student/find-result',
    component: FindResultComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'student/show-result',
    component: ShowResultComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'student',
    component: StudentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
