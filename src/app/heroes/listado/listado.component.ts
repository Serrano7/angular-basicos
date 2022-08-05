import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Scorpion', 'Sub-Zero', 'Noob-Saibot', 'Rain', 'Ermac', 'Triborg', 'Smoke'];

  public heroeBorrado: string = '' 

  public borrarHeroe():void{  
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
