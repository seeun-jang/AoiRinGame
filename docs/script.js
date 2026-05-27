let lovePoints = 0;
let playerName = "당신";

const gameScreen = document.getElementById("game-screen");
const titleScreen = document.getElementById("title-screen");
const rin = document.getElementById("rin");
const speaker = document.getElementById("speaker");
const dialog = document.getElementById("dialog");
const choices = document.getElementById("choices");

function startGame() {
    playerName = prompt("플레이어의 이름을 입력하세요.");

    if (playerName === null || playerName.trim() === "") {
        playerName = "당신";
    }

    lovePoints = 0;

    titleScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");

    scene1Intro();
}

function setBackground(fileName) {
    gameScreen.style.backgroundImage =
        `linear-gradient(rgba(170, 180, 230, 0.18), rgba(255, 210, 235, 0.18)), url("images/${fileName}")`;
}

function setCharacter(fileName) {
    rin.src = `images/${fileName}`;
    rin.style.display = "block";
}

function setDialog(name, text) {
    speaker.innerText = name;
    dialog.innerText = text;
}

function setChoices(choiceList) {
    choices.innerHTML = "";

    choiceList.forEach(function(choice, index) {
        const button = document.createElement("button");
        button.className = "choice";
        button.innerText = `${index + 1}. ${choice.text}`;
        button.onclick = choice.action;
        choices.appendChild(button);
    });
}

function nextButton(nextFunction) {
    choices.innerHTML = "";

    const button = document.createElement("button");
    button.className = "choice";
    button.innerText = "▶ 다음으로";
    button.onclick = nextFunction;

    choices.appendChild(button);
}

/* =========================
   상황 1: 학교 복도
========================= */

function scene1Intro() {
    setBackground("1.png");
    setCharacter("AoiRin.png");

    setDialog(
        "アオイ リン ❀",
        `방과 후의 복도를 걷고 있는 ${playerName}. 맞은편에서 걸어오던 한 소녀와 마주쳤다.`
    );

    nextButton(scene1Intro2);
}

function scene1Intro2() {
    setDialog(
        "アオイ リン ❀",
        `그녀도 놀랐는지 지나치려다 손에 들고 있던 필통을 떨어뜨렸다. '아오이 린'이라는 이름이 적힌 필통이 ${playerName}의 발끝에 멈췄다.`
    );

    setChoices([
        {
            text: "필통을 주워 조심스럽게 건넨다",
            action: function() {
                lovePoints += 5;
                setCharacter("AoiRinSmile.png");
                setDialog(
                    "アオイ リン ❀",
                    "저기.. 고마워! 혹시... 이름이 뭐야?"
                );
                nextButton(scene2Intro);
            }
        },
        {
            text: "당황해서 주우려다 필통을 깔고 넘어지고 만다",
            action: function() {
                lovePoints += 0;
                setCharacter("AoiRinAngry.png");
                setDialog(
                    "アオイ リン ❀",
                    "그 필통, 내가 아끼는 거야. 빨리 일어나주면 안 되겠니?"
                );
                nextButton(scene2Intro);
            }
        },
        {
            text: "모른 척하려다 실수로 필통을 차버린다",
            action: function() {
                lovePoints -= 5;
                setCharacter("AoiRinSad.png");
                setDialog(
                    "アオイ リン ❀",
                    "너무해... 내 필통이 더러워졌잖아. 정말 무례해..."
                );
                nextButton(scene2Intro);
            }
        }
    ]);
}

/* =========================
   상황 2: 학교 교실 과제
========================= */

function scene2Intro() {
    setBackground("2.png");
    setCharacter("AoiRin.png");

    setDialog(
        "アオイ リン ❀",
        `며칠 후, ${playerName}은(는) 아오이 린과 같은 조가 되어 과제를 하게 되었다.`
    );

    nextButton(scene2Intro2);
}

