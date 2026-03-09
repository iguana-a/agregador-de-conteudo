# Documento de Requisitos – Edição, Exclusão e Sugestão de Conteúdo

## 1. Objetivo

Permitir que usuários autenticados gerenciem conteúdos e coleções que criaram.

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

### 2.2 Exclusão de Conteúdo

* Usuário pode excluir apenas conteúdos que criou.

### 2.3 Edição de Coleções

* Usuário pode editar coleções que criou.
* Campos editáveis:

  * Título
  * Descrição
  * Lista de conteúdos associados

### 2.4 Exclusão de Coleções

* Usuário pode excluir apenas coleções que criou.

---

## 3. Regras de Negócio

* Apenas o criador pode editar ou excluir conteúdos ou coleções.
* Conteúdos associados a coleções podem ser removidos individualmente sem excluir a coleção.
* Alterações são registradas com data de atualização.

---

## 4. Requisitos Técnicos

* **Frontend:** Formulário de edição com pré-carregamento de dados existentes, painel de sugestões, botão de exclusão com confirmação.
* **Backend:** API para validação de propriedade, criação, listagem, aceitação e rejeição de sugestões, execução de edição ou exclusão.
* **Banco de Dados:** Tabelas `contents`e `collections`.
* **Segurança:** Verificação de propriedade antes de qualquer alteração ou exclusão e validação de autenticação para criação.
