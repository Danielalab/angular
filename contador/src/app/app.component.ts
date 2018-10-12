import { Component } from '@angular/core';
import { PaisesService } from './services/paises.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contador';
  canciones = [];
  constructor(private _apiService: PaisesService) {
    this._apiService.getData()
      .subscribe(data => {
        // this.canciones = data['toptracks'].track;
        console.log(data);
      });
  }
}
