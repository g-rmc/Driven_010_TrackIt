import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

import { getAccess } from "../../services/trackit";
import { Container, StyledForm, StyledLink, Logo, Loading } from "./style";

export default function Login(){

    const { login, setLogin, setUser, setToken, loading, setLoading} = useContext(UserContext);
    const navigate = useNavigate();

    function handleLogin(e){

        e.preventDefault();
        setLoading(true);

        const promise = getAccess(login);

        promise.then(response => {
            setUser(response.data);
            setToken(response.data.token);
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

            <img src={Logo} alt='Logo' style={{ width: 180 }} />
            <h1>TrackIt</h1>

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