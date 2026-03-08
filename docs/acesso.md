# Documento de Requisitos – Regras de Acesso

## 1. Objetivo

Definir os níveis de acesso para usuários autenticados e não autenticados no sistema.

---

## 2. Funcionalidades

### 2.1 Usuários Não Autenticados

* Podem visualizar:

  * Conteúdos
  * Coleções
* Não podem:

  * Criar, editar ou excluir conteúdos
  * Criar, editar ou excluir coleções
  * Sugerir alterações em conteúdos

### 2.2 Usuários Autenticados

* Podem:

  * Criar, editar e excluir conteúdos próprios
  * Criar, editar e excluir coleções próprias
  * Sugerir alterações em conteúdos de outros usuários
* Não podem:

  * Editar ou excluir conteúdos ou coleções de outros usuários
  * Aceitar ou rejeitar sugestões de conteúdos que não são seus

### 2.3 Sugestões de Conteúdo

* Apenas usuários autenticados podem criar sugestões
* Apenas o autor do conteúdo pode aceitar ou rejeitar sugestões

---

## 3. Regras de Negócio

* Autenticação é obrigatória para qualquer ação que altere dados do sistema
* Visualização de conteúdos e coleções é pública
* Todas as alterações e sugestões são registradas com data e autor

---

## 4. Requisitos Técnicos

* **Frontend:** Verificação de autenticação antes de permitir ações de criação, edição ou sugestão
* **Backend:** Validação de propriedade e autenticação em todas as rotas de escrita
* **Banco de Dados:** Controle de propriedade em tabelas `users`, `contents`, `collections` e `content_suggestions`
* **Segurança:** Proteção contra acesso não autorizado e alterações indevidas