function scene2Intro2() {
    setDialog(
        "アオイ リン ❀",
        "어색한 상황 속, 린이 파일 저장을 깜빡하여 자료가 날아갔다... 린은 조심스럽게 당신의 눈치를 살핀다."
    );

    setChoices([
        {
            text: "아직 시간이 남았으니 먼저 도와주겠다고 말한다",
            action: function() {
                lovePoints += 5;
                setCharacter("AoiRinSmile.png");
                setDialog(
                    "アオイ リン ❀",
                    "정말...? 너무 고마워...!!"
                );
                nextButton(scene3Intro);
            }
        },
        {
            text: "말을 걸 타이밍을 놓치고 내 할 일 하면서 지켜본다",
            action: function() {
                lovePoints += 0;
                setCharacter("AoiRin.png");
                setDialog(
                    "アオイ リン ❀",
                    "그.... 아, 아냐..!"
                );
                nextButton(scene3Intro);
            }
        },
        {
            text: "한숨과 함께 린의 실수를 크게 지적한다",
            action: function() {
                lovePoints -= 5;
                setCharacter("AoiRinSad.png");
                setDialog(
                    "アオイ リン ❀",
                    "미안해, 하지만.. 그렇게까지 말할 필요는 없잖아..."
                );
                nextButton(scene3Intro);
            }
        }
    ]);
}

/* =========================
   상황 3: 카페 제안 + 엔딩
========================= */

function scene3Intro() {
    setBackground("3.png");
    setCharacter("AoiRin.png");

    setDialog(
        "アオイ リン ❀",
        `과제가 끝난 후 교실. 가방을 챙기던 린이 머뭇거리며 ${playerName}을(를) 불러 세운다.`
    );

    nextButton(scene3Intro2);
}

function scene3Intro2() {
    setDialog(
        "アオイ リン ❀",
        `${playerName}, 혹시 시간 괜찮으면 같이 카페에 가지 않을래...?`
    );

    setChoices([
        {
            text: "웃으며 좋다고 대답한다",
            action: function() {
                lovePoints += 5;
                setCharacter("AoiRinSmile.png");
                showHappyEnding();
            }
        },
        {
            text: "조금 피곤하지만 함께 가겠다고 한다",
            action: function() {
                setCharacter("AoiRin.png");
                lovePoints += 2;
                showNormalEnding();
            }
        },
        {
            text: "귀찮다며 짧게 거절한다",
            action: function() {
                setCharacter("AoiRinSad.png");
                lovePoints -= 5;
                showBadEnding();
            }
        }
    ]);
}

/* =========================
   엔딩 3개
========================= */

function showHappyEnding() {
    showEndingScene(
        "AoiRinDate1.png",
        `${playerName}... 너랑 있으면 편하고 즐거워. 다음에도 같이 있고 싶어.`,
        "해피 엔딩 - 봄의 약속"
    );
}

function showNormalEnding() {
    showEndingScene(
        "AoiRinDate2.png",
        "오늘 나쁘진 않았어. 다음엔 조금 더 잘해봐.",
        "노멀 엔딩 - 아직 남은 가능성"
    );
}

function showBadEnding() {
    showEndingScene(
        "AoiRinDate3.png",
        `${playerName}, 미안해. 우리 성격이 잘 맞지는 않는 것 같아.`,
        "배드 엔딩 - 멀어진 마음"
    );
}

function showEndingScene(characterImage, endingText, endingTitle) {
    setBackground("4.png");

    rin.src = `images/${characterImage}`;
    rin.style.display = "block";
    rin.style.height = "68vh";
    rin.style.maxHeight = "620px";
    rin.style.left = "68%";
    rin.style.bottom = "150px";
    rin.style.transform = "translateX(-50%)";
    rin.style.zIndex = "4";

    setDialog(
        "アオイ リン ❀",
        endingText
    );

    setChoices([
        {
            text: endingTitle,
            action: restartGame
        }
    ]);
}

function restartGame() {
    lovePoints = 0;

    rin.src = "images/AoiRin.png";
    rin.style.display = "block";
    rin.style.height = "";
    rin.style.maxHeight = "";
    rin.style.left = "";
    rin.style.bottom = "";
    rin.style.transform = "";
    rin.style.zIndex = "";

    gameScreen.classList.add("hidden");
    titleScreen.classList.remove("hidden");
}
