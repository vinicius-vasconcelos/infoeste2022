# INFOESTE 2022

Repositório criado para ministrar aulas no curso de *Introdução a APIs REST com Node.js e ferramentas de testes automatizados* na Infoeste 2022.

## Descrição

Curso introdutório que visa principalmente aumentar o leque de conhecimento das pessoas participantes, trazendo assuntos relevantes que independem de ferramentas. O curso também prevê interação descontraída, educativa e interativa, promovendo o networking entre as pessoas participantes.

### Conteúdo programático

- **1° dia**:
  - Introdução ao Node.js e ao framework Express.js;
  - Primeiros passos com Node.js como: instalação de pacotes, configuração de setup inicial e práticas;
  - Início da criação da API REST;
- **2° dia**:
  - A importância de realizar testes em nossas aplicações;
  - Primeiros passos com ferramentas de testes automatizados;
  - Finalização da API REST;

---

## API

### Organização das branches

- `main`: Configurações básicas do projeto;
- `day-1`: Aplicação com servidor e rotas;
- `day-2`: Aplicação do dia 1 mais testes;

### Executando aplicação

- Escolha uma branch:
```bash
  git checkout #branchName
```

- Instale as dependências:
```bash
  npm i
```

- Suba o servidor Node.js:
```bash
  npm start
```

ou
```bash
  npm run dev
```


- Para executar os testes, use o comando:
```bash
  npm test
```

### Usando MySQL via Docker

- Criando container com imagem do MySQL:
```bash
  docker run -p 3306:3306 --name my_mysql -e MYSQL_ROOT_PASSWORD=password -d mysql:8.0.29 mysqld --default-authentication-plugin=mysql_native_password
```

- Pausando a execução do container:
```bash
  docker container stop my_mysql
```

- Iniciando a execução do container:
```bash
  docker container start my_mysql
```

- Entrando no container:
```
  docker exec -it my_mysql bash
```

---

- Ou podemos usar com docker-compose:
```bash
  docker-compose up -d
```

- Entrando no container:
```
  docker exec -it infogames_db bash
```
