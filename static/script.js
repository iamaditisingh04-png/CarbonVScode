/* =========================================================
   CARBONVSCODE
   MCQ GAME ENGINE
========================================================= */


/* =========================================================
   GAME STATE
========================================================= */

let game = {
    round: 0,
    score: 0,
    time: 30,
    timer: null,
    question: null,
    twist: null,
    selectedOption: null,
    shields: 1,
    doublePoints: false
};

/* =========================================================
   ROUND SETTINGS
========================================================= */

const rounds = [
    {
        name: "Question Rush",
        time: 30
    },
    {
        name: "Twist Attack",
        time: 30
    },
    {
        name: "Chaos Round",
        time: 35
    },
    {
        name: "AI Battle",
        time: 45
    },
    {
        name: "Risk Round",
        time: 25
    },
    {
        name: "FINAL BOSS",
        time: 60
    }
];


/* =========================================================
   TWISTS
========================================================= */

const twists = [
    ["🤖", "Robot Mode", "style"],
    ["🎬", "Movie Trailer Mode", "style"],
    ["📺", "Breaking News Mode", "style"],
    ["🧑‍🏫", "Professor Mode", "style"],
    ["🛍️", "Salesperson Mode", "style"],
    ["😂", "Meme Mode", "style"],
    ["🚫", "Forbidden Words", "forbidden"],
    ["🎭", "Act It Out", "act"],
    ["⚡", "Speed Mode", "speed"],
    ["🐌", "Slow Mode", "slow"],
    ["💀", "Drama Mode", "style"],
    ["🕵️", "Detective Mode", "style"],
    ["🔄", "Reverse Mode", "reverse"],
    ["3️⃣", "Three Words", "limited"],
    ["🙅", "No Gestures", "style"],
    ["🫁", "One Breath", "style"]
];


/* =========================================================
   HELPER
========================================================= */

function $(id) {
    return document.getElementById(id);
}


/* =========================================================
   RANDOM QUESTION
========================================================= */

function getRandomQuestion() {

    if (!QUESTIONS || QUESTIONS.length === 0) {
        console.error("QUESTIONS array is empty or missing.");
        return null;
    }

    return QUESTIONS[
        Math.floor(Math.random() * QUESTIONS.length)
    ];
}


/* =========================================================
   RANDOM TWIST
========================================================= */

function getRandomTwist() {

    return twists[
        Math.floor(Math.random() * twists.length)
    ];
}


/* =========================================================
   START GAME
========================================================= */

function startGame() {

    clearInterval(game.timer);

    game.round = 1;
    game.score = 0;
    game.shields = 1;
    game.doublePoints = false;
    game.selectedOption = null;

    renderRound();
    saveGameState();
}

/* =========================================================
   SAVE / RESTORE GAME STATE
========================================================= */

function saveGameState() {

    localStorage.setItem(
        "carbonVScodeGame",
        JSON.stringify(game)
    );

}


function loadGameState() {

    const saved =
        localStorage.getItem("carbonVScodeGame");

    if (!saved) {
        return false;
    }

    try {

        const savedGame =
            JSON.parse(saved);

        game = savedGame;

        return true;

    } catch (error) {

        console.error(
            "Could not restore game:",
            error
        );

        localStorage.removeItem(
            "carbonVScodeGame"
        );

        return false;
    }
}


function clearGameState() {

    localStorage.removeItem(
        "carbonVScodeGame"
    );

}


/* =========================================================
   RENDER ROUND
========================================================= */

