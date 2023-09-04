import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  constructor(private menuController: MenuController,
              private alertController: AlertController) { }

  ngOnInit() {
  }

  usuario={
    nombre:'',
    email:'',
    edad:'',
    password:'',
    soporte:'',
  }

  async MostrarMensaje() {
    const alert = await this.alertController.create({
      header: 'Gracias',
      message: 'Se han enviado su informacion',
      buttons: ['Aceptar'],
    });
    await alert.present();
  }


  Enviar(){
    console.log('Formulario Enviado');
    this.MostrarMensaje();
    this.usuario.nombre='';
    this.usuario.email='';
    this.usuario.edad='';
    this.usuario.password='';
    this.usuario.soporte='';
  }


  mostrarMenu(){
    this.menuController.open('first');
  }



}
