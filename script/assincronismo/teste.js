const mensagens = {
    ataque: "Usou magia de ataque!",
    cura: "Usou magia de cura!",
    defesa: "Usou magia de defesa!",
    invalido: "Tipo de magia inválido!"
  };

console.log(mensagens.ataque)

// Definição da classe ItemMagico
class ItemMagico {
  // Crie um construtor que recebe os atributos referentes ao item mágico
  constructor(tipoItem, danoItem, resistenciaItem) {
    this.tipo = tipoItem;
    this.dano = danoItem;
    this.resistencia = resistenciaItem;
  }

  calcularDano() {
    return this.tipo === 'arma' ? this.dano * 2 : this.dano;
  }
}

// Crie uma instância da classe ItemMagico com os atributos desejados
const itemMagico = new ItemMagico('Espada', 200, 300);

// Chame o método calcularDano na instância do objeto ItemMagico
const danoTotal = itemMagico.calcularDano();

// Exiba o resultado
console.log(danoTotal);
