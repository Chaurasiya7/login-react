import React, { useState } from "react";
import * as Components from "./Components";
import axios from "axios";

function App() {
  const [signIn, toggle] = useState(true);
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  
  let Sign_Up = async (e) => {
    e.preventDefault();

    try {
      alert("Sign Up");
      axios.post("http://localhost:5000/api/insert", {
        text,
        email,
        password,
      });
    } catch (e) {
      console.log(e);
    }
  };

  let login_fun = async (e) => {
    e.preventDefault();
    
       axios.post("http://localhost:5000/", {
        email,
        password
      })
      .then(result=>{
        console.log(result)
        if(result.data ==="Success"){
          alert("jhala");
          console.log("jhala")
         
        }
        
       
      })
    
      
    
  
    .catch(err => {
      alert("naahii");
      console.log(err);
    });
  }  
  return (
    <Components.Container>
      <Components.SignUpContainer signinIn={signIn}>
        <Components.Form>
          <Components.Title>Create Account</Components.Title>
          <Components.Input
            type="text"
            placeholder="Name"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Components.Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Components.Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Components.Button onClick={Sign_Up}>Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      <Components.SignInContainer signinIn={signIn}>
        <Components.Form>
          <Components.Title>Login</Components.Title>
          <Components.Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Components.Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Components.Anchor href="#">Forgot your password?</Components.Anchor>
          <Components.Button onClick={login_fun}>Login</Components.Button>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>
          <Components.LeftOverlayPanel signinIn={signIn}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
              To keep connected with us please login with your personal info
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Login
            </Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signinIn={signIn}>
            <Components.Title>Hello, Friend!</Components.Title>
            <Components.Paragraph>
              Enter Your personal details and start journey with us
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Sigin Up
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );

  }
export default App;
