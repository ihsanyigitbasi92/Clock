from flask_restful import Resource
from ..models.userModel import UserModel

class UserController(Resource):
    def get(self, user_id):
        user = UserModel.find_by_id(user_id)
        if user:
            return user.json()
        return {'message': 'User not found'}, 404

    def post(self):
        # Logic to create a new user
        pass

    def put(self, user_id):
        # Logic to update user preferences
        pass