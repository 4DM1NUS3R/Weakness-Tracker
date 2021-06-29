from flask import Flask

app = Flask(__name__)


@app.route('/test')
def hello_world():
    return Flask.jsonify({'test': 'Hello World!'})
<<<<<<< HEAD


@app.route('/WeaknessTracker/dns/basic')
def hello_world():
    return Flask.jsonify({'test': 'Hello World!'})
=======
>>>>>>> parent of 2af96b2 (jsondrdt)


if __name__ == '__main__':
    app.run()
