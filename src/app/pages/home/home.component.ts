import { goflix, Film } from './models/goflix';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public goflix: goflix;
  public Accion: Film;
  public terror: Film;

  constructor() {
    this.goflix = {
      navbar: {
        title: 'Goflix',
        logo: {
          src: '../../../assets/images/LOGO/logo.png',
          alt: 'GoFlix logo',
        },
      },
      hero: {
        title: 'los 5 mas populares de la semana',
        imgGallery: [
          {
            src: '../../../assets/images/Top10/1-papel.webp',
            alt: 'La Casa De Papel',
          },

          {
            src: '../../../assets/images/Top10/10-gooddoctor.webp',
            alt: 'The Good Doctor',
          },

          {
            src: '../../../assets/images/Top10/7-blacklist.webp',
            alt: 'Black List',
          },
          {
            src: '../../../assets/images/Top10/2-reina.webp',
            alt: 'La Reina Del Flow',
          },
          {
            src: '../../../assets/images/Top10/8-ricos.webp',
            alt: 'Ricos',
          },
        ],
      },
    };
    this.Accion = {
      title: 'Peliculas de Accion',
        imgGallery: [
          {
            src: '../../../assets/images/Accion/johnwick2.webp',
            alt: 'Jhon Wick 2',
          },

          {
            src: '../../../assets/images/Accion/equalizer2.webp',
            alt: 'The Equalizer',
          },

          {
            src: '../../../assets/images/Accion/renacido.webp',
            alt: 'El Renacido',
          },
          {
            src: '../../../assets/images/Accion/killbill2.webp',
            alt: 'Kill Bill',
          },
          {
            src: '../../../assets/images/Accion/terminator2.webp',
            alt: 'Ricos',
          },
        ],
    }
    this.terror = {
      title: "Terror",
      imgGallery: [
        {
          src: "../../../assets/images/Terror/apostol.jpg",
          alt: "Apostol"
        },
        {
          src: "../../../assets/images/Terror/calleterror.jpg",
          alt: "Calle Terror"
        },
        {
          src: "../../../assets/images/Terror/life.webp",
          alt: "Life"
        },
        {
          src: "../../../assets/images/Terror/multiple.webp",
          alt: "Multiple"
        },
        {
          src: "../../../assets/images/Terror/reflejos.webp",
          alt: "Reflejos"
        },
      ]
  }
  }
  ngOnInit(): void {}
}
