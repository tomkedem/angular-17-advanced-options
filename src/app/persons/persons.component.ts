import { Component, OnInit } from '@angular/core';
import { GenderPipe } from '../shared/Pipes/gender.pipe';
import { PersonsService } from './services/persons.service';

@Component({
  selector: 'app-persons',
  standalone: true,
  host: {ngSkipHydration: 'true'},
  imports: [GenderPipe],
  templateUrl: './persons.component.html',
  styleUrl: './persons.component.css'
})
export class PersonsComponent implements OnInit{
  
  constructor(private personsService: PersonsService) { }

  ngOnInit(): void {
    console.log('Hello World T');
    this.personsService.getData();
  }  

  persons = [
    {
      id: 1,
      name: 'Hardik Savani',
      gender: 0,
      website: 'itsolution.com'
    },
    {
      id: 2,
      name: 'Kajal Patel',
      gender: 1,
      website: 'nicetohave.com'
    },
    {
      id: 3,
      name: 'Harsukh Makawana',
      gender: 0,
      website: 'makawana.com'
    }
  ]
}
