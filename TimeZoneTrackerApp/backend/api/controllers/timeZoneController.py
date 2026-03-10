from flask_restful import Resource
from ..models.timeZoneModel import TimeZoneModel

class TimeZoneController(Resource):
    def get(self, time_zone_id):
        time_zone = TimeZoneModel.find_by_id(time_zone_id)
        if time_zone:
            return time_zone.json()
        return {'message': 'Time zone not found'}, 404

    def post(self):
        # Logic to add a new time zone
        pass

    def delete(self, time_zone_id):
        # Logic to delete a time zone
        pass