### **Documentação do Projeto: Gerenciamento de Recursos**

#### **Objetivo**
O projeto tem como objetivo implementar um sistema simples de autenticação e gerenciamento de recursos, permitindo que usuários autorizados possam adicionar, atualizar e remover recursos, com os dados sendo armazenados localmente no navegador (usando o `localStorage`).

#### **Funcionalidades**
1. **Autenticação de Usuários**:
   - Através de um formulário de login, onde o usuário deve fornecer um **nome de usuário** e **senha**.
   - Três tipos de usuários estão disponíveis: `funcionario`, `gerente` e `admin`.
   - Após login bem-sucedido, o usuário é redirecionado para a área de gerenciamento de recursos.

2. **Gerenciamento de Recursos**:
   - **Adicionar Recurso**: O usuário pode adicionar um novo recurso, que receberá um **ID único** gerado aleatoriamente (com 8 caracteres alfanuméricos).
   - **Atualizar Recurso**: O usuário pode atualizar o nome de um recurso existente, usando o **ID** do recurso para identificá-lo.
   - **Remover Recurso**: O usuário pode remover um recurso existente, também através do **ID** do recurso.
   - **Listagem de Recursos**: Todos os recursos cadastrados são exibidos em uma lista, com o **ID** e o **nome** do recurso.

3. **Armazenamento Local**:
   - Todos os dados dos recursos são armazenados no `localStorage` do navegador, permitindo persistência dos dados entre as sessões.
   - O `localStorage` mantém os recursos após a atualização da página, garantindo que as mudanças feitas durante a sessão do usuário sejam salvas permanentemente até que sejam removidas manualmente.

#### **Tecnologias Usadas**
- **HTML**: Estrutura básica da página e elementos de formulário.
- **CSS**: Estilos básicos para a formatação da interface e design responsivo.
- **JavaScript**:
  - Manipulação de DOM para a exibição e interação com os recursos.
  - Geração de IDs únicos para os recursos.
  - Armazenamento e recuperação de dados no `localStorage`.

#### **Fluxo de Uso**
1. **Login**:
   - O usuário insere suas credenciais no formulário de login.
   - Se o login for bem-sucedido, ele é redirecionado para a tela de gerenciamento de recursos.
   
2. **Gerenciamento de Recursos**:
   - O usuário pode adicionar, atualizar e remover recursos através de botões e prompts.
   - A lista de recursos é atualizada dinamicamente à medida que as operações são realizadas.

3. **Armazenamento e Recuperação**:
   - Os recursos são salvos no `localStorage` e recuperados quando a página é recarregada.

#### **Exemplo de ID de Recurso**
- IDs gerados: `AB12CD34`, `9X7W3A6Z`, etc. (8 caracteres alfanuméricos).

#### **Estrutura de Arquivos**
- **index.html**: Página principal contendo o formulário de login e área de gerenciamento de recursos.
- **style.css**: Arquivo de estilos CSS para a formatação da interface.
- **script.js**: Arquivo JavaScript contendo a lógica de autenticação, gerenciamento de recursos e manipulação do `localStorage`.

#### **Considerações Finais**
Este projeto proporciona uma maneira simples de gerenciar recursos com controle de acesso e persistência de dados. Ele pode ser expandido para incluir mais funcionalidades, como diferentes tipos de usuários com permissões específicas, um sistema de relatórios ou integração com bancos de dados. 

O armazenamento local foi escolhido para facilitar o desenvolvimento e testes rápidos, mas, para um sistema de produção, seria recomendado usar uma solução de banco de dados.

---

Essa documentação oferece uma visão geral rápida do funcionamento e estrutura do projeto.
