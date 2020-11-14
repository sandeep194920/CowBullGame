import React, { useEffect, useContext } from "react";
import { GamePlay } from "../components";
import logo from "../logo.svg";
import { GameContext } from "../App";

export default function GamePlayContainer() {
  const { gameType, level, letters } = useContext(GameContext);

  // const isWeb = window.innerWidth > 1100;
  const isMobile = window.innerWidth < 1000;

  useEffect(() => {
    console.log("The inner is " + isMobile);
  }, [isMobile]);

  console.log("Inner width is " + window.innerWidth);
  useEffect(() => {
    console.log(gameType, level, letters);
  });
  const res = "00";

  return (
    <GamePlay>
      <GamePlay.Frame>
        <GamePlay.Logo src={logo} alt="Logo" />
        <GamePlay.WordContainer extraWidthRight>
          <GamePlay.SubText>
            Attempts Left &nbsp;
            <span
              style={{
                color: "#ffa62b",
                fontWeight: "bold",
              }}
            >
              14
            </span>
          </GamePlay.SubText>
          <GamePlay.SubText>
            Hidden &nbsp;{" "}
            <span
              style={{
                color: "transparent",
                background: "#eeeded",
                opacity: 0.3,
                borderRadius: "20%",
                userSelect: "none",
                // textShadow: "5px 5px 5px #394867",
                textShadow: "0 0 5px rgba(0,0,0,0.5)",
              }}
            >
              0000
            </span>
          </GamePlay.SubText>
        </GamePlay.WordContainer>
        <GamePlay.MainText>
          <span style={{ color: "#ffa62b" }}>{letters} </span> Letter{" "}
          <span style={{ color: "#ffa62b" }}>{gameType} </span>
        </GamePlay.MainText>
        <GamePlay.WordContainer difficulty>
          <GamePlay.SubText difficulty>
            <span style={{ color: "#ffa62b", fontWeight: "bold" }}>
              {level}
            </span>
          </GamePlay.SubText>
        </GamePlay.WordContainer>
      </GamePlay.Frame>

      <GamePlay.AttemptsContainer>
        <GamePlay.AttemptWrapper>
          <GamePlay.AttemptNumber>1.</GamePlay.AttemptNumber>
          <GamePlay.LettersContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer style={{ color: "#9BA4B4" }}>
              N
            </GamePlay.LetterContainer>
            <GamePlay.LetterContainer>G</GamePlay.LetterContainer>
          </GamePlay.LettersContainer>
          <GamePlay.AttemptResult>2C</GamePlay.AttemptResult>
        </GamePlay.AttemptWrapper>

        <GamePlay.AttemptWrapper>
          <GamePlay.AttemptNumber>1.</GamePlay.AttemptNumber>
          <GamePlay.LettersContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer style={{ color: "#9BA4B4" }}>
              N
            </GamePlay.LetterContainer>
            <GamePlay.LetterContainer>G</GamePlay.LetterContainer>
          </GamePlay.LettersContainer>
          <GamePlay.AttemptResult>2C</GamePlay.AttemptResult>
        </GamePlay.AttemptWrapper>

        <GamePlay.AttemptWrapper>
          <GamePlay.AttemptNumber>1.</GamePlay.AttemptNumber>
          <GamePlay.LettersContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer style={{ color: "#9BA4B4" }}>
              N
            </GamePlay.LetterContainer>
            <GamePlay.LetterContainer>G</GamePlay.LetterContainer>
          </GamePlay.LettersContainer>
          <GamePlay.AttemptResult>2C</GamePlay.AttemptResult>
        </GamePlay.AttemptWrapper>

        <GamePlay.AttemptWrapper>
          <GamePlay.AttemptNumber>1.</GamePlay.AttemptNumber>
          <GamePlay.LettersContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer style={{ color: "#9BA4B4" }}>
              N
            </GamePlay.LetterContainer>
            <GamePlay.LetterContainer>G</GamePlay.LetterContainer>
          </GamePlay.LettersContainer>
          <GamePlay.AttemptResult>2C</GamePlay.AttemptResult>
        </GamePlay.AttemptWrapper>

        <GamePlay.AttemptWrapper>
          <GamePlay.AttemptNumber>1.</GamePlay.AttemptNumber>
          <GamePlay.LettersContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer style={{ color: "#9BA4B4" }}>
              N
            </GamePlay.LetterContainer>
            <GamePlay.LetterContainer>G</GamePlay.LetterContainer>
          </GamePlay.LettersContainer>
          <GamePlay.AttemptResult>2C</GamePlay.AttemptResult>
        </GamePlay.AttemptWrapper>

        <GamePlay.AttemptWrapper>
          <GamePlay.AttemptNumber>1.</GamePlay.AttemptNumber>
          <GamePlay.LettersContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer style={{ color: "#9BA4B4" }}>
              N
            </GamePlay.LetterContainer>
            <GamePlay.LetterContainer>G</GamePlay.LetterContainer>
          </GamePlay.LettersContainer>
          <GamePlay.AttemptResult>2C</GamePlay.AttemptResult>
        </GamePlay.AttemptWrapper>

        <GamePlay.AttemptWrapper>
          <GamePlay.AttemptNumber>1.</GamePlay.AttemptNumber>
          <GamePlay.LettersContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer style={{ color: "#9BA4B4" }}>
              N
            </GamePlay.LetterContainer>
            <GamePlay.LetterContainer>G</GamePlay.LetterContainer>
          </GamePlay.LettersContainer>
          <GamePlay.AttemptResult>2C</GamePlay.AttemptResult>
        </GamePlay.AttemptWrapper>

        <GamePlay.AttemptWrapper>
          <GamePlay.AttemptNumber>1.</GamePlay.AttemptNumber>
          <GamePlay.LettersContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer style={{ color: "#9BA4B4" }}>
              N
            </GamePlay.LetterContainer>
            <GamePlay.LetterContainer>G</GamePlay.LetterContainer>
          </GamePlay.LettersContainer>
          <GamePlay.AttemptResult>2C</GamePlay.AttemptResult>
        </GamePlay.AttemptWrapper>

        <GamePlay.AttemptWrapper>
          <GamePlay.AttemptNumber>1.</GamePlay.AttemptNumber>
          <GamePlay.LettersContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer style={{ color: "#9BA4B4" }}>
              N
            </GamePlay.LetterContainer>
            <GamePlay.LetterContainer>G</GamePlay.LetterContainer>
          </GamePlay.LettersContainer>
          <GamePlay.AttemptResult>2C</GamePlay.AttemptResult>
        </GamePlay.AttemptWrapper>
        <GamePlay.AttemptWrapper>
          <GamePlay.AttemptNumber>2.</GamePlay.AttemptNumber>
          <GamePlay.LettersContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer style={{ color: "#9BA4B4" }}>
              N
            </GamePlay.LetterContainer>
            <GamePlay.LetterContainer>G</GamePlay.LetterContainer>
          </GamePlay.LettersContainer>
          <GamePlay.AttemptResult>2C</GamePlay.AttemptResult>
        </GamePlay.AttemptWrapper>

        <GamePlay.AttemptWrapper>
          <GamePlay.AttemptNumber>3.</GamePlay.AttemptNumber>
          <GamePlay.LettersContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer>K</GamePlay.LetterContainer>
            <GamePlay.LetterContainer style={{ color: "#9BA4B4" }}>
              N
            </GamePlay.LetterContainer>
            <GamePlay.LetterContainer>G</GamePlay.LetterContainer>
          </GamePlay.LettersContainer>
          <GamePlay.AttemptResult
            style={{
              color: res.includes("C")
                ? "red"
                : res.includes("B")
                ? "blue"
                : "orange",
            }}
          >
            {res}
          </GamePlay.AttemptResult>
        </GamePlay.AttemptWrapper>
      </GamePlay.AttemptsContainer>
      {/* <GamePlay.ButtonContainer>
        {isMobile ? (
          <>
            <GamePlay.Button guess>Guess Next Word</GamePlay.Button>
            <GamePlay.Button reveal>Reveal Word</GamePlay.Button>
            <GamePlay.Button quit>Quit</GamePlay.Button>
          </>
        ) : (
          <>
            <GamePlay.Button reveal>Reveal Word</GamePlay.Button>
            <GamePlay.Button guess>Guess Next Word</GamePlay.Button>
            <GamePlay.Button quit>Quit</GamePlay.Button>
          </>
        )}
      </GamePlay.ButtonContainer> */}

      <GamePlay.ButtonContainer>
        <GamePlay.Button reveal>Reveal Word</GamePlay.Button>
        <GamePlay.Button guess>Guess Next Word</GamePlay.Button>
        <GamePlay.Button quit>Quit</GamePlay.Button>
      </GamePlay.ButtonContainer>
    </GamePlay>
  );
}