function renderRound() {

    clearInterval(game.timer);

    if (game.round > rounds.length) {
        finishGame();
        return;
    }

    const round = rounds[game.round - 1];

    game.time = round.time;
    game.question = getRandomQuestion();
    game.twist = getRandomTwist();
    game.selectedOption = null;

    if (!game.question) {
        $("content").innerHTML = `
            <div class="hero">
                <h1>ERROR 😭</h1>
                <p class="muted">
                    Questions could not be loaded.
                </p>
            </div>
        `;
        return;
    }


    /* -----------------------------------------------------
       CREATE MCQ OPTIONS
    ----------------------------------------------------- */

    const optionLetters = ["A", "B", "C", "D"];

    const optionsHTML = game.question.options
        .map((option, index) => {

            return `
                <button
                    class="option-btn"
                    id="option-${index}"
                    onclick="selectOption(${index})"
                    saveGameState();
                >
                    <span class="option-letter">
                        ${optionLetters[index]}
                    </span>

                    <span class="option-text">
                        ${option}
                    </span>
                </button>
            `;

        })
        .join("");


    /* -----------------------------------------------------
       GAME SCREEN
    ----------------------------------------------------- */

    $("content").innerHTML = `

        <div class="card">

            <div class="score">
                🏆 Score: ${game.score}
            </div>

            <p class="muted">
                Round ${game.round} / ${rounds.length}
            </p>

            <h2 class="round-title">
                ${round.name}
            </h2>

            <div
                class="timer"
                id="timer"
            >
                ${game.time}
            </div>


            <!-- TWIST -->

            <div class="twist">

                ${game.twist[0]}

                <strong>
                    ${game.twist[1]}
                </strong>

            </div>


            <!-- QUESTION -->

            <div class="question">

                ${game.question.q}

            </div>


            <!-- MCQ OPTIONS -->

            <div class="options-container">

                ${optionsHTML}

            </div>


            <!-- ACTIONS -->

            <div class="actions">

                <button
                    class="primary"
                    onclick="submitAnswer()"
                >
                    SUBMIT 🚀
                </button>

                <button
                    onclick="useShield()"
                >
                    🛡️ Shield (${game.shields})
                </button>

                <button
                    onclick="activateDouble()"
                    saveGameState();
                >
                    ✨ Double Points
                </button>

            </div>

        </div>

    `;


    /* -----------------------------------------------------
       START TIMER
    ----------------------------------------------------- */

    game.timer = setInterval(
        updateTimer,
        1000
    
    );
    saveGameState();
}


/* =========================================================
   SELECT MCQ OPTION
========================================================= */

function selectOption(index) {

    game.selectedOption = index;


    /* Remove selection from every option */

    document
        .querySelectorAll(".option-btn")
        .forEach(button => {

            button.classList.remove("selected");

        });


    /* Highlight selected option */

    const selected = $(`option-${index}`);

    if (selected) {
        selected.classList.add("selected");
    }
}


/* =========================================================
   TIMER
========================================================= */

function updateTimer() {

    game.time--;

    const timer = $("timer");

    if (timer) {

        timer.textContent = game.time;


        if (game.time <= 10) {

            timer.classList.add("danger");

        }

    }


    if (game.time <= 0) {

        clearInterval(game.timer);

        timeout();

    }
}


/* =========================================================
   DOUBLE POINTS
========================================================= */

function activateDouble() {

    if (game.doublePoints) {

        alert(
            "✨ Double Points are already active!"
        );

        return;
    }


    game.doublePoints = true;


    alert(
        "✨ DOUBLE POINTS ACTIVATED!"
    );
}


/* =========================================================
   SHIELD
========================================================= */

function useShield() {

saveGameState();
    if (game.shields <= 0) {

        alert(
            "🛡️ No shields left!"
        );

        return;
    }


    game.shields--;

    clearInterval(game.timer);


    $("content").innerHTML = `

        <div class="hero">

            <div style="font-size:70px">
                🛡️
            </div>

            <h1>
                SHIELD ACTIVATED
            </h1>

            <p class="muted">
                Your team skipped this challenge safely.
            </p>

            <p>
                Shields remaining:
                <strong>${game.shields}</strong>
            </p>

            <button
                class="primary"
                onclick="nextRound()"
            >
                CONTINUE →
            </button>

        </div>

    `;
}


