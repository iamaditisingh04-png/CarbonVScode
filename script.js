let game = {

    round: 0,

    score: 0,

    time: 30,

    timer: null,

    question: null,

    twist: null,

    shields: 1,

    doublePoints: false

};


/* =========================
   ROUND SETTINGS
========================= */

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


/* =========================
   TWISTS
========================= */

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


/* =========================
   HELPER
========================= */

function $(id) {

    return document.getElementById(id);

}


/* =========================
   RANDOM QUESTION
========================= */

function getRandomQuestion() {

    return QUESTIONS[
        Math.floor(
            Math.random() * QUESTIONS.length
        )
    ];

}


/* =========================
   RANDOM TWIST
========================= */

function getRandomTwist() {

    return twists[
        Math.floor(
            Math.random() * twists.length
        )
    ];

}


/* =========================
   START GAME
========================= */

function startGame() {

    clearInterval(game.timer);

    game.round = 1;

    game.score = 0;

    game.shields = 1;

    game.doublePoints = false;

    renderRound();

}


/* =========================
   RENDER ROUND
========================= */

function renderRound() {

    clearInterval(game.timer);

    if (game.round > rounds.length) {

        finishGame();

        return;
    }

    const round = rounds[
        game.round - 1
    ];

    game.time = round.time;

    game.question =
        getRandomQuestion();

    game.twist =
        getRandomTwist();


    $("content").innerHTML = `

        <div class="card">

            <div class="score">

                🏆 Score:
                ${game.score}

            </div>

            <p class="muted">

                Round
                ${game.round}
                /
                ${rounds.length}

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


            <div class="twist">

                ${game.twist[0]}

                <strong>
                    ${game.twist[1]}
                </strong>

            </div>


            <div class="question">

                ${game.question.q}

            </div>


            <input
                id="answerInput"
                placeholder="Type your answer..."
                autocomplete="off"
            >


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

                    🛡️ Shield
                    (${game.shields})

                </button>


                <button
                    onclick="activateDouble()"
                >

                    ✨ Double Points

                </button>

            </div>

        </div>

    `;


    $("answerInput").focus();


    game.timer =
        setInterval(
            updateTimer,
            1000
        );

}


/* =========================
   TIMER
========================= */

function updateTimer() {

    game.time--;

    const timer =
        $("timer");

    if (timer) {

        timer.textContent =
            game.time;

        if (game.time <= 10) {

            timer.classList.add(
                "danger"
            );

        }

    }


    if (game.time <= 0) {

        timeout();

    }

}


/* =========================
   DOUBLE POINTS
========================= */

function activateDouble() {

    game.doublePoints = true;

    alert(
        "✨ DOUBLE POINTS ACTIVATED!"
    );

}


/* =========================
   SHIELD
========================= */

function useShield() {

    if (game.shields <= 0) {

        alert(
            "No shields left!"
        );

        return;

    }


    game.shields--;

    clearInterval(
        game.timer
    );


    $("content").innerHTML = `

        <div class="hero">

            <div style="font-size:70px">
                🛡️
            </div>

            <h1>
                SHIELD ACTIVATED
            </h1>

            <p class="muted">

                Your team skipped
                this challenge safely.

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


/* =========================
   SUBMIT ANSWER
========================= */

function submitAnswer() {

    const input =
        $("answerInput");

    if (!input) return;


    const userAnswer =
        input.value.trim();


    if (userAnswer.length < 1) {

        return;

    }


    const correct =
        String(
            game.question.a
        ).toLowerCase();


    const given =
        userAnswer.toLowerCase();


    let correctAnswer =

        given === correct ||

        given.includes(correct) ||

        correct.includes(given);


    /* FINAL BOSS */

    if (
        game.round === 6
    ) {

        correctAnswer =
            userAnswer.length >= 30;

    }


    /* FORBIDDEN WORD */

    if (

        game.twist[2] ===
        "forbidden"

        &&

        /(ai|computer|technology)/i
        .test(userAnswer)

    ) {

        correctAnswer = false;

    }


    let bonus = 0;


    if (
        correctAnswer &&
        game.twist[2] ===
        "style"
    ) {

        bonus += 50;

    }


    if (

        game.twist[2] ===
        "speed"

        &&

        game.time < 30

    ) {

        bonus += 70;

    }


    if (

        game.twist[2] ===
        "limited"

        &&

        userAnswer
            .split(/\s+/)
            .filter(Boolean)
            .length <= 3

    ) {

        bonus += 100;

    }


    if (
        game.twist[2] ===
        "act"
    ) {

        bonus += 50;

    }


    if (
        game.twist[2] ===
        "reverse"
    ) {

        bonus += 50;

    }


    let points =
        correctAnswer
            ? 100
            : 0;


    if (
        game.doublePoints
    ) {

        points *= 2;

    }


    points += bonus;


    game.score += points;

    game.doublePoints =
        false;


    clearInterval(
        game.timer
    );


    showResult(
        correctAnswer,
        points
    );

}


/* =========================
   SHOW RESULT
========================= */

function showResult(
    correct,
    points
) {

    const answer =
        game.question.a;


    const explanation =
        game.question.explanation ||
        "This is the expected answer for this challenge.";


    if (correct) {

        $("content").innerHTML = `

            <div class="hero">

                <div style="
                    font-size:70px
                ">

                    🔥

                </div>


                <h1>
                    CORRECT!
                </h1>


                <h2>

                    +${points}
                    POINTS

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

    }

    else {

        $("content").innerHTML = `

            <div class="hero">

                <div style="
                    font-size:70px
                ">

                    💀

                </div>


                <h1>
                    NOT QUITE!
                </h1>


                <div class="answer">

                    <h3>
                        ✅ CORRECT ANSWER
                    </h3>


                    <div
                        class="answer-text"
                    >

                        ${answer}

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


/* =========================
   TIMEOUT
========================= */

function timeout() {

    clearInterval(
        game.timer
    );


    if (game.shields > 0) {

        game.shields--;


        $("content").innerHTML = `

            <div class="hero">

                <div style="
                    font-size:70px
                ">

                    🛡️

                </div>


                <h1>
                    TIME OUT!
                </h1>


                <p class="muted">

                    Your shield saved
                    the round.

                </p>


                <div class="answer">

                    <h3>
                        ✅ CORRECT ANSWER
                    </h3>


                    <div
                        class="answer-text"
                    >

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

    else {

        $("content").innerHTML = `

            <div class="hero">

                <div style="
                    font-size:70px
                ">

                    ⏰

                </div>


                <h1>
                    TIME OUT!
                </h1>


                <div class="answer">

                    <h3>
                        ✅ CORRECT ANSWER
                    </h3>


                    <div
                        class="answer-text"
                    >

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


/* =========================
   NEXT ROUND
========================= */

function nextRound() {

    clearInterval(
        game.timer
    );

    game.round++;

    renderRound();

}


/* =========================
   FINISH
========================= */

function finishGame() {

    clearInterval(
        game.timer
    );


    $("content").innerHTML = `

        <div class="hero">

            <div style="
                font-size:90px
            ">

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

                You survived
                CarbonVScode.

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


/* =========================
   START SCREEN
========================= */

$("content").innerHTML = `

    <div class="hero">

        <div style="
            font-size:90px
        ">

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