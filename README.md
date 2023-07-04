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

![Aplicação inicial]("https://prnt.sc/vB-VYA4e-zkE")
![Envio de logs]("https://prnt.sc/EJ0_iq5QqNfd")

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
