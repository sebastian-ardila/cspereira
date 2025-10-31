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

      {/* Sección Nuestras Costumbres */}
      <div style={{
        "width": "100vw",
        "minHeight": "100vh",
        "background": "#f5f5f5",
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "center",
        "alignItems": "center",
        "padding": "40px 20px"
      }}>
        <h2 style={{
          "color": "orangered",
          "fontSize": "32px",
          "fontWeight": "700",
          "marginBottom": "40px",
          "textAlign": "center"
        }}>
          Nuestras Costumbres
        </h2>

        <div style={{
          "display": "flex",
          "flexWrap": "wrap",
          "gap": "30px",
          "justifyContent": "center",
          "maxWidth": "1200px"
        }}>
          {/* Fiesta de Disfraces */}
          <div style={{
            "background": "white",
            "borderRadius": "12px",
            "padding": "30px",
            "boxShadow": "0 4px 6px rgba(0,0,0,0.1)",
            "minWidth": "280px",
            "maxWidth": "400px"
          }}>
            <h3 style={{
              "color": "orangered",
              "fontSize": "24px",
              "fontWeight": "600",
              "marginBottom": "20px",
              "textAlign": "center"
            }}>
              🎭 Fiesta de Disfraces
            </h3>
            <div style={{
              "color": "#333",
              "fontSize": "16px",
              "lineHeight": "1.8"
            }}>
              <p style={{
                "fontWeight": "500",
                "marginBottom": "15px",
                "color": "orangered"
              }}>
                Historial:
              </p>
              <ul style={{
                "listStyle": "none",
                "padding": "0",
                "margin": "0"
              }}>
                <li style={{"padding": "8px 0", "borderBottom": "1px solid #eee"}}>
                  🎉 Fiesta de Disfraces 4.0 - 2025
                </li>
                <li style={{"padding": "8px 0", "borderBottom": "1px solid #eee"}}>
                  🎉 Fiesta de Disfraces 3.0 - 2024
                </li>
                <li style={{"padding": "8px 0", "borderBottom": "1px solid #eee"}}>
                  🎉 Fiesta de Disfraces 2.0 - 2023
                </li>
                <li style={{"padding": "8px 0"}}>
                  🎉 Fiesta de Disfraces 1.0 - 2022
                </li>
              </ul>
            </div>
          </div>

          {/* Juegos de Volley */}
          <div style={{
            "background": "white",
            "borderRadius": "12px",
            "padding": "30px",
            "boxShadow": "0 4px 6px rgba(0,0,0,0.1)",
            "minWidth": "280px",
            "maxWidth": "400px"
          }}>
            <h3 style={{
              "color": "orangered",
              "fontSize": "24px",
              "fontWeight": "600",
              "marginBottom": "20px",
              "textAlign": "center"
            }}>
              🏐 Juegos de Volley
            </h3>
            <div style={{
              "color": "#333",
              "fontSize": "16px",
              "lineHeight": "1.8",
              "textAlign": "center"
            }}>
              <p>
                Nos reunimos regularmente para disfrutar de emocionantes partidos de voleibol,
                fortaleciendo la amistad y el espíritu de equipo en nuestra comunidad.
              </p>
            </div>
          </div>
        </div>
      </div>

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