import { Component, OnInit } from '@angular/core';
import { Filme } from '../model/filme';
import { RegistroFilmeService } from '../registro-filme.service';

@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.css']
})
export class ListaFilmesComponent implements OnInit {

  listaFilmes = [
    new Filme('Harry Potter','J.K.Rowling',2001),
    new Filme('Avatar','James Cameron',2012),
    new Filme('Rei Leão','Roger Alers',1994),
    new Filme('Tropa de Elite','José Padilha',2007),
  ];

  constructor( private registroFilme: RegistroFilmeService ) {
  }

  ngOnInit(): void {
    this.listarFilmes()
  }

  listarFilmes() {
    this.registroFilme.listarFilmes().subscribe(
      (resultado:any) => {
        this.listaFilmes = resultado.list
      }
    );
  }

  
}
