import { Component } from "@angular/core";


//decorador

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})


    //clase

    export class HeroeComponent {
    public nombre: string = 'Noob Saibot';
    public edad: number = 32;


    //getter
    get nombreCapitalizado(): string {
        return this.nombre.toLocaleUpperCase();
    }

    //funciones 

    public obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
    }

    public cambiarNombre(): void {
        this.nombre = 'Scorpion';
    }

}