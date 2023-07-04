# Aplicação de React com Flask
Este projeto é uma aplicação desenvolvida utilizando Flask como backend e React como frontend.

## Componentes do projeto
- Servidor em Flask com SocketIO
- Interface Web em React com visualização de logs

## Inicialização da aplicação

### Etapa 1: Clonagem do repositório a partir de HTTPS:
`git clone https://github.com/afonsonavarini/react-with-flask.git`

### Etapa 2: Criação do ambiente virtual python e instalação de dependências:
`python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt`
ou instale as dependências manualmente:
`pip install Flask
pip install flask_socketio`

### Etapa 3: Instalação de dependências do React:
`cd cliente
npm install`

### Etapa 4: Inicialização do ambiente virtual:
`python flask-server/server.py`

### Etapa 5: Inicialização do React:
`cd cliente
npm start`

## Exemplo de execução
- Aplicação inicial
![Aplicação Inicial](https://github.com/afonsonavarini/react-with-flask/assets/63884763/e517489f-1e18-48ae-b71e-3516a6d9bd7b)

- Executando logs
![Executando logs](https://github.com/afonsonavarini/react-with-flask/assets/63884763/47253043-8b2d-4cd9-ac4e-8dfc6e405720)


## Bibliotecas

## Flask
- Flask
- Flask-Socket.io
- Flask-CORS
- Time (nativo)

## React
- React
- Axios
- Socket.io
