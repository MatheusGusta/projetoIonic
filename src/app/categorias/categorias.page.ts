import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../categorias.service';
import { NavController } from '@ionic/angular';
import { AlertasService } from '../services/alertas.service';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {
  itens: any;
  
  constructor( 
    private navCtrl: NavController,
    private categoriasService : CategoriasService,
    private meMostraAlerta: AlertasService
    ) { }

  ngOnInit() {
   /* this.itens = [
        {    
          "id": 1,
          "name": "Banco de Dados",
          "icon": "server",
          "path": "banco-de-dados"
        },
        {    
          "id": 2,
          "name": "Câmera",
          "icon": "camera"
        },
        {
          "id" : 3,
          "name" : "Abacaxi",
          "icon": "nutrition"
        }
      ]; */
      //Recebe dados provenientes da conexão de service
      this.categoriasService.obterCategorias()
      .then(response => {
        //response.data recebe uma string Json e devemos converter em objetos
        this.itens = JSON.parse(response.data, (key, value)=> {  
          return value;    
        });  
       this.itens = this.itens.data; //obtem apenas o array data
      },
      error => { 
        console.log(error);
      }); 
    }
  
    openPage(page: string){
      this.navCtrl.navigateForward(`/${page}`);
    }

}
