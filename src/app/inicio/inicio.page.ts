import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  entradaActual: any;
  handlerMessage: string = ''; // Inicializa handlerMessage en el constructor

  constructor(
    private menuController: MenuController,
    private alertController: AlertController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  mostrarMenu() {
    this.menuController.open('first');
  }

  async mostrarqr() {
    const alert = await this.alertController.create({
      header: '¿Desea mostrar QR a Alumnos?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Operacion cancelada';
          },
        },
        {
          text: 'Mostrar',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Operacion realizada';
          },
        },
      ],
    });

    await alert.present();
  }

  cerrarSesion() {
    // Redirige a la página de inicio de sesión (login)
    this.navCtrl.navigateRoot('/login'); // Reemplaza '/login' con la ruta correcta a tu página de inicio de sesión
  }
}
