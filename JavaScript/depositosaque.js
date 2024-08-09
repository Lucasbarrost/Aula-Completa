class BanckAccount {
    constructor (SaldoInicial) {
        this.saldo = SaldoInicial;
    }
    Depositar(valor) {
        this.saldo += valor;
        return `Novo saldo: R$ ${this.saldo}`;
 }
    sacar(valor) {
        if (valor > this.saldo) {
            return 'Saldo insuficiente!' 
    }
    this.saldo -= valor;
    return `Novo saldo: R$ ${this.saldo}`;
}
}
const minhaConta = new BanckAccount(1000);
console.log(minhaConta.Depositar(500));
console.log(minhaConta.sacar(300));
console.log(minhaConta.sacar(1500));
