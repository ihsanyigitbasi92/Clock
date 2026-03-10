from sqlalchemy import Column, Integer, String
from ..database import Base

class TimeZoneModel(Base):
    __tablename__ = 'time_zones'

    id = Column(Integer, primary_key=True)
    name = Column(String(80))
    current_time = Column(String(80))

    def json(self):
        return {'id': self.id, 'name': self.name, 'current_time': self.current_time}

    @classmethod
    def find_by_id(cls, _id):
        return cls.query.filter_by(id=_id).first()