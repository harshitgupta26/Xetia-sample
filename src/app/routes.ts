import {Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NewcourseComponent} from './newcourse/newcourse.component';
import {FormComponent} from './form/form.component';

export const myroute: Routes = [
  {path: '', component: DashboardComponent, children: [
      {path: 'form', component: FormComponent},
      {path: 'newcourse', component: NewcourseComponent},
      {path: '', redirectTo: '/form', pathMatch: 'full'}
    ]}
];
