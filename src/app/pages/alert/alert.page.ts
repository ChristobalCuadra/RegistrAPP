import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  handlerMessage='';      //devuelve un string con un mensaje
  roleMessage='';         //devuelve el valor interno del botón (confirm, cancel)

  constructor(private alertController: AlertController,
              private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }



  //metodo que envía un saludo 
  async Saludar() {
    const alert = await this.alertController.create({
      header: 'Clase iniciada con exito',
      subHeader: 'Esperamos que estes teniendo un gran dia',
      message: 'Saludos',
      buttons: ['Aceptar'],
    });

    await alert.present();
  }

  //metodo que ingresa datos 
  async Ingresar() {
    const alert = await this.alertController.create({
      header: 'Ingrese sus datos',
      buttons: ['Aceptar'],
      inputs: [
        {
          placeholder: 'Nombre Clase',
        },
        {
          placeholder: 'Seccion (Maximo 5 Caracteres)',
          attributes: {
            maxlength: 5,
          },
        },
        {
          type: 'textarea',
          placeholder: 'Temas tratados en la clase',
        },
      ],
    });

    await alert.present();
  }

  //metodo que crea una alerta con dos botones
  async Confirmar() {
    const alert = await this.alertController.create({
      header: '¿Seguro de terminar la clase?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Clase no cancelada';
          },
        },
        {
          text: 'Terminar',
          role: 'Clase terminada exitosamente',
          handler: () => {
            this.handlerMessage = 'Clase terminada';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }



}
