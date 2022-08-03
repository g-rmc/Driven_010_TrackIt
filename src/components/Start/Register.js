import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

import { getAccess } from "../../services/trackit";
import { Container, StyledForm, StyledLink, Logo, Loading } from "./style";

export default function Register(){

    const { register, setRegister, loading, setLoading} = useContext(UserContext);
    const navigate = useNavigate();

    function handleRegister(e){
        e.preventDefault();

        if (register.email === ''){
            alert('Digite seu email :D');
            return;
        }

        if (register.password === ''){
            alert('Digite sua senha :D');
            return;
        }

        if (register.name === ''){
            alert('Digite seu nome :D');
            return;
        }

        if (register.image === ''){
            alert('Insira o link da sua foto :D');
            return;
        }

        setLoading(true);
    }

    return (
        <Container>

            <img src={Logo} alt='Logo' style={{width: 180}}/>
            <h1>TrackIt</h1>

            <StyledForm onSubmit={handleRegister}>
                <input
                    type='email'
                    value={register.email}
                    onChange={e => setRegister({...register, email:e.target.value})}
                    placeholder='email'
                    disabled={loading}
                />
                <input
                    type='password'
                    value={register.password}
                    onChange={e => setRegister({...register, password:e.target.value})}
                    placeholder='senha'
                    disabled={loading}
                />
                <input
                    type='text'
                    value={register.name}
                    onChange={e => setRegister({...register, name:e.target.value})}
                    placeholder='nome'
                    disabled={loading}
                />
                <input
                    type='url'
                    value={register.image}
                    onChange={e => setRegister({...register, image:e.target.value})}
                    placeholder='foto'
                    disabled={loading}
                />
                <button type='submit' disabled={loading}>
                    {loading === false ? 'Cadastrar' : <Loading/>}
                </button>
            </StyledForm>

            <StyledLink to={loading === false ? '/' : ''}>
                Já tem uma conta? Faça login!
            </StyledLink>

        </Container>
    )
}