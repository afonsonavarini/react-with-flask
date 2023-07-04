
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_socketio import SocketIO
import time

app = Flask(__name__)
CORS(app)
socketio = SocketIO(app, cors_allowed_origins="*")

class TaskRunner:

    logs = {}

    def start(self, parameters):
        msg = "Executing..."
        socketio.emit('log', {'message': msg}, namespace='/')
        time.sleep(2)
        socketio.emit('log', {'message': f"Done! Received: {parameters['parametros']}"}, namespace='/')

@app.route('/start', methods=['POST'])
def start_task():
    task_runner = TaskRunner()
    received_params = request.json
    task_runner.start(received_params)
    return jsonify({'status': 'Task started'})

if __name__ == '__main__':
    print('startou')
    socketio.run(app, debug=True)
