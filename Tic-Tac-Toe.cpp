#include <iostream>

using namespace std;

char board[3][3];

void initializeBoard()
{
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            board[i][j] = ' ';
        }
    }
}

void printBoard()
{
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            cout << " " << board[i][j] << " ";
            if (j < 2) cout << "|";
        }
        if (i < 2) cout << "\n" << "-----------" << endl;
    }
    cout << "\n" << endl;
}

bool emptySpace()
{
    int spaces = 9;

    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            if (board[i][j] != ' ') spaces--;
        }
    }

    if (spaces > 0) return true;
    else return false;
} 

int checkWinner()
{
    for (int i = 0; i < 3; i++)
    {
        if (board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][2] != ' ') return 1;
    }

    for (int j = 0; j < 3; j++)
    {
        if (board[0][j] == board[1][j] && board[1][j] == board[2][j] && board[2][j] != ' ') return 1;
    }

    if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[2][2] != ' ') return 1;

    if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[2][0] != ' ') return 1;

    if (emptySpace() == true) return 0;
    else return 2;
}

bool isValidMove(int x, int y)
{
    return (0 <= x && x <= 2 && 0 <= y && y <= 2 && board[x][y] == ' ');
}

void play(char player1, char player2, int turn)
{
    if (checkWinner() == 1 && turn == 2)
    {
        cout << player1 << " won!" << endl;
        exit(0);
    }
    else if (checkWinner() == 1 && turn == 1)
    {
        cout << player2 << " won!" << endl;
        exit(0);
    }
    else if (checkWinner() == 2)
    {
        cout << "It's tie!" << endl;
        exit(0);
    }

    if (turn == 1)
    {
        cout << player1 << " turn..." << endl;

        int x, y;
        cout << "Please enter the coordinate (x, y): ";
        cin >> x >> y;
        cout << "\n";
        x--, y--;

        while (!isValidMove(x, y))
        {
            cout << "Invalid coordinate!" << endl;
            cout << "Enter the coordinate correctly: ";
            cin >> x >> y;
            cout << "\n";
            x--, y--;
        }

        board[x][y] = player1;
    }
    else
    {
        cout << player2 << " turn..." << endl;

        int x, y;
        cout << "Please enter the coordinate (x, y): ";
        cin >> x >> y;
        cout << "\n";
        x--, y--;

        while (!isValidMove(x, y))
        {
            cout << "Invalid coordinate!" << endl;
            cout << "Enter the coordinate correctly: ";
            cin >> x >> y;
            cout << "\n";
            x--, y--;
        }

        board[x][y] = player2;
    }

    printBoard();
}

int main()
{
    cout << "Welcome to Tic-Tac-Toe!\n" << endl;

    char player1, player2;
    cout << "Player1 sign: ";
    cin >> player1;
    cout << "Player2 sign: ";
    cin >> player2;

    cout << endl;

    initializeBoard();
    printBoard();

    while (true)
    {
        play(player1, player2, 1);
        play(player1, player2, 2);
    }

    return 0;
}