import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import {Container, Typography} from "@material-ui/core"
import "fontsource-roboto";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">Formulário de cadastro</Typography>
      <FormularioCadastro aoEnviar={aoEnviarForm} validarCpf={validarCpf}/>
    </Container>
  );
}

function aoEnviarForm(dados){
  console.log(dados);
}

function validarCpf(cpf){
  if(cpf.length !== 11){
    return {valido:false, texto:"CPF precisa ter 11 digitos"}
  }else{
    return {valido:true, texto:""}
  }
}

export default App;
