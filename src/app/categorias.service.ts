import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor( private http : HTTP) { }
  
  obterCategorias() : any {
      let path = "https://reqres.in/api/unknown";

      return this.http.get(path, {}, {});
  }
}
