import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // fooddetails

  foodDetails = [
    {
      id:1,
      foodName:"Hamburguer de picanha",
      foodDetails:"Pão, salada, queijo, carne e molho",
      foodPrice:25,
      foodImg:"https://churrasco.coz.br/wp-content/uploads/2021/01/hamburguer-na-churrasqueira.jpg"
    },
    {
      id:2,
      foodName:"Pizza da casa",
      foodDetails:"vegetais, quatro queijos, frango.",
      foodPrice:34,
      foodImg:"https://cdn.deliway.com.br/blog/base/92a/f9d/574/pizza-de-alcachofra.jpg"
    },
    {
      id:3,
      foodName:"Coxinha gourmet",
      foodDetails:"Frango com queijo",
      foodPrice:11,
      foodImg:"https://media.gazetadopovo.com.br/2019/11/12173310/Texto-3-.-coxinha-pelanda.jpeg"
    },
    {
      id:4,
      foodName:"Rocanbole doce",
      foodDetails:"massa com leite, recheio de nutela",
      foodPrice:23,
      foodImg:"https://www.receitasnestle.com.br/sites/default/files/srh_recipes/c390f7572db6774bd6b3134580c7ea27.jpg"
    },
    {
      id:5,
      foodName:"Bolo festa",
      foodDetails:"Chocolate, Recheio de creme de leite",
      foodPrice:10,
      foodImg:"https://imagem.band.com.br/12/f_324312.jpg"
    },
    {
      id:6,
      foodName:"Sobremesa",
      foodDetails:"frutas com calda de chocolate",
      foodPrice:22,
      foodImg:"https://img.freepik.com/fotos-premium/sobremesa-gourmet_777078-16467.jpg"
    }
  ]




}
