import { Component } from '@angular/core';


interface Componente{
  name: string;
  icon: string;
  redirecTo: string; 
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes: Componente[]=[
    {
      name:'Inicio',
      icon:'body-outline',
      redirecTo:'/inicio'
    },
    {
      name:'Registro De Clases',
      icon:'create-outline',
      redirecTo:'/alert'
    },
   // {
     // name:'Action-Sheet',
     // icon:'bug-outline',
     // redirecTo:'/action-sheet'
   // },
    {
      name:'Acerca De',
      icon:'book-outline',
      redirecTo:'/card'
    },
    {
      name:'Formulario De Contacto',
      icon:'mail-outline',
      redirecTo:'/formulario'
    },


  ]




}
