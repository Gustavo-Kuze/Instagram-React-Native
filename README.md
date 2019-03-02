## Como clonar este repo
*Aviso*: Você precisa do git instalado em sua maquina

Para clonar, siga os passos a seguir:
1. Clique no botão "Clone or download" e copie a URL que aparecer ali;
2. Abra a pasta onde deseja copiar o projeto, clique com o botão direito e abra um git bash;
3. Digite os comandos:
```
git clone [url copiada] {DÊ ENTER}
git checkout componente-post
```
4. Entre na pasta do Lambe utilizando o comando "cd" no bash, ou feche a janela e abra um novo Git bash lá dentro;
5. Digite o comando:
```
npm i
```
6. Rode o projeto:
```
react-native run-android
```

## Meu ambiente atual
- *SO*: Windows 10 Pro 1809 (compilação 17763.316)
- Emulador/Aparelho: Estou rodando o projeto em um aparelho J5 Prime, com Android Oreo;

___
Se eu te ajudei de alguma forma, me segue aí no Github!

Qualquer dúvida estou à disposição!

### Algumas notas extras
Para evitar que um erro de "caractere não reconhecido" acontecesse, eu alterei o arquivo settings.gradle do projeto android, e adicionei uma barra invertida ("\") extra às strings. Talvez isso não seja necessário para que o projeto funcione devidamente para você.
