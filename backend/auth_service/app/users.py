import sqlalchemy
from sqlalchemy import Column, String
from sqlalchemy.orm import declarative_base, sessionmaker
from sqlalchemy.exc import NoResultFound

from .models import User, UserInDB
from .config import settings


POSTGRES_URL = f"postgresql://{settings.POSTGRES_USER}:{settings.POSTGRES_PASSWORD}@{settings.POSTGRES_HOST}:{settings.POSTGRES_PORT}/{settings.POSTGRES_DB}"

Base = declarative_base()


class UserTable(Base):
    __tablename__ = "users"
    username = Column(String, primary_key=True, index=True)
    full_name = Column(String)
    hashed_password = Column(String)


engine = sqlalchemy.create_engine(POSTGRES_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Create the table if it doesn't exist
Base.metadata.create_all(bind=engine)


def get_user_by_username(username: str):
    session = SessionLocal()
    try:
        user = session.query(UserTable).filter(UserTable.username == username).one()
        return UserInDB(
            username=user.username,
            full_name=user.full_name,
            hashed_password=user.hashed_password,
        )
    except NoResultFound:
        return None
    finally:
        session.close()


def save_user(user: UserInDB):
    session = SessionLocal()
    db_user = UserTable(
        username=user.username,
        full_name=user.full_name,
        hashed_password=user.hashed_password,
    )
    session.merge(db_user)
    session.commit()
    session.close()
