import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})

export class LabsComponent {
  tittle = 'todo-app LABS';
  welcome = 'Primer proyecto con Angular 17';
  tasks = signal([
    "Instalar Angular",
    "Crear proyecto",
    "Crear componentes",
    "crear servicios"
  ]);

  name = signal('Norelys');
  age = 15;
  disable = true;
   //url imagen
   img = 'https://w3schools.com/howto/img_avatar.png';

   person = signal({
    name:'Norelys',
    age: 19,
    avatar: 'https://w3schools.com/howto/img_avatar.png'
   });

   colorCtrl = new FormControl();
   widthCtrl = new FormControl(50, {
    nonNullable: true,
   });

   nameCtrl = new FormControl('Norelys', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(3)
    ]
   });
    

   constructor() {
    this.colorCtrl.valueChanges.subscribe(value => {
      console.log(value);
    })
   }

   clickHandler() {
    alert("Hola")
   }
   changeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
   }
   keydownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value);
   }
   changeAge(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update(prevState => {
      return {
        ...prevState,
        edad: parseInt(newValue,10)
      }
    });
   }
   changeName (event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update(prevState => {
      return {
        ...prevState,
        name: newValue
      }
    });
   }

}