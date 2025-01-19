#include <cs50.h>
#include <stdio.h>

void meow(int n); //Para o computador saber que existe uma funçao com esse nome
                  //A mesma funçao esta la em baixo
int main(void)
{
    int n = get_int("Number: ");
    meow(n);
}

void meow(int n)
{
    for ( int i = 0; i < n; i++)
    {
        printf("Meow!\n");
    }
}
