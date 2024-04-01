#!/bin/bash
echo "====================================="
echo "THIS SHELL SCRIPT IS USED TO HELP BUILD AND CLEAN VUE PROJECT FROM Frontend-Portifolio-Docker-Gabriel-Teixeira"
echo "#1 - Build and get files"
echo "#2 - Delete old build file"
echo "#3 - Exit"
echo "====================================="

# Função para leitura da opção
read -p "Enter your choice: " choice

case $choice in
    1)
        cd front
        yarn build
        mv  ./dist ../
        cd ..
        ;;
    2)
        rm -rf ./dist
        ;;
    3)
        echo "Exiting..."
        exit 0
        ;;
    *)
        echo "Input no match: $choice"
        ;;
esac

echo "====================================="
echo "Thanks for using me, Clown"
echo "====================================="

read -p "Press Enter to exit..."
