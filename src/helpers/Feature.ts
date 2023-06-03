import imgFeactureOne from '../assets/img/feature1.jpg'
import imgFeactureTwo from '../assets/img/feature2.jpg'
import imgFeactureThree from '../assets/img/feature3.jpg'

export type Feature = {
     title: string;
     description?: string;
     image: string;
     link: string
} 

export const features: Feature[] = [
     {title: 'Estrutura e papel dos sonhos', description: 'Sonhos vista pela Psicologia', image: imgFeactureOne, link: 'Estrutura-e-papel-dos-sonhos'},
     {title: 'Psicologia do esporte', description: 'Curso destinado a psicologia aplicada no esporte', image: imgFeactureTwo, link: 'Psicologia-do-esporte'},
     {title: 'Inconsciente coletivo e arquétipo', description: 'Vamos falar sobre Inconsciente', image: imgFeactureThree, link: 'Inconsciente-coletivo-e-arquétipo'},
]