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
     {title: 'Nordeste A64', description: 'Melhor fone de ouvido do mercado', image: imgFeactureOne, link: 'phone-nordeste'},
     {title: 'Psicologia do esporte', description: 'Curso destinado a psicologia aplicada no esporte', image: imgFeactureTwo, link: 'Psicologia-do-esporte'},
     {title: 'Notebook Nordeste N745', description: 'Vamos falar sobre Inconsciente', image: imgFeactureThree, link: 'notebook-nordeste'},
]