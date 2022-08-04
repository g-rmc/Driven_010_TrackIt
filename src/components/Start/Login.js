import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

import { postAccess } from "../../services/trackit";
import { Container, StyledForm, StyledLink, Logo, Loading } from "./style";

export default function Login(){

    const [login, setLogin] = useState({email:'', password:''});
    const [loading, setLoading] = useState(false);
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    function handleLogin(e){

        e.preventDefault();
        setLoading(true);

        const promise = postAccess(login);

        promise.then(response => {
            setUser(response.data);
            setLoading(false);
            navigate('/hoje');
        });

        promise.catch(error => {
            if (error.response.status === 401){
                alert ('Usuário não cadastrado!')
            } else {
                alert (`Oh no! Erro ${error.response.status}!`)
            }
            setLoading(false);
        });
    }

    return (
        <Container>

            <div onClick={() => navigate('/')}>
                <img src={Logo} alt='Logo' style={{ width: 180 }} />
                <h1>TrackIt</h1>
            </div>

            <StyledForm onSubmit={handleLogin}>
                <input
                    type='email'
                    value={login.email}
                    onChange={e => setLogin({...login, email:e.target.value})}
                    placeholder='email'
                    required
                    disabled={loading}
                />
                <input
                    type='password'
                    value={login.password}
                    onChange={e => setLogin({...login, password:e.target.value})}
                    placeholder='senha'
                    required
                    disabled={loading}
                />
                <button type='submit' disabled={loading}>
                    {loading === false ? 'Entrar' : <Loading/>}
                </button>
            </StyledForm>

            <StyledLink to={loading === false ? '/cadastro' : ''}>
                Não tem uma conta? Cadastre-se!
            </StyledLink>

        </Container>
    )
}