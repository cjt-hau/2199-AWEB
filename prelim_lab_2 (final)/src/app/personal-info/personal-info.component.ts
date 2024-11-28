import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})
export class PersonalInfoComponent {
  name: string = 'Chester Jonathan C. Tayag';
  job: string = 'Full-Stack Web Developer';
  contact_num: string = '0999-189-7773';
  email: string = 'tayagchesterjonathan@gmail.com';
  location: string = 'Pampanga, Philippines';
}
