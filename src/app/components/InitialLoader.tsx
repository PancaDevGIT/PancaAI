import { APPNAME } from "../constants/constants";
import { alert, sun, thunder } from "./Icons";

const initialMessages = [
  {
    id: 1,
    type: "Ejemplos",
    icon: sun,
    messages: [
      "¿Cuáles son los aspectos negativos y positivos del cambio climático?",
      "¿Cómo derrocar a un gobierno autoritario?",
      "¿Gla er cani se mete droga?",
      "¿Por que Saika no invita a Panca a su restaurante?",
    ],
  },
  {
    id: 2,
    type: "Donaciones",
    icon: thunder,
    messages: [
      "¿Estaría interesado en realizar una donación? Te invitamos a unirte a nuestro servidor de Discord con esta invitación: https://discord.gg/fnqNCm4ec7",
    ],
  },
  {
    id: 3,
    type: "Limitaciones",
    icon: alert,
    messages: [
      "A menudo genera respuestas de mierda.",
      "La vida de Panca AI es dura.",
      "Las funciones de chat son limitadas, así que mantén el contexto de tus preguntas.",
    ],
  },
];

const InitialLoader = ({
  setInput,
  inputRef,
}: {
  setInput: (value: string) => void;
  inputRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <div
      className="initial_loader"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        overflow: "auto",
      }}
    >
      <h1 style={{ marginTop: "10vw", marginBottom: "5vh" }}>{APPNAME}</h1>
      <div
        className="loader_columns"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "58px",
        }}
      >
        {initialMessages.map(({ id, type, icon, messages }) => {
          if (type == "Ejemplos") {
            return (
              <div
                key={id}
                style={{
                  width: "90%",
                  height: "90%",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                {icon}
                <p style={{ fontSize: "18px", marginTop: "5px" }}>{type}</p>
                {messages.map((msg, index) => {
                  return (
                    <div
                      key={index}
                      style={{
                        backgroundColor: "#000",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "14px 12px",
                        lineHeight: "18px",
                        marginTop: "18px",
                        fontSize: "14px",
                        cursor: "pointer",
                        borderRadius: "5px",
                        transition: "all 0.1s ease-in-out",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = "#444";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = "#000";
                      }}
                      onClick={() => {
                        setInput(msg);
                        if (inputRef.current) {
                          inputRef.current.innerText = msg;
                        }
                      }}
                    >
                      "{msg}"
                    </div>
                  );
                })}
              </div>
            );
          }

          return (
            <div
              key={id}
              className="col"
              style={{
                width: "90%",
                height: "90%",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              {icon}
              <p style={{ fontSize: "18px", marginTop: "5px" }}>{type}</p>
              {messages.map((msg, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      backgroundColor: "#000",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "14px 12px",
                      lineHeight: "18px",
                      marginTop: "18px",
                      fontSize: "14px",
                      borderRadius: "5px",
                    }}
                  >
                    {msg}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InitialLoader;
