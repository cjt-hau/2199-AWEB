import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  schools: string[] = ['Dee Hwa Liong College Foundation', 'Hillcrest Heights Institute', 'Holy Angel University'];
  levels: string[] = ['Kindergarten to Grade 8', 'Grade 9 to Grade 11', 'Grade 12', 'College: BSIT - Web Development'];
  years: string[] = ['2008-2018', '2018-2021', '2021-2022', '2022-2026'];
}
