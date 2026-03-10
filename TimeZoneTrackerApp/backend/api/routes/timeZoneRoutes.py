from flask_restful import Api
from ..controllers.timeZoneController import TimeZoneController

def initialize_routes(api: Api):
    api.add_resource(TimeZoneController, '/timezones/<int:time_zone_id>')