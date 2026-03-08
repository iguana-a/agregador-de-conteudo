# Documento de Requisitos – Agregador de Conteúdo para Estudantes de Tecnologia

## 1. Visão Geral do Sistema

O sistema tem como objetivo oferecer um **agregador de conteúdo** voltado para estudantes da área de tecnologia, permitindo o acesso e a organização de materiais educativos em **markdown**. Usuários poderão visualizar conteúdos e coleções publicadas por outros usuários sem necessidade de cadastro, mas apenas usuários cadastrados poderão criar, editar ou gerenciar conteúdos.

---

## 2. Funcionalidades Principais

### 2.1 Usuários

* **Cadastro:**

  * Campos obrigatórios: nome, email, senha.
  * Validação de email e senha segura (mínimo de 8 caracteres, incluindo números e letras).
* **Login/Logout:**

  * Usuários podem autenticar-se via email e senha.
  * Suporte a recuperação de senha por email.
* **Perfis de Usuário:**

  * Usuário pode visualizar seus próprios conteúdos e coleções.
  * Usuário pode editar seu perfil: nome, foto de perfil e senha.

---

### 2.2 Conteúdos

* **Criação de Conteúdo:**

  * Disponível apenas para usuários logados.
  * Conteúdo escrito em **markdown**.
  * Campos obrigatórios: título, descrição resumida, corpo do conteúdo.
  * Possibilidade de marcar tags (ex.: "JavaScript", "Machine Learning").
* **Edição e Exclusão:**

  * Usuário pode editar ou excluir apenas os conteúdos que criou.
* **Visualização:**

  * Conteúdo acessível por qualquer visitante do site.
  * Renderização de markdown para HTML.

---

### 2.3 Coleções

* **Criação de Coleção:**

  * Disponível apenas para usuários logados.
  * Campos obrigatórios: título, descrição, lista de conteúdos.
* **Visualização:**

  * Coleções podem ser visualizadas por qualquer usuário.
  * Exibição de lista de conteúdos associados à coleção.
* **Edição e Exclusão:**

  * Apenas o criador da coleção pode editar ou excluir.

---

### 2.4 Sistema de Busca e Filtragem

* Buscar conteúdos por título, descrição ou tags.
* Filtrar conteúdos por tags ou data de criação.
* Buscar coleções por título ou tags de conteúdos associados.

---

### 2.5 Regras de Acesso

* Usuários não autenticados: podem **visualizar conteúdos e coleções**, mas não criar ou editar.
* Usuários autenticados: podem criar, editar e excluir seus conteúdos e coleções.

---

### 2.6 Interface

* Página inicial com destaques de coleções e conteúdos recentes.
* Página de perfil com lista de conteúdos e coleções do usuário.
* Editor de markdown para criação e edição de conteúdos.
* Sistema responsivo para dispositivos móveis e desktop.

---

## 3. Requisitos Não Funcionais

* **Segurança:** senhas armazenadas com hashing seguro (ex.: bcrypt).
* **Performance:** carregamento rápido de páginas e conteúdos.
* **Disponibilidade:** uptime mínimo de 99%.
* **Escalabilidade:** permitir crescimento de usuários e conteúdos sem degradação significativa.
* **Backup:** armazenamento seguro e periódicos backups do banco de dados.

---

## 4. Requisitos Técnicos

* **Frontend:** React, Vue ou similar. Renderização de markdown para HTML.
* **Backend:** Node.js, Python ou outra linguagem com suporte a APIs REST.
* **Banco de Dados:** SQL ou NoSQL para armazenar usuários, conteúdos e coleções.
* **Autenticação:** JWT ou sistema baseado em sessão.

