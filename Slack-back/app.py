import flask
import NetworkAnalysis

app = flask.Flask(__name__)


@app.route('/')
def hello_world():
    return 'Server up !'


@app.route('/test')
def test():
    return flask.jsonify({'test': 'Hello World!'})


@app.route('/WT/back/networkAnalysis')
def network_analysis_result():
    net_analysis = NetworkAnalysis.NetworkAnalysis()
    return flask.jsonify(net_analysis.network)


if __name__ == '__main__':
    app.run()
