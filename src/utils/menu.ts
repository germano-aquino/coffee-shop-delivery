export enum CoffeeLabelType {
  TRADITIONAL = 'TRADICIONAL', 
  ICED = 'GELADO', 
  WITH_MILK = 'COM LEITE', 
  ESPECIAL = 'ESPECIAL', 
  ALCOHOLIC = 'ALCOÓLICO', 
}

export interface CoffeeProps {
  coffeeLabel: CoffeeLabelType[]
  name: CoffeeName
  description: string
  price: number
}

export enum CoffeeName {
  EXPRESSO_TRADICIONAL = 'Expresso Tradicional',
  EXPRESSO_AMERICANO = 'Expresso Americano',
  EXPRESSO_CREMOSO = 'Expresso Cremoso',
  EXPRESSO_GELADO = 'Expresso Gelado',
  CAFE_COM_LEITE = 'Café com Leite',
  LATTE = 'Latte',
  CAPUCCINO = 'Capuccino',
  MACCHIATO = 'Macchiato',
  MOCHACCINO = 'Mochaccino',
  CHOCOLATE_QUENTE = 'Chocolate Quente',
  CUBANO = 'Cubano',
  HAVAIANO = 'Havaiano',
  ARABE = 'Árabe',
  IRLANDES = 'Irlandês'
}

export const coffeeMenu: CoffeeProps[] = [
  {
    coffeeLabel: [CoffeeLabelType.TRADITIONAL],
    name: CoffeeName.EXPRESSO_TRADICIONAL,
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.90,
  },
  {
    coffeeLabel: [CoffeeLabelType.TRADITIONAL],
    name: CoffeeName.EXPRESSO_AMERICANO,
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.90,
  },
  {
    coffeeLabel: [CoffeeLabelType.TRADITIONAL],
    name: CoffeeName.EXPRESSO_CREMOSO,
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.90,
  },
  {
    coffeeLabel: [CoffeeLabelType.TRADITIONAL, CoffeeLabelType.ICED],
    name: CoffeeName.EXPRESSO_GELADO,
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.90,
  },
  {
    coffeeLabel: [CoffeeLabelType.TRADITIONAL, CoffeeLabelType.WITH_MILK],
    name: CoffeeName.CAFE_COM_LEITE,
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.90,
  },
  {
    coffeeLabel: [CoffeeLabelType.TRADITIONAL, CoffeeLabelType.WITH_MILK],
    name: CoffeeName.LATTE,
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.90,
  },
  {
    coffeeLabel: [CoffeeLabelType.TRADITIONAL, CoffeeLabelType.WITH_MILK],
    name: CoffeeName.CAPUCCINO,
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.90,
  },
  {
    coffeeLabel: [CoffeeLabelType.TRADITIONAL, CoffeeLabelType.WITH_MILK],
    name: CoffeeName.MACCHIATO,
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.90,
  },
  {
    coffeeLabel: [CoffeeLabelType.TRADITIONAL, CoffeeLabelType.WITH_MILK],
    name: CoffeeName.MOCHACCINO,
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.90,
  },
  {
    coffeeLabel: [CoffeeLabelType.ESPECIAL, CoffeeLabelType.WITH_MILK],
    name: CoffeeName.CHOCOLATE_QUENTE,
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.90,
  },
  {
    coffeeLabel: [CoffeeLabelType.ESPECIAL, CoffeeLabelType.ALCOHOLIC, CoffeeLabelType.ICED],
    name: CoffeeName.CUBANO,
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.90,
  },
  {
    coffeeLabel: [CoffeeLabelType.ESPECIAL],
    name: CoffeeName.HAVAIANO,
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.90,
  },
  {
    coffeeLabel: [CoffeeLabelType.ESPECIAL],
    name: CoffeeName.ARABE,
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.90,
  },
  {
    coffeeLabel: [CoffeeLabelType.ESPECIAL, CoffeeLabelType.ALCOHOLIC],
    name: CoffeeName.IRLANDES,
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.90,
  },
]