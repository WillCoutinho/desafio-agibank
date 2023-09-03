## Desafio AgiBank

Dois cenários do desafio AgiBank de automação web. Site utilizado: [Blog AgiBank](https://blogdoagi.com.br/)

##

### Requisitos - Windows 10

Instalar última versão do [**NodeJS**](https://nodejs.org/en/download/)

> **_Nota_**: Marcar opção `Add to PATH` durante a instalação

Instalar última versão do [**GIT**](https://git-scm.com/download/win) para clonar o repositório

##

### Clonar Repositório e Instalação dos Pacotes

Em seu terminal (em modo Admin), rode o comando abaixo para clonar e instalar todas as dependências

```bash
git clone https://github.com/WillCoutinho/desafio-agibank.git && cd desafio-agibank && npm i
```

Para rodar todos os cenários nos browsers disponíveis, use o comando: `npm run test-all-browsers`  
Ou utilize o comando `npx playwright test --project=nome_browser` para rodar os testes em um browser específico ("chrome", "edge" ou "webkit")

Caso queira passar parâmetros no comando, basta utilizar `--` e depois o comando desejado (ver [Playwright Command-Line](https://playwright.dev/docs/running-tests#command-line)).  
Exemplo: `npm run test-chrome -- --headed`

E para olhar o relatório dos testes basta usar o comando `npm run report`

##

#### Repositório

GitHub: [_Desafio AgiBank_](https://github.com/WillCoutinho/desafio-agibank)

##

#### Pacotes

- [Playwright](https://playwright.dev/docs/library) - Framework de Automação Web
- [Prettier](https://www.npmjs.com/package/prettier) - Code formatter
