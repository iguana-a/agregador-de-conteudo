# Documento de Requisitos – Edição, Exclusão e Sugestão de Conteúdo

## 1. Objetivo

Permitir que usuários autenticados gerenciem conteúdos e coleções que criaram, além de permitir que outros usuários sugiram alterações.

---

## 2. Funcionalidades

### 2.1 Edição de Conteúdo

* Usuário pode editar apenas conteúdos que criou.
* Campos editáveis:

  * Título
  * Descrição resumida
  * Corpo do conteúdo (Markdown)
  * Tags
  * Associação a coleções

### 2.2 Sugestão de Edição

* Usuários autenticados podem sugerir alterações em conteúdos que não possuem permissão de edição direta.
* Campos da sugestão:

  * Conteúdo sugerido (Markdown)
  * Comentário explicativo (opcional)
* Autor do conteúdo pode:

  * Aceitar a sugestão, aplicando as alterações ao conteúdo original
  * Rejeitar a sugestão
* Status das sugestões: pendente, aceita, rejeitada
* Histórico de sugestões visível ao autor e ao usuário que sugeriu, com registro de data e autor

### 2.3 Exclusão de Conteúdo

* Usuário pode excluir apenas conteúdos que criou.

### 2.4 Edição de Coleções

* Usuário pode editar coleções que criou.
* Campos editáveis:

  * Título
  * Descrição
  * Lista de conteúdos associados

### 2.5 Exclusão de Coleções

* Usuário pode excluir apenas coleções que criou.

---

## 3. Regras de Negócio

* Apenas o criador pode editar ou excluir conteúdos ou coleções.
* Sugestões não alteram o conteúdo original até serem aceitas pelo autor.
* Conteúdos associados a coleções podem ser removidos individualmente sem excluir a coleção.
* Alterações e sugestões são registradas com data de atualização.

---

## 4. Requisitos Técnicos

* **Frontend:** Formulário de edição com pré-carregamento de dados existentes, painel de sugestões, botão de exclusão com confirmação.
* **Backend:** API para validação de propriedade, criação, listagem, aceitação e rejeição de sugestões, execução de edição ou exclusão.
* **Banco de Dados:** Tabelas `contents`, `collections` e `content_suggestions` (`id`, `content_id`, `user_id`, `suggested_body`, `comment`, `status`, `created_at`, `updated_at`).
* **Segurança:** Verificação de propriedade antes de qualquer alteração ou exclusão; validação de autenticação para criação e gerenciamento de sugestões.
