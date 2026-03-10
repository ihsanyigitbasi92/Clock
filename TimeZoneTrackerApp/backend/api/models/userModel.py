from sqlalchemy import Column, Integer, String
from ..database import Base

class UserModel(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True)
    preferences = Column(String(255))

    def json(self):
        return {'id': self.id, 'preferences': self.preferences}

    @classmethod
    def find_by_id(cls, _id):
        return cls.query.filter_by(id=_id).first()