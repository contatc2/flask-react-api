from flask import Flask, render_template

app = Flask(__name__,
  static_folder = './public',
  template_folder="./static")

# API routes

@app.route('/api/v1/stores')
def stores():
  file = 'stores.json'
  stores = open(file).read()
  return stores

# View route

@app.route('/')
@app.route('/server')
def index():
  return render_template("index.html")
