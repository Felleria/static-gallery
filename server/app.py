from flask import Flask
from flask_migrate import Migrate
from models import db

# Initialize the Flask app
app = Flask(__name__)

# Set up the database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize db and migrate with the app
db.init_app(app)
migrate = Migrate(app, db)











if __name__ == '__main__':
    app.run(port=5555, debug=True)





if __name__ == '__main__':
    app.run(port=5555, debug=True)