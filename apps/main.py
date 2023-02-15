"""
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@                  #@@@@@@@@@@@
@@@@@@@@@@@@@@@                  #@@@@@@@@@@@
@@@@@@@@@@@@@@@      @@@@@@      #@@@@@@@@@@@
@@@@@@@@@@@@@@@      @@@@@@      #@@@@@@@@@@@
@@@@@@@@@@@@@@@      @@@@@@      #@@@@@@@@@@@
@@@@@@@@@@@@@@@      @@@@@@            P#@@@@
@@@@@@@@@@@@@@@      @@@@@@            P#@@@@
@@@@@@@@@@@@@@P      @@@@@@      #@@@@@@@@@@@
@@@@     :@@@@P     :&@@@@@      #@@@@@@@@@@@
@@@@:     J@@P      Y@@@@@@      #@@@@@@@@@@@
@@@@@             :P@@@@@@@      #@@@@@@@@@@@
@@@@@@@:        :P@@@@@@@@@      #@@@@@@@@@@@
@@@@@@&#G@@@@@G#&@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

Created Dec 22, 2022

Copyright (c) 2023 - JaneTech Inc.
MIT License

"""
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from mangum import Mangum
from rich.logging import RichHandler
import os


import logging

from api.routes import resource, task
from views import admin, home

# Setup logging
logging_level = (os.environ.get("LOG_LEVEL") or "NOTSET").upper()
logging.basicConfig(
    level=logging_level, format="%(message)s", datefmt="[%X]", handlers=[RichHandler()]
)

logger = logging.getLogger()
logger.setLevel(logging_level)

app = FastAPI()

# Add your app routes here

app.include_router(home.router)
app.include_router(resource.router)
app.include_router(task.router)

# Admin routes 
app.include_router(admin.router)


app.mount("/static", StaticFiles(directory="static"), name="static")

def handler(event, context):
    """Lambda handler.
    
    :param event: Lambda event
    :param context: Lambda context

    """

    asgi_handler = Mangum(app)
    return asgi_handler(event, context)


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8080)