/* =========================================================
   SUBMIT ANSWER
========================================================= */

function submitAnswer() {

    /* No option selected */

    if (game.selectedOption === null) {

        alert(
            "Bro 😭 select an option first!"
        );

        return;
    }


    clearInterval(game.timer);


    /* Get selected answer */

    const userAnswer =
        game.question.options[
            game.selectedOption
        ];


    /* Correct answer from questions.js */

    const correctAnswer =
        String(game.question.a).trim();


    /* Compare */

    const correct =
        userAnswer.trim().toLowerCase()
        ===
        correctAnswer.toLowerCase();


    /* -----------------------------------------------------
       BONUS POINTS
    ----------------------------------------------------- */

    let bonus = 0;


    /* Style twists */

    if (
        correct &&
        game.twist[2] === "style"
    ) {

        bonus += 50;

    }


    /* Speed Mode */

    if (
        correct &&
        game.twist[2] === "speed" &&
        game.time >= 20
    ) {

        bonus += 70;

    }


    /* Three Words */

    if (
        correct &&
        game.twist[2] === "limited"
    ) {

        bonus += 100;

    }


    /* Act It Out */

    if (
        correct &&
        game.twist[2] === "act"
    ) {

        bonus += 50;

    }


    /* Reverse Mode */

    if (
        correct &&
        game.twist[2] === "reverse"
    ) {

        bonus += 50;

    }


    /* -----------------------------------------------------
       BASE POINTS
    ----------------------------------------------------- */

    let points = correct
        ? 100
        : 0;


    /* Double points */

    if (game.doublePoints) {

        points *= 2;

    }


    points += bonus;


    /* Add score */

    game.score += points;


    /* Reset double points */

    game.doublePoints = false;


    /* Show result */

    showResult(
        correct,
        points
    );
}


/* =========================================================
   SHOW RESULT
========================================================= */
    
function showResult(correct, points) {

    const correctAnswer = game.question.a;

    const selectedAnswer =
        game.question.options[game.selectedOption];

    const explanation =
        game.question.explanation ||
        "This is the expected answer.";


    if (correct) {

        $("content").innerHTML = `

            <div class="hero">

                <div style="font-size:70px">
                    🔥
                </div>

                <h1>
                    CORRECT!
                </h1>

                <h2>
                    +${points} POINTS
                </h2>

                <p class="muted">
                    ${explanation}
                </p>

                <button
                    class="primary"
                    onclick="nextRound()"
                >
                    CONTINUE →
                </button>

            </div>

        `;

    } else {

        $("content").innerHTML = `

            <div class="hero">

                <div style="font-size:70px">
                    ❌
                </div>

                <h1>
                    WRONG ANSWER
                </h1>

                <div class="answer">

                    <h3>
                        YOUR ANSWER
                    </h3>

                    <div class="answer-text">
                        ${selectedAnswer}
                    </div>

                    <h3>
                        ✅ CORRECT ANSWER
                    </h3>

                    <div class="answer-text">
                        ${correctAnswer}
                    </div>

                    <p class="muted">
                        ${explanation}
                    </p>

                </div>

                <button
                    class="primary"
                    onclick="nextRound()"
                >
                    CONTINUE →
                </button>

            </div>

        `;
    }
}

/* =========================================================
   TIMEOUT
========================================================= */

