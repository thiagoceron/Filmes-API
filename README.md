API - Catálogo de Filmes e Atores

📖 Sobre o Projeto

Esta é uma API RESTful desenvolvida como projeto para a disciplina de Desenvolvimento de Sistemas Web. O objetivo é gerenciar um catálogo de filmes e seus respectivos atores, implementando funcionalidades completas de CRUD, autenticação de usuários e upload de arquivos, seguindo as melhores práticas de desenvolvimento de software.

A arquitetura do projeto é modular, separando as responsabilidades em diferentes camadas (Controllers, Services, Repositories) para garantir um código limpo, organizado e de fácil manutenção.

✨ Funcionalidades Principais

Autenticação de Usuários: Sistema completo de registro e login com sessões seguras utilizando tokens JWT (JSON Web Token).

Segurança:

Senhas criptografadas no banco de dados com 

bcryptjs.

Proteção de rotas, onde apenas usuários autenticados podem acessar os recursos principais.

Sistema de recuperação de senha (lógica implementada no back-end).

Gerenciamento de Filmes: CRUD completo (Criar, Ler, Atualizar, Deletar) para a entidade de Filmes.

Gerenciamento de Atores: CRUD completo para a entidade de Atores, com um relacionamento 1 para N com Filmes (um filme pode ter vários atores).


Upload de Avatar: Funcionalidade de upload de imagens para o avatar dos atores, utilizando Multer para o gerenciamento de arquivos. Os avatares antigos são removidos para otimizar o espaço em disco.



Validação de Dados: Validação robusta dos dados de entrada em todas as rotas utilizando Celebrate e Joi para garantir a integridade dos dados.

🛠️ Tecnologias Utilizadas
O back-end foi construído com as seguintes tecnologias:

Node.js

TypeScript

Express - Framework para a criação da API.

PostgreSQL - Banco de dados relacional.

TypeORM - ORM (Object-Relational Mapper) para a comunicação com o banco de dados.


jsonwebtoken - Para geração e validação de tokens de autenticação.


bcryptjs - Para a criptografia de senhas.


Multer - Middleware para o upload de arquivos.


Celebrate & Joi - Para a validação de dados das requisições.

ts-node-dev - Para o desenvolvimento com reinicialização automática.

tsconfig-paths - Para o uso de atalhos (aliases) nos caminhos de importação.

CORS - Para permitir o acesso de diferentes origens (front-end).
