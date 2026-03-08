# Documento de Requisitos – Edição e Exclusão de Coleções

## 1. Objetivo

Permitir que usuários autenticados gerenciem coleções que criaram.

---

## 2. Funcionalidades

### 2.1 Edição de Coleção

* Usuário pode editar apenas coleções que criou.
* Campos editáveis:

  * Título
  * Descrição
  * Lista de conteúdos associados
  * Tags

### 2.2 Exclusão de Coleção

* Usuário pode excluir apenas coleções que criou.

---

## 3. Regras de Negócio

* Apenas o criador pode editar ou excluir coleções.
* Conteúdos associados podem ser removidos individualmente sem excluir a coleção.
* Alterações são registradas com data de atualização.

---

## 4. Requisitos Técnicos

* **Frontend:** Formulário de edição com pré-carregamento de dados existentes, botão de exclusão com confirmação.
* **Backend:** API para validação de propriedade e execução de edição ou exclusão.
* **Banco de Dados:** Atualização ou remoção de registros na tabela `collections`.
* **Segurança:** Verificação de propriedade antes de qualquer alteração ou exclusão.
