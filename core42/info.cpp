#include <iostream>
#include <fstream>
#include <cstdlib>

void ft_putstr_fd(const char* s, std::ostream& os)
{
    os << s;
}

int main(int argc, char* argv[]) 
{
    const char* filename = "info.txt";

    std::ofstream file(filename, std::ios::out | std::ios::app);

    if (!file.is_open()) 
    {
        perror("Error opening the file");
        return 1;
    }
    else 
    {
        ft_putstr_fd(argv[1], file);
        ft_putstr_fd(" went in your server\n", file);
        ft_putstr_fd("\n", file);
    }
    file.close();
    return 0;
}
