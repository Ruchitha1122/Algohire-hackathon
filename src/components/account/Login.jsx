import { useState } from 'react';
import { Box, TextField, Button, styled, Typography } from "@mui/material";
import {API} from "../../service/api.js"
const Component = styled(Box)`
    width : 400px;
    margin : auto;
    box-shadow: 5px 2px 2px 2px rgb(0 0 0/0.6);
`
const Image = styled('img')({
    width: 100,
    display: 'flex',
    margin: 'auto',
    padding: '50px 0 0'
});
const Wrapper = styled(Box)`
        padding:25px 35px;
        
        display : flex;
         flex : 1;
        overflow : auto;
        flex-direction: column;
         & > div, & > button, & > p{
            margin-top: 20px;
         }

 `;

const LoginButton = styled(Button)`
        text-transform : none;
        background : #FB641B;
        color : #fff;
        height : 48px;
        border-radius: 2px;

 `   ;
const SigupButton = styled(Button)`
    text-transform : none;
        background : #fff;
        color : #FB641B;
        height : 48px;
        border-radius: 2px;
        box-shadow: 0 2px 4px 0 rgb(0 0 0 /20%);

`;
  
const Text = styled(Typography)`
        color : #878787;
        font-size: 16px;
`;
   
const singupInitalValues = {
    name: "",
    username: "",
    password: ""
}



const Login = () => {
    const imageURL = "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';";
    const [account, toggleAccount] = useState("login");
    const [signup, setSignup] = useState(singupInitalValues);
    const toggleSignup = () => {
        account === "signup" ? toggleAccount("login") : toggleAccount("signup");
    }
    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const signupUser = async () => {
  try {
    
    let response = await API.userSignup(signup);
    console.log("Signup successful:", response);
    
  } catch (error) {
      console.log("Error during signup:");

   
  }
};


    return (
        <Component>
            <Box>
                <Image src={imageURL}
                    alt="login"
                />
                {
                    account === "login" ?
                
                        <Wrapper>
                            <TextField variant="standard" label="Enter Username" />
                            <TextField variant="standard" label="Enter Password" />
                            <LoginButton variant="contained">Login</LoginButton>
                            <Text style={{ textAlign: 'center' }}>OR</Text>
                            <SigupButton onClick={() => toggleSignup()}> Create an account</SigupButton>
                        </Wrapper> :

             
                        <Wrapper>
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name = 'name' label="Enter Name" />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name = 'username'label="Enter UserName" />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name = 'password'label="Enter Password" />
                            <SigupButton onClick={()=> signupUser()}>SignUP</SigupButton>
                            <Text style={{ textAlign: 'center' }}>OR</Text>
                            <LoginButton variant="contained" onClick={() => toggleSignup()}> Already have an account</LoginButton>
                        </Wrapper>}
            </Box>
        </Component>
    )
};


export default Login;