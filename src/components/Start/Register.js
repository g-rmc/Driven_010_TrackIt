import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

import { getAccess } from "../../services/trackit";
import { Container, StyledForm, StyledLink, Logo } from "./style";

export default function Register(){

    const { register, setRegister} = useContext(UserContext);
    const navigate = useNavigate();

    function handleRegister(e){

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
                />
                <input
                    type='password'
                    value={register.password}
                    onChange={e => setRegister({...register, password:e.target.value})}
                    placeholder='senha'
                />
                <input
                    type='text'
                    value={register.name}
                    onChange={e => setRegister({...register, name:e.target.value})}
                    placeholder='nome'
                />
                <input
                    type='url'
                    value={register.password}
                    onChange={e => setRegister({...register, image:e.target.value})}
                    placeholder='foto'
                />
                <button type='submit'>Entrar</button>
            </StyledForm>

            <StyledLink to='/'>
                Já tem uma conta? Faça login!
            </StyledLink>

        </Container>
    )
}