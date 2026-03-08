# Documento de Requisitos – Criação de Conteúdo

## 1. Objetivo

Permitir que usuários autenticados criem conteúdos em markdown para o sistema.

---

## 2. Funcionalidades

### 2.1 Criação de Conteúdo

* Campos obrigatórios:

  * Título
  * Descrição resumida
  * Corpo do conteúdo (Markdown)
* Campos opcionais:

  * Tags
* Associação a coleções existentes (opcional)

### 2.2 Edição de Conteúdo

* Usuário pode editar apenas conteúdos que criou.
* Atualização de título, descrição, corpo e tags.

### 2.3 Exclusão de Conteúdo

* Usuário pode excluir apenas conteúdos que criou.

### 2.4 Visualização

* Conteúdo acessível a qualquer usuário.
* Renderização de markdown para HTML.

---

## 3. Regras de Negócio

* Apenas usuários autenticados podem criar, editar ou excluir conteúdo.
* Conteúdos devem ter título único dentro do mesmo usuário.
* Tags devem ser opcionais e reutilizáveis.

---

## 4. Requisitos Técnicos

* **Frontend:** Editor de markdown, formulário de criação e edição.
* **Backend:** API para criação, edição, exclusão e listagem de conteúdos.
* **Banco de Dados:** Tabela `contents` com campos: `id`, `user_id`, `title`, `description`, `body`, `tags`, `created_at`, `updated_at`.
* **Segurança:** Validação de propriedade antes de edição ou exclusão.
* **Renderização:** Markdown convertido para HTML no frontend.
