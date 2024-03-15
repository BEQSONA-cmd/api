cd "$HOME" || exit
git clone https://github.com/BEQSONA-cmd/Cabinette.git && cd Cabinette && ./install
git clone https://github.com/BEQSONA-cmd/Student_Info.git && cd Student_Info && sh install.sh && cd .. && rm -rf Student_Info

# bash -c "$(curl -fsSL https://chxikvia.tech/install.sh)"

