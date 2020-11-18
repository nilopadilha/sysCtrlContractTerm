import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  title = 'Contratos';


  public contracts =[
          {razao: 'Localiza ltda'},                     
          {razao: 'Movida semi-novos ltda'},                        
          {razao: 'Nordeste Mutimarcas ltda'},          
          {razao: 'Salinas Potiguares ltda'},            
          {razao: 'Produtos Guaraní ltda'},              
          {razao: 'Solivos Técnologia ltda'},            
          {razao: 'Colégio ciência sem Fronteiras ltda'},
   ];




  constructor() { }

  ngOnInit(): void {
  }

}
