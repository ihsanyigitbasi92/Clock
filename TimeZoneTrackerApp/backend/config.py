import os

class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL', 'sqlite:///time_zone_tracker.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False