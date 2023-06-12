import imgFeactureOne from '../assets/img/phone-nordeste.jpg'
import imgFeactureTwo from '../assets/img/celular-nordeste.jpg'
import imgFeactureThree from '../assets/img/notebook-nordeste.jpg'

export type Feature = {
     title: string;
     description?: string;
     image: string;
     link: string
} 

export const features: Feature[] = [
     {title: 'Nordeste A64', description: 'Melhor fone de ouvido do mercado', image: imgFeactureOne, link: 'headset-nordeste'},
     {title: 'Celular XC87', description: 'Melhor Celular para tirar fotos', image: imgFeactureTwo, link: 'phone-nordeste'},
     {title: 'Notebook Nordeste N745', description: 'Notebook Multimo uso e portátil', image: imgFeactureThree, link: 'notebook-nordeste'},
]