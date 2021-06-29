from flask import Flask

app = Flask(__name__)


@app.route('/test')
def hello_world():
    return Flask.jsonify({'test': 'Hello World!'})


@app.route('/WeaknessTracker/dns/basic')
def hello_world():
    return Flask.jsonify({'test': 'Hello World!'})


if __name__ == '__main__':
    app.run()
