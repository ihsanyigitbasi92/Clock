from flask_restful import Api
from ..controllers.userController import UserController

def initialize_routes(api: Api):
    api.add_resource(UserController, '/users/<int:user_id>')