import motor.motor_asyncio
from dotenv import load_dotenv
import os

load_dotenv()
# print(os.environ['MONGO_URI'])


client = motor.motor_asyncio.AsyncIOMotorClient(os.environ["MONGO_URI"])
database = client.costitemdb
costitem_collection = database.costitem



