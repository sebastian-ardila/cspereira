import logo from './Couchsurfing_Pereira_1.webp';
import { AppContainer, CouchsurfingLogoContainer, HeroContent, HeroTitle, HeroSubtitle } from './styled';

function App() {
  return (
    <>
      <AppContainer>
        <HeroContent>
          <CouchsurfingLogoContainer
            src={logo}
            alt="logo de couchsurfing pereira"
            width={200}
            height={200}
          />
          <HeroTitle>Couchsurfing Pereira</HeroTitle>
          <HeroSubtitle>
            Conectando viajeros y locales en el corazón del Eje Cafetero.
            Comparte experiencias, descubre cultura y crea amistades que duran toda la vida.
          </HeroSubtitle>
        </HeroContent>
      </AppContainer>

      {/* Sección Nuestras Costumbres */}
      <div style={{
        "width": "100vw",
        "minHeight": "auto",
        "background": "#f8f9fa",
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "center",
        "alignItems": "center",
        "padding": "80px 20px"
      }}>
        <div style={{
          "textAlign": "center",
          "marginBottom": "60px"
        }}>
          <h2 style={{
            "color": "#ff6b35",
            "fontSize": "clamp(32px, 5vw, 48px)",
            "fontWeight": "700",
            "marginBottom": "12px",
            "margin": "0 0 12px 0"
          }}>
            Nuestras Costumbres
          </h2>
          <p style={{
            "color": "#6c757d",
            "fontSize": "18px",
            "margin": "0",
            "maxWidth": "600px"
          }}>
            Tradiciones que nos unen como comunidad
          </p>
        </div>

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
            "borderRadius": "16px",
            "padding": "32px",
            "boxShadow": "0 4px 20px rgba(0,0,0,0.08)",
            "minWidth": "280px",
            "maxWidth": "400px",
            "transition": "transform 0.3s ease, box-shadow 0.3s ease",
            "cursor": "pointer",
            "border": "1px solid rgba(0,0,0,0.05)"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-8px)";
            e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.12)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
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
            "borderRadius": "16px",
            "padding": "32px",
            "boxShadow": "0 4px 20px rgba(0,0,0,0.08)",
            "minWidth": "280px",
            "maxWidth": "400px",
            "transition": "transform 0.3s ease, box-shadow 0.3s ease",
            "cursor": "pointer",
            "border": "1px solid rgba(0,0,0,0.05)"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-8px)";
            e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.12)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
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

      {/* Footer / En Construcción */}
      <div style={{
        "width": "100vw",
        "minHeight": "auto",
        "background": "linear-gradient(to bottom, #2c3e50, #34495e)",
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "center",
        "alignItems": "center",
        "padding": "60px 20px",
        "gap": "32px"
      }}>
        <div style={{
          "textAlign": "center",
          "color": "white"
        }}>
          <h3 style={{
            "fontSize": "24px",
            "fontWeight": "600",
            "margin": "0 0 16px 0",
            "color": "white"
          }}>
            Sitio en Construcción
          </h3>
          <p style={{
            "fontSize": "16px",
            "margin": "0",
            "color": "rgba(255,255,255,0.8)"
          }}>
            Desarrollado con ❤️ por nuestro equipo
          </p>
        </div>

        <div style={{
          "display": "flex",
          "flexWrap": "wrap",
          "gap": "24px",
          "justifyContent": "center",
          "alignItems": "center"
        }}>
          {[
            "Harold Romero",
            "Maribel Obando",
            "Andres Zuluaga",
            "Sebastian Ardila"
          ].map((name, index) => (
            <div
              key={index}
              style={{
                "background": "rgba(255,255,255,0.1)",
                "backdropFilter": "blur(10px)",
                "borderRadius": "12px",
                "padding": "16px 24px",
                "color": "white",
                "fontSize": "16px",
                "fontWeight": "500",
                "border": "1px solid rgba(255,255,255,0.2)",
                "transition": "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.2)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {name}
            </div>
          ))}
        </div>

        <div style={{
          "textAlign": "center",
          "color": "rgba(255,255,255,0.6)",
          "fontSize": "14px",
          "marginTop": "24px"
        }}>
          © 2025 Couchsurfing Pereira. Todos los derechos reservados.
        </div>
      </div>
    </>
    
  );
}



export default App;