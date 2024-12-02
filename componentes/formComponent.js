export default function Form({nome, setNome, sobrenome, setSobrenome, email,setEmail, password, setPassword,erro, handleSubmit}){
    return(
        <form onSubmit={handleSubmit}>
           
           <input
           
            type="nome"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            />
 
<input
            type="sobrenome"
            placeholder="Digite seu sobrenome"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
            />
 
            <input
           
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            {erro && <p>{erro}</p>}
            <button type="submit">Cadastrar-se</button>
        </form>
    )
}
 