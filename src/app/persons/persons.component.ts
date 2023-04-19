import { Component, OnInit } from "@angular/core";
import { PersonService } from "./person.service";

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
})
export class PersonComponent implements OnInit{

  personList!: string[];

  constructor(private prsService: PersonService){}

  ngOnInit() {
    this.personList = this.prsService.persons;
  }



}
