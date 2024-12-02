'use client'
 
import { useState } from "react";
import { cadastrarUsuario } from "../service/cadastroService";
 
 
    export function useCadastro(){
        const[nome, setNome] = useState('');
        const[sobrenome, setSobrenome] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const[erro, setErro] = useState(null);
 
        const handleSubmit = async (e) => {
            e.preventDefault();
        try{
            await cadastrarUsuario({nome,sobrenome, email, password})
            window.location.href = '/boas-vindas'
        }catch(error){
            setErro(erro)
        }
        }
       
        return{
            nome,
            setNome,
            sobrenome,
            setSobrenome,
            email,
            setEmail,
            password,
            setPassword,
            erro,
            setErro,
            handleSubmit
           
        }
       
    }