# Hotel Management System

### Descrição do Projeto

Este projeto é um sistema de gestão de hotelaria que permite aos usuários gerenciar reservas, quartos, hóspedes de maneira eficiente. A aplicação possui uma interface intuitiva, construída com **React** e estilizada usando **SCSS**, garantindo uma experiência de usuário moderna e responsiva. O uso de **TypeScript** oferece maior segurança no código, facilitando a manutenção e escalabilidade do sistema.

### Funcionalidades Principais

- **Gestão de Reservas**: Permite criar, visualizar, editar e cancelar reservas de quartos.
- **Controle de Quartos**: Exibição de disponibilidade de quartos em tempo real, com filtros por tipo de quarto e faixa de preço.
- **Gerenciamento de Quartos**: Registro de todos os quartos adicionados, com detalhes como tipo de quarto, status de disponibilidade e preço por noite.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática ao código, aumentando a confiabilidade e a clareza.
- **SCSS**: Pré-processador CSS que adiciona funcionalidades como variáveis, mixins e aninhamento, facilitando o gerenciamento dos estilos e tornando o código mais modular.

## Estrutura do Projeto

```bash
hotel-management-system/
│
├── public/                 # Arquivos públicos
├── src/                    # Código-fonte
│   ├── components/         # Componentes reutilizáveis
│   ├── pages/              # Páginas da aplicação
│   ├── services/           # Serviços para comunicação com APIs
│   ├── types/              # Armazenar definições de tipos TypeScript.
│   ├── utils/              # Funções utilitárias
│   ├── App.tsx             # Componente raiz da aplicação
│   └── index.tsx           # Ponto de entrada da aplicação
│
├── .gitignore              # Arquivos e pastas ignorados pelo Git
├── package.json            # Dependências e scripts do projeto
├── tsconfig.json           # Configurações do TypeScript
└── README.md               # Documentação do projeto
```

## Instalação
1. Clone o repositório:
```
git clone git@github.com:WilliamNunes905/Projeto-Hotelaria.git
```
2. Navegue até o diretório do projeto:
```
cd Hotel-Management-System
```
3. Instale as dependências:
```
npm install
```
4. Inicie o servidor de desenvolvimento:
```
npm run dev
```


