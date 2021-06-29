import flask

app = flask.Flask(__name__)


@app.route('/')
def hello_world():
    return 'hello world'


@app.route('/test')
def test():
    return flask.jsonify({'test': 'Hello World!'})


if __name__ == '__main__':
    app.run()
