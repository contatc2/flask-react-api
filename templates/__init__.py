from flask import Flask

app = Flask(__name__,
  static_folder = './public',
  template_folder="./static")

from templates.server.views import server_blueprint
# register the blueprints
app.register_blueprint(server_blueprint)
