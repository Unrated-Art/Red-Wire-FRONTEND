import { Component, OnInit } from '@angular/core';

interface SectionType {
  href: string
  src: string
  title: string
  subtitle: string
}

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent implements OnInit {

  sections: SectionType[] = [
    {
      href: 'Types de Formations',
      src: '../assets/images/001.jpg',
      title: 'Toutes nos formations',
      subtitle: ''
    },
    {
      href: './formationsIntra.html',
      src: '../assets/images/002.jpg',
      title: 'Formation entreprise',
      subtitle: 'Sélectionnez votre lieu'
    },
    {
      href: './contact.html',
      src: '../assets/images/003.jpg',
      title: 'Formations personnalisée',
      subtitle: 'Contactez-nous'
    },
  ]

  constructor() {}

  ngOnInit(): void {}
}
