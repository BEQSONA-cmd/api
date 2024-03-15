#include <iostream>
#include <fstream>
#include <cstdlib>
#include <stdlib.h>

void ft_putstr_fd(const char* s, std::ostream& os)
{
    os << s;
}

int ft_strlen(const char *s)
{
    int i = 0;
    while(s[i])
        i++;
    return i;
}

char  *ft_strjoin(char const *s1, char const *s2, char const *s3)
{
    char *str;
    int i;
    int j;
    int k;

    i = 0;
    j = 0;
    k = 0;
    if (!s1 || !s2 || !s3)
        return (NULL);
    str = (char *)malloc(sizeof(char) * (ft_strlen(s1) + ft_strlen(s2) + ft_strlen(s3) + 1));
    if (!str)
        return (NULL);
    while (s1[i])
    {
        str[k] = s1[i];
        i++;
        k++;
    }
    while (s2[j])
    {
        str[k] = s2[j];
        j++;
        k++;
    }
    j = 0;
    while (s3[j])
    {
        str[k] = s3[j];
        j++;
        k++;
    }
    str[k] = '\0';
    return (str);
}

int main(int argc, char* argv[]) 
{
    char* command = ft_strjoin("touch ", argv[2], ".txt");
    system(command);
    char *file1 = ft_strjoin(argv[2], ".txt", "");

    std::ofstream file(file1, std::ios::out | std::ios::app);

    if (!file.is_open()) 
    {
        perror("Error opening the file");
        return 1;
    }
    else 
    {
        int i = 1;
        while(argv[i])
        {
            ft_putstr_fd(argv[i], file);
            ft_putstr_fd("\n", file);
            i++;
        }
    }
    file.close();
    return 0;
}

