import { Component, Input } from "@angular/core";
import { PersonService } from "./person.service";

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
})
export class PersonComponent {

  personList!: string[];

  constructor(prsService: PersonService){ // IOC
    this.personList = prsService.persons;
  }



}
