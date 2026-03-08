
# Documento de Requisitos – Cadastro de Usuário

## 1. Objetivo

O objetivo do módulo de cadastro é permitir que novos usuários criem uma conta no sistema, garantindo acesso à criação e gerenciamento de conteúdos e coleções.

---

## 2. Funcionalidades

### 2.1 Criação de Conta

* O usuário deve fornecer os seguintes dados obrigatórios:

  * **Nome completo**
  * **Email** (único no sistema)
  * **Senha**
* Campos opcionais:

  * Foto de perfil
  * Biografia curta

### 2.2 Validações

* **Email:** deve ser único e em formato válido (ex.: `usuario@dominio.com`).
* **Senha:** mínimo de 8 caracteres, incluindo pelo menos uma letra maiúscula, uma minúscula e um número.
* **Nome:** não pode estar vazio.

### 2.3 Feedback ao Usuário

* Mensagem de erro em caso de email já cadastrado.
* Mensagem de sucesso após cadastro concluído.
* Sugestão de login imediato após cadastro.

### 2.4 Recuperação de Conta

* Caso o usuário esqueça a senha, ele poderá solicitar redefinição por email.
* Link para redefinição expira após um período definido (ex.: 1 hora).

---

## 3. Fluxo do Cadastro

1. Usuário acessa a página de cadastro.
2. Usuário preenche os campos obrigatórios e opcionais.
3. Sistema valida os dados fornecidos:

   * Email válido e não duplicado.
   * Senha atende aos critérios de segurança.
4. Sistema cria o usuário no banco de dados.
5. Sistema envia mensagem de sucesso e opção de login.
6. Usuário agora pode autenticar-se no sistema.

---

## 4. Regras de Negócio

* Apenas usuários cadastrados podem criar ou editar conteúdos e coleções.
* Emails duplicados não são permitidos.
* Senhas devem ser armazenadas de forma segura (hashing, ex.: bcrypt).

---

## 5. Requisitos Técnicos

* **Frontend:** Formulário de cadastro com validação em tempo real.
* **Backend:** API para criar usuário, validação de dados, hashing de senha.
* **Banco de Dados:** Tabela `users` com campos: `id`, `nome`, `email`, `senha_hash`, `foto_perfil`, `biografia`, `data_criacao`.
* **Segurança:** Proteção contra ataques de força bruta e injeção de SQL.
