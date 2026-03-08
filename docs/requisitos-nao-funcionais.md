# Documento de Requisitos – Requisitos Não Funcionais

## 1. Objetivo

Definir critérios de qualidade, desempenho e restrições que não estão diretamente relacionados às funcionalidades do sistema.

---

## 2. Requisitos

### 2.1 Segurança

* Senhas armazenadas com hashing seguro (ex.: bcrypt)
* Proteção contra injeção de SQL e ataques de força bruta
* Autenticação obrigatória para qualquer ação que altere dados

### 2.2 Performance

* Carregamento rápido de páginas e conteúdos
* Resposta da API em tempo aceitável (< 300ms para consultas simples)
* Suporte a múltiplos usuários simultâneos

### 2.3 Disponibilidade

* Uptime mínimo de 99%
* Sistema tolerante a falhas, com logs de erros

### 2.4 Escalabilidade

* Capacidade de aumentar usuários e volume de conteúdos sem degradação significativa
* Banco de dados preparado para crescimento de dados

### 2.5 Backup e Recuperação

* Backups periódicos do banco de dados
* Procedimentos de restauração em caso de falha ou perda de dados

### 2.6 Usabilidade

* Interface intuitiva e consistente
* Responsividade para desktops, tablets e dispositivos móveis
* Feedback claro ao usuário em todas as ações

### 2.7 Manutenibilidade

* Código modular e documentado
* Estrutura de banco de dados organizada para facilitar alterações futuras

### 2.8 Compatibilidade

* Navegadores suportados: Chrome, Firefox, Edge, Safari
* Suporte a dispositivos móveis e desktop

---

## 3. Regras de Negócio

* Todos os requisitos não funcionais devem ser atendidos para garantir qualidade e confiabilidade do sistema
* Monitoramento constante para manutenção de performance e segurança

---

## 4. Requisitos Técnicos

* **Frontend:** Componentes reutilizáveis, otimização de carregamento, validação de inputs
* **Backend:** APIs otimizadas, logs de erros, monitoramento de performance
* **Banco de Dados:** Índices, consultas otimizadas, backup automático
* **Segurança:** Protocolos HTTPS, autenticação JWT ou sessão, proteção contra ataques comuns
