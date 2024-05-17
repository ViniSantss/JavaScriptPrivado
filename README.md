# Instalação do projeto

1. Instalar o Composer:
 ```bash
    composer install
 ```

2. baixe ou clone o repositório

3. Entre na pasta

    
4. Configure sua conexão com banco de dados no arquivo .env:
   ```bash
    DB_CONNECTION=mysql
            DB_HOST=127.0.0.1
            DB_PORT=3306
            DB_DATABASE= "NOME_DO_BANCO_DE_DADOS"
            DB_USERNAME=root
            DB_PASSWORD= "SENHA_DO_BANCO_DE_DADOS" 
    ```

5. Inicie as migration com o comando:

    ```bash
    php artisan migrate
    ```

6. Inicie o servidor:

    ```bash
    php artisan serve
    ```
## Funcionalidades

1. Cadastro e login com validação

2. Tela inicial, Tela do Provedor e Tela do Administrador

3. Tabela com dados de todos os Provedores(Exclusivo do Administrador)

4. Criação de Planos

5. Relacionamento de DataBase

6. Tabela com seus Planos criado
