# Documento de Requisitos – Login de Usuário

## 1. Objetivo

Permitir que usuários autenticados acessem o sistema para criar, editar e gerenciar conteúdos e coleções.

---

## 2. Funcionalidades

### 2.1 Autenticação

* Entrada de **email** e **senha**.
* Validação de credenciais no banco de dados.
* Geração de token JWT ou sessão para usuários autenticados.

### 2.2 Feedback ao Usuário

* Mensagem de erro para credenciais inválidas.
* Mensagem de sucesso ao autenticar.

### 2.3 Recuperação de Senha

* Solicitação de redefinição por email.
* Link de redefinição expira em período definido (ex.: 1 hora).

---

## 3. Regras de Negócio

* Apenas usuários cadastrados podem efetuar login.
* Sessão expira após tempo definido ou logout.
* Bloqueio temporário após múltiplas tentativas de login inválidas.

---

## 4. Requisitos Técnicos

* **Frontend:** Formulário de login com validação em tempo real.
* **Backend:** API para autenticação, geração de token ou sessão.
* **Banco de Dados:** Verificação de email e senha_hash na tabela `users`.
* **Segurança:** Proteção contra ataques de força bruta e injeção de SQL.
* **Autorização:** Tokens ou sessões utilizados para acesso a recursos restritos.
