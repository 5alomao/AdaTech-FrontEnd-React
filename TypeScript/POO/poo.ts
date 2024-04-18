// * Criando uma classe em TypeScript
// * atributos e métodos

// * Estabelecendo um contrato - implements - interface
interface IPessoa {
  nome: string;
  sobrenome: string;
  idade: number;
  dormir: () => void;
}

class Pessoa implements IPessoa {
  // atributos
  // private --> fora da classe não altera
  // readonly --> apenas leitura
  // accessor --> acessar mesmo sendo privado getter() setter()
  // _nomeVariável --> indica variável private
  private _cpf: string;
  nome: string;
  sobrenome: string;
  idade: number;

  // Construtor
  constructor(cpf: string, nome: string, sobrenome: string, idade: number) {
    this._cpf = cpf;
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  // métodos
  dormir() {
    console.log("Dormindo ... 😴");
  }

  // accessor - getter
  get cpf(): string {
    return this._cpf;
  }

  // accessor - setter
  set cpf(newCpf: string) {
    if (newCpf.length !== 14) {
      // lançar um erro
      throw new Error("CPF length is incorret!");
    }
    this._cpf = newCpf;
  }
}

const objPessoa = new Pessoa(
  "123-123-123-12",
  "Salomão",
  "Ferreira Junior",
  20
);
console.log(objPessoa);
objPessoa.dormir();

// * ENCAPSULAMENTO - restringir os atributos e métodos apenas para a classe

// getter
console.log(objPessoa.cpf);
// setter
objPessoa.cpf = "321-321-321-32";
// getter
console.log(objPessoa.cpf);

// * HERANÇA

class Professor extends Pessoa {
  codigo: string;

  constructor(
    cpf: string,
    nome: string,
    sobrenome: string,
    idade: number,
    codigo: string
  ) {
    super(cpf, nome, sobrenome, idade);
    this.codigo = codigo;
  }

  ensinar() {
    console.log("Ensinando... 👨‍🏫");
  }
}

const objProfessor = new Professor(
  "333-222-111-00",
  "Professor",
  "Programação",
  38,
  "0001"
);

console.log(objProfessor);
objProfessor.dormir();
objProfessor.ensinar();

// * POLIMORFISMO --> Objetos de diferentes classes, herdeiras de uma classe mãe
// * podem ser tratados genericamente como objetos pertencentes à classe mãe
// * todo objeto filho pode ser considerado um objeto que segue classe mãe

// * instanceoff
//  é um objeto da classe Pessoa ?
console.log(objPessoa instanceof Pessoa); // true
console.log(objPessoa instanceof Professor); // false
console.log(objProfessor instanceof Pessoa); // true
console.log(objProfessor instanceof Professor); // true
