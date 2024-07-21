from flask import Flask, jsonify, render_template
from controller.controller import get_my_info, get_themes

app = Flask(__name__)

@app.route("/", methods=["GET"])
def home():
    return "Hello, World!"

@app.route("/my-info")
def my_info():
    return get_my_info()

@app.route("/themes", methods=["GET"])
def themes():
    resp = jsonify(themes)
    resp.headers.add("Access-Control-Allow-Origin", "*")
    return resp

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8009, debug=True)
