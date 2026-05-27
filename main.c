#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>

void clearScreen(void) {
    system("cls");
}

void printLine(void) {
    printf("-----------------------------------------------------------\n");
}

void showReaction(const char expression[], int point) { // const -- 수정하면 안 되는 문자열
    printf("- 표정 [%s] ", expression);

    if (point > 0) {
        printf("+%d Love Points\n", point);
    }
    else {
        printf("%d Love Points\n", point);
    }
}

void showEnding(int LovePoints) {
    printLine();
    printf("게임이 끝났습니다. 최종 Love Points: %d\n\n", LovePoints);

    if (LovePoints >= 10) {
        printf("[해피 엔딩]\n");
        printf("아오이 린: 너랑 있으면 편하고 즐거워. 다음에도 같이 있고 싶어.\n");
        printf("=> 두 사람은 서로에게 좋은 감정을 느끼며 다음 만남을 약속합니다.\n");
    }
    else if (LovePoints >= 3) {
        printf("[노멀 엔딩]\n");
        printf("아오이 린: 오늘 나쁘진 않았어. 다음엔 조금 더 잘해봐.\n");
        printf("=> 큰 설렘은 없었지만, 아직 가능성은 남아 있습니다.\n");
    }
    else {
        printf("[배드 엔딩]\n");
        printf("아오이 린: 미안해. 우리 성격이 잘 맞지는 않는 것 같아.\n");
        printf("=> 아오이 린과의 관계는 더 이상 이어지지 않았습니다.\n");
    }

    printLine();
}

int main(void) {
    char username[10];
    int LovePoints = 0;
    int choice;
    char replay;

    while (1) {
        LovePoints = 0;

        printf("=======================================\n");
        printf("♥미소녀 연애 시뮬레이션: 아오이 린♥\n");
        printf("=======================================\n");
        printf("플레이어의 이름: ");
        scanf("%s", username);

        clearScreen();

        printf("[상황 1] 아오이 린과의 첫 만남\n\n");

        printf("방과 후의 복도를 걷고 있는 %s, 맞은 편에서 걸어오던 한 소녀를 마주치고 고개를 떨어뜨렸다...\n", username);
        printf("\n");
        printf("그녀도 놀랐는지 지나치려다 손에 들고 있던 필통이 떨어졌다..!\n");
        printf("\n");
        printf("'아오이 린' 이라는 이름이 적힌 필통 하나가 또르르 굴러와 %s의 발끝에 멈췄다.\n\n", username);

        printf("1. 필통을 주워 조심스럽게 건넨다.\n");
        printf("2. 당황해서 주우려다 필통을 깔고 넘어지고 만다.\n");
        printf("3. 모른 척하려다 실수로 필통을 차버린다.\n\n");

        printf("%s의 선택은 ? (1 - 3) : ", username);
        scanf("%d", &choice);

        clearScreen();

        if (choice == 1) {
            showReaction("미소", 5);
            LovePoints += 5;
            printf("아오이 린: 저기.. 고마워! 혹시...이름이 뭐야?\n");
        }
        else if (choice == 2) {
            showReaction("화남", 0);
            printf("아오이 린: 그 필통, 내가 아끼는 거야. 빨리 일어나주면 안 되겠니? \n");
        }
        else if (choice == 3) {
            showReaction("울음", -5);
            LovePoints -= 5;
            printf("아오이 린: 너무해... 내 필통이 더러워졌잖아. 정말 무례해...\n");
        }
        else {
            showReaction("당황", -3);
            LovePoints -= 3;
            printf("아오이 린은 당신을 이상하게 쳐다본 후 필통을 빠르게 주워 지나갑니다.\n");
        }

        printLine();

        printf("\n[상황 2] 함께 과제하기\n\n");
        printf("며칠 후, %s은(는) 아오이 린과 같은 조가 되어 과제를 하게 되었다.\n", username);
        printf("어색한 상황 속, 린이 파일 저장을 깜빡하여 자료가 날아갔다...\n당신의 눈치를 살피는 린...\n\n");

        printf("1. 아직 시간이 남았으니 먼저 도와주겠다고 말한다.\n");
        printf("2. 말을 걸 타이밍을 놓치고 내 할 일 하면서 지켜본다.\n");
        printf("3. 한숨과 함께 린의 실수를 크게 지적한다.\n\n");

        printf("당신의 선택은? (1-3): ");
        scanf("%d", &choice);

        clearScreen();

        if (choice == 1) {
            showReaction("고마움", 5);
            LovePoints += 5;
            printf("아오이 린: 정말...? 너무 고마워...!!\n");
        }
        else if (choice == 2) {
            showReaction("무표정", 0);
            printf("아오이 린: 그.... 아, 아냐..!\n");
        }
        else if (choice == 3) {
            showReaction("상처", -5);
            LovePoints -= 5;
            printf("아오이 린: 미안해, 하지만..그렇게까지 말할 필요는 없잖아...\n");
        }
        else {
            showReaction("당황", -3);
            LovePoints -= 3;
            printf("아오이 린은 당신의 반응을 이해하지 못합니다.\n");
        }

        printLine();

        printf("\n[상황 3] 과제가 끝난 후 교실\n\n");
        printf("가방을 챙기던 린이 머뭇거리며 당신을 불러 세운다.\n");
        printf("아오이 린: %s, 혹시 시간 괜찮으면 같이 카페에 가지 않을래...?\n\n", username);

        printf("1. 웃으며 좋다고 대답한다.\n");
        printf("2. 조금 피곤하지만 함께 가겠다고 한다.\n");
        printf("3. 귀찮다며 짧게 거절한다.\n\n");

        printf("당신의 선택은? (1-3): ");
        scanf("%d", &choice);

        clearScreen();

        if (choice == 1) {
            showReaction("설렘", 5);
            LovePoints += 5;
            printf("아오이 린: 너랑 꼭 같이 가보고 싶었거든. 거기 파르페가 엄청 맛있어! 내가 사줄게.\n");
        }
        else if (choice == 2) {
            showReaction("미소", 2);
            LovePoints += 2;
            printf("아오이 린: 무리하지 않아도 되는데... 그래도 고마워.\n");
        }
        else if (choice == 3) {
            showReaction("실망", -5);
            LovePoints -= 5;
            printf("아오이 린: 그렇구나... 알겠어.\n");
        }
        else {
            showReaction("당황", -3);
            LovePoints -= 3;
            printf("아오이 린은 어색하게 웃고 자리를 떠납니다.\n");
        }

        printf("\n");
        showEnding(LovePoints);

        printf("\n게임을 다시 플레이하시겠습니까? (y/n): ");
        scanf(" %c", &replay);

        if (replay == 'y' || replay == 'Y') {
            clearScreen();
            continue;
        }
        else {
            clearScreen();
            printf("게임을 종료합니다. 감사합니다!\n");
            break;
        }
    }

    return 0;
}