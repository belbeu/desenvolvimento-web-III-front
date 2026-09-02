import { Link } from 'react-router'
function ListaFuncionarios() {
 const funcionarios = [
 {
 id: 1,
 nome: 'Giulia',
 cpf: '12345678901',
 email: 'giu@email.com',
 },
 {
 id: 2,
 nome: 'Lais',
 cpf: '23456789012',
 email: 'lais@email.com',
 },
 {
 id: 3,
 nome: 'Isabel',
 cpf: '34567890123',
 email: 'bel@email.com',
 },
 ]
 return (
 <main className="pagina-clientes">
 <h1>Lista de Funcionarios</h1>
 <ul className="lista-clientes">
    {clientes.map((funcionario) => (
    <li key={funcionario.id}>
        <strong>{funcionario.nome}</strong>
        <span>CPF: {funcionario.cpf}</span>
        <span>E-mail: {funcionario.email}</span>
    </li>
    ))}
 </ul>
    <Link to="/clientes">Voltar para Gerenciamento de Funcionarios</Link>
 </main>
 )
}
export default ListaClientes