🎬 API - Catálogo de Filmes e Atores

📖 Sobre o Projeto

Este é um projeto de API RESTful desenvolvido para a disciplina de Desenvolvimento de Sistemas Web, com o objetivo de gerenciar um catálogo de filmes e seus respectivos atores. O sistema implementa funcionalidades completas de CRUD, autenticação de usuários e upload de arquivos, seguindo as melhores práticas de desenvolvimento de software.

A arquitetura do projeto é modular, com separação de responsabilidades em diferentes camadas (Controllers, Services, Repositories), garantindo um código limpo, organizado e de fácil manutenção.

✨ Funcionalidades Principais
Autenticação de Usuários

Sistema completo de registro e login com autenticação via JWT (JSON Web Token).

Senhas criptografadas com bcryptjs.

Proteção de rotas: apenas usuários autenticados podem acessar os recursos principais.

Sistema de recuperação de senha (lógica implementada no back-end).

Gerenciamento de Filmes

CRUD completo (Criar, Ler, Atualizar, Deletar) para a entidade Filme.

Gerenciamento de Atores

CRUD completo para a entidade Ator.

Relacionamento 1:N com Filmes (um filme pode ter vários atores).

Upload de Avatar

Upload de imagens para o avatar dos atores usando Multer.

Os avatares antigos são removidos automaticamente, otimizando o uso de espaço em disco.

Validação de Dados

Validação robusta com Celebrate e Joi em todas as rotas, garantindo a integridade dos dados recebidos.

🛠️ Tecnologias Utilizadas

Node.js — Ambiente de execução JavaScript

TypeScript — Tipagem estática para JavaScript

Express — Framework para criação da API

PostgreSQL — Banco de dados relacional

TypeORM — Mapeamento objeto-relacional (ORM)

Bibliotecas e Ferramentas

jsonwebtoken — Geração e validação de tokens JWT

bcryptjs — Criptografia de senhas

Multer — Upload e gerenciamento de arquivos

Celebrate e Joi — Validação de dados das requisições

ts-node-dev — Reinicialização automática durante o desenvolvimento

tsconfig-paths — Suporte a aliases de importação

CORS — Permissão de acesso para diferentes origens (ex: front-end)
