import TopBar from "../TopBar";
import BottomMenu from "../BottomMenu";

import { Container, Header } from "./style";

export default function History(){
    return (
        <>
        <TopBar/>
        
        <Container>
            <Header>
                <h1>Histórico</h1>
            </Header>

            <h6>Em breve você poderá ver o histórico dos seus hábitos aqui!</h6>
        </Container>

        <BottomMenu />
    </>
    )
}