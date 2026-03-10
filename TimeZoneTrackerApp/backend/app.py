from flask import Flask
from flask_restful import Api
from .api.routes.timeZoneRoutes import initialize_routes as initialize_time_zone_routes
from .api.routes.userRoutes import initialize_routes as initialize_user_routes

app = Flask(__name__)
api = Api(app)

initialize_time_zone_routes(api)
initialize_user_routes(api)

if __name__ == '__main__':
    app.run(debug=True)