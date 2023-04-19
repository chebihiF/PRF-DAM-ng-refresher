import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})

export class PersonInputComponent {
  @Output() personCreate = new EventEmitter<string>();
  enteredPersonName: string = ''

  onCreatePerson(){
    console.log('Created a person '+this.enteredPersonName);
    this.personCreate.emit(this.enteredPersonName);
    this.enteredPersonName = ''
  }

}
