# Documento de Requisitos – Criação de Coleção

## 1. Objetivo

Permitir que usuários autenticados criem coleções de conteúdos no sistema.

---

## 2. Funcionalidades

### 2.1 Criação de Coleção

* Usuário autenticado pode criar coleções.
* Campos obrigatórios:

  * Título
  * Descrição
* Campos opcionais:

  * Lista de conteúdos associados
* Possibilidade de adicionar tags à coleção

### 2.2 Edição de Conteção Inicial

* Usuário pode associar conteúdos já existentes na criação da coleção.
* Conteúdos podem ser reorganizados dentro da coleção.

### 2.3 Visualização

* Coleções criadas ficam visíveis a todos os usuários, mesmo não autenticados.
* Exibição de título, descrição, conteúdos associados e autor da coleção.

---

## 3. Regras de Negócio

* Apenas usuários autenticados podem criar coleções.
* Título da coleção deve ser único por usuário.
* Conteúdos associados podem ser removidos ou reorganizados apenas pelo criador da coleção.

---

## 4. Requisitos Técnicos

* **Frontend:** Formulário de criação de coleção, seleção de conteúdos existentes, campos de título, descrição e tags.
* **Backend:** API para criar coleções, associar conteúdos e retornar coleções criadas.
* **Banco de Dados:** Tabela `collections` com campos: `id`, `user_id`, `title`, `description`, `tags`, `created_at`, `updated_at`; relação com tabela `contents`.
* **Segurança:** Verificação de autenticação antes da criação.
