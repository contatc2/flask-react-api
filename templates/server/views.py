from flask import render_template, Blueprint

server_blueprint = Blueprint('server', __name__)

@server_blueprint.route('/')
@server_blueprint.route('/server')
def index():
 return render_template("index.html")
