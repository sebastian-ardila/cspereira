import logo from './Couchsurfing_Pereira_1.webp';
import { AppContainer, CouchsurfingLogoContainer } from './styled';
function App() {
  return (
    <>
      <AppContainer>
        <CouchsurfingLogoContainer 
          src={logo} 
          alt="logo de couchsurfing pereira"
          width={300}
          height={300}
        />
      </AppContainer>
      <div style={
        {
          "width": "100vw", 
          "height": "100vh", 
          "background": "white",
          "display": "flex",
          "flex-direction": "column",
          "justifyContent": "center",
          "alignItems": 'center',
          "gap": "20px",
          "color": "white",
          "fontSize": "20px",
          "fontWeight": "500"
        }
      }>
          <div style={
            {
              "background": "orangered",
              "borderRadius": "8px",
              "width": "200px",
              "padding": "20px",
              "display": "flex",
              "flex-direction": "column",
              "gap": "8px",
              "justifyContent": "center",
              "alignItems": "center",
              "color": "white",
              "fontSize": "14px",
              "fontWeight": "300",
              "lineHeight": 1.8
            }
          }>
            <h3 style={{"margin": "0"}}>en construcción por</h3>
            <a style={{"color": "white"}} href="" >Harold Romero</a>
            <a style={{"color": "white"}} href="" >Maribel Obando</a>
            <a style={{"color": "white"}} href="" >Andres Zuluaga</a>
            <a style={{"color": "white"}} href="" >Sebastian Ardila</a>
          </div>
      </div>
    </>
    
  );
}



export default App;