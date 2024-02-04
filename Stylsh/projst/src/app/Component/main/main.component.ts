import { Component } from '@angular/core';
import { user } from '../../DataStore/Models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  UserValue : user ;
  constructor(){
    this.UserValue = new user("Alyazyia Saif" , 23 , "Female" , "Full Stack Developer",["Front-End", "Back-End" ,"DataBase"] ) ;
  }
  

}