import { useEffect, useRef, useState } from "react";

function Game() {
  const [running, setRunning] = useState(false);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(
    () => Number(localStorage.getItem("ayush-best-score")) || 0
  );
  const [player, setPlayer] = useState(50);
  const [blocks, setBlocks] = useState([]);

  const keys = useRef({});
  const scoreRef = useRef(0);

  useEffect(() => {
    const keyDown = (event) => {
      keys.current[event.key.toLowerCase()] = true;
    };

    const keyUp = (event) => {
      keys.current[event.key.toLowerCase()] = false;
    };

    window.addEventListener("keydown", keyDown);
    window.addEventListener("keyup", keyUp);

    return () => {
      window.removeEventListener("keydown", keyDown);
      window.removeEventListener("keyup", keyUp);
    };
  }, []);

  useEffect(() => {
    if (!running) return;

    let animationFrame;
    let lastTime = performance.now();
    let spawnTimer = 0;

    const gameLoop = (time) => {
      const delta = Math.min((time - lastTime) / 16, 2);
      lastTime = time;

      setPlayer((current) => {
        let movement = 0;

        if (keys.current.arrowleft || keys.current.a) {
          movement -= 3 * delta;
        }

        if (keys.current.arrowright || keys.current.d) {
          movement += 3 * delta;
        }

        return Math.max(6, Math.min(94, current + movement));
      });

      spawnTimer += delta;

      if (spawnTimer >= 25) {
        spawnTimer = 0;

        setBlocks((current) => [
          ...current,
          {
            id: Date.now() + Math.random(),
            x: 5 + Math.random() * 90,
            y: -10,
          },
        ]);
      }

      setBlocks((current) =>
        current
          .map((block) => ({
            ...block,
            y: block.y + 1.4 * delta,
          }))
          .filter((block) => block.y < 110)
      );

      scoreRef.current += 0.15 * delta;
      setScore(scoreRef.current);

      animationFrame = requestAnimationFrame(gameLoop);
    };

    animationFrame = requestAnimationFrame(gameLoop);

    return () => cancelAnimationFrame(animationFrame);
  }, [running]);

  useEffect(() => {
    if (!running) return;

    const collision = blocks.some(
      (block) =>
        block.y > 82 &&
        block.y < 96 &&
        Math.abs(block.x - player) < 8
    );

    if (collision) {
      gameOver();
    }
  }, [blocks, player, running]);

  const gameOver = () => {
    setRunning(false);

    const finalScore = Math.floor(scoreRef.current);

    if (finalScore > best) {
      setBest(finalScore);
      localStorage.setItem("ayush-best-score", finalScore);
    }
  };

  const startGame = () => {
    setScore(0);
    scoreRef.current = 0;
    setPlayer(50);
    setBlocks([]);
    setRunning(true);
  };

  const moveLeft = () => {
    setPlayer((current) => Math.max(6, current - 8));
  };

  const moveRight = () => {
    setPlayer((current) => Math.min(94, current + 8));
  };

  return (
   <section className="skills section reveal" id="skills">
      <div className="section-heading">
        <span>04 / PLAYGROUND</span>

        <h2>
          Take a <i>break.</i>
        </h2>
      </div>

      <div className="game-wrapper">
        <div className="game-info">
          <span className="game-label">
            MINI GAME // DODGE THE BLOCKS
          </span>

          <h3>
            Can you beat the
            <span> high score?</span>
          </h3>

          <p>
            Move the player and avoid the falling blocks.
            The longer you survive, the faster the game becomes.
          </p>

          <div className="score-board">
            <div>
              <small>SCORE</small>
              <strong>{Math.floor(score)}</strong>
            </div>

            <div>
              <small>BEST</small>
              <strong>{best}</strong>
            </div>
          </div>

          <button
            className="primary-btn game-start"
            onClick={startGame}
          >
            {running ? "RESTART GAME" : "START GAME"} ▶
          </button>

          <div className="game-help">
            <span>← →</span>
            <span>A D</span>
            <small>Use keyboard to move</small>
          </div>
        </div>

        <div className="game-board">
          <div className="game-background"></div>

          {!running && (
            <div className="game-overlay">
              <strong>
                {score > 0 ? "GAME OVER" : "READY?"}
              </strong>

              <span>
                {score > 0
                  ? "Press start to try again"
                  : "Survive as long as possible"}
              </span>
            </div>
          )}

          {blocks.map((block) => (
            <div
              className="falling-block"
              key={block.id}
              style={{
                left: `${block.x}%`,
                top: `${block.y}%`,
              }}
            ></div>
          ))}

          <div
            className="game-player"
            style={{
              left: `${player}%`,
            }}
          >
            <span>▲</span>
          </div>

          <div className="mobile-controls">
            <button onClick={moveLeft}>←</button>
            <button onClick={moveRight}>→</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Game;