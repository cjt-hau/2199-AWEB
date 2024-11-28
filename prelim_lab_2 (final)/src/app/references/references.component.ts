import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [],
  templateUrl: './references.component.html',
  styleUrl: './references.component.css'
})
export class ReferencesComponent {
  references: string[] = ['Dr. Joseph A. Esquivel', 'Asst. Prof. Jeanky S. Mendez', 'Mr. Chris Almocera'];
  emails: string[] = ['jesquivel@hau.edu.ph', 'jmendez@hau.edu.ph', 'calmocera@hau.edu.ph'];
  contact_nums: string[] = ['Local 1261', 'Local 1387', 'Local 1270'];
}
