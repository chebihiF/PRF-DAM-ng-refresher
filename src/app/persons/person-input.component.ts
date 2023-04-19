import { Component} from "@angular/core";
import { PersonService } from "./person.service";

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})

export class PersonInputComponent {

  enteredPersonName: string = ''

  constructor(private personService: PersonService){}

  onCreatePerson(){
    console.log('Created a person '+this.enteredPersonName);
    this.personService.addPerson(this.enteredPersonName)
    this.enteredPersonName = ''
  }

}
