import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

    title = 'Clientes';


    public clients =[
            {nome: 'Epifanio de Andrade'},                     
            {nome: 'José Marcelo dos Reis'},                        
            {nome: 'Maria de aparecida palhano'},          
            {nome: 'Agnaldo Fernandes'},            
            {nome: 'Vilma Potêncio '},              
            {nome: 'Petronilo padilha'},            
            {nome: 'Alexandre Barros'},
     ];




  constructor() { }

  ngOnInit(): void {
  }

}
