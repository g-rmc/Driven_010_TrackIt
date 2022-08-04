import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

import { getRegister } from "../../services/trackit";
import { Container, StyledForm, StyledLink, Logo, Loading } from "./style";

export default function Register(){

    const { register, setRegister, loading, setLoading} = useContext(UserContext);
    const navigate = useNavigate();

    function handleRegister(e){

        e.preventDefault();
        setLoading(true);

        const promise = getRegister(register);

        promise.then(response => {
            setLoading(false);
            alert('Usuário cadastrado com sucesso :D')
            navigate('/');
        });

        promise.catch(error => {
            if (error.response.status === 409){
                alert ('Email já está cadastrado!')
            } else {
                alert (`Oh no! Erro ${error.response.status}!`)
            }
            setLoading(false);
        });
    }

    return (
        <Container>

            <div onClick={() => navigate('/')}>
                <img src={Logo} alt='Logo' style={{width: 180}}/>
                <h1>TrackIt</h1>
            </div>

            <StyledForm onSubmit={handleRegister}>
                <input
                    type='email'
                    value={register.email}
                    onChange={e => setRegister({...register, email:e.target.value})}
                    placeholder='email'
                    required
                    disabled={loading}
                />
                <input
                    type='password'
                    value={register.password}
                    onChange={e => setRegister({...register, password:e.target.value})}
                    placeholder='senha'
                    required
                    disabled={loading}
                />
                <input
                    type='text'
                    value={register.name}
                    onChange={e => setRegister({...register, name:e.target.value})}
                    placeholder='nome'
                    required
                    disabled={loading}
                />
                <input
                    type='url'
                    value={register.image}
                    onChange={e => setRegister({...register, image:e.target.value})}
                    placeholder='foto'
                    required
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