function timeout() {

    clearInterval(game.timer);


    /* Shield automatically saves the round */

    if (game.shields > 0) {

        game.shields--;


        $("content").innerHTML = `

            <div class="hero">

                <div style="font-size:70px">
                    🛡️
                </div>

                <h1>
                    TIME OUT!
                </h1>

                <p class="muted">
                    Your shield saved the round.
                </p>

                <div class="answer">

                    <h3>
                        ✅ CORRECT ANSWER
                    </h3>

                    <div class="answer-text">
                        ${game.question.a}
                    </div>

                    <p class="muted">
                        ${
                            game.question.explanation ||
                            "This is the expected answer."
                        }
                    </p>

                </div>

                <button
                    class="primary"
                    onclick="nextRound()"
                >
                    CONTINUE →
                </button>

            </div>

        `;

    }


    /* No shield */

    else {

        $("content").innerHTML = `

            <div class="hero">

                <div style="font-size:70px">
                    ⏰
                </div>

                <h1>
                    TIME OUT!
                </h1>

                <div class="answer">

                    <h3>
                        ✅ CORRECT ANSWER
                    </h3>

                    <div class="answer-text">
                        ${game.question.a}
                    </div>

                    <p class="muted">
                        ${
                            game.question.explanation ||
                            "This is the expected answer."
                        }
                    </p>

                </div>

                <button
                    class="primary"
                    onclick="nextRound()"
                >
                    CONTINUE →
                </button>

            </div>

        `;

    }
}


/* =========================================================
   NEXT ROUND
========================================================= */

function nextRound() {

    clearInterval(game.timer);

    game.round++;

    renderRound();
    saveGameState();
}


/* =========================================================
   FINISH GAME
========================================================= */

function finishGame() {

    clearInterval(game.timer);


    $("content").innerHTML = `

        <div class="hero">

            <div style="font-size:90px">
                🏆
            </div>

            <h1>
                ARENA COMPLETE!
            </h1>

            <h2>
                FINAL SCORE:
                ${game.score}
            </h2>

            <p class="muted">
                You survived CarbonVScode.
            </p>

            <button
                class="primary"
                onclick="startGame()"
            >
                PLAY AGAIN 🚀
            </button>

        </div>

    `;
}


/* =========================================================
   START SCREEN
========================================================= */

if ($("content")) {

    $("content").innerHTML = `

        <div class="hero">

            <div style="font-size:90px">
                ⚡
            </div>

            <h1>
                CarbonVScode
            </h1>

            <p class="muted">
                COMPETE • CREATE • THINK • CHAOS
            </p>

            <div class="card">

                <h2>
                    READY?
                </h2>

                <p class="muted">
                    600 challenges.
                    Random twists.
                    Time pressure.
                    Risk.
                    Chaos.
                </p>

                <button
                    class="primary"
                    onclick="startGame()"
                >
                    ENTER THE ARENA 🚀
                </button>

            </div>

        </div>

    `;

}
function showStartScreen() {

    $("content").innerHTML = `

        <div class="hero">

            <div style="font-size:90px">
                ⚡
            </div>

            <h1>
                CarbonVScode
            </h1>

            <p class="muted">
                COMPETE • CREATE • THINK • CHAOS
            </p>

            <div class="card">

                <h2>
                    READY?
                </h2>

                <p class="muted">
                    600 challenges.
                    Random twists.
                    Time pressure.
                    Risk.
                    Chaos.
                </p>

                <button
                    class="primary"
                    onclick="startGame()"
                >
                    ENTER THE ARENA 🚀
                </button>

            </div>

        </div>

    `;
}
const hasSavedGame = loadGameState();

if (hasSavedGame && game.round > 0 && game.round <= rounds.length) {

    $("content").innerHTML = `

        <div class="hero">

            <div style="font-size:80px">
                🔄
            </div>

            <h1>
                WELCOME BACK!
            </h1>

            <p class="muted">
                Your previous game was saved.
            </p>

            <h2>
                Round ${game.round}
            </h2>

            <h3>
                Score: ${game.score}
            </h3>

            <div class="actions">

                <button
                    class="primary"
                    onclick="resumeGame()"
                >
                    RESUME GAME 🚀
                </button>

                <button
                    onclick="startNewGame()"
                >
                    START NEW GAME
                </button>

            </div>

        </div>

    `;

} else {

    showStartScreen();

}
function resumeGame() {

    renderRound();

}
function startNewGame() {

    clearGameState();

    startGame();

}
