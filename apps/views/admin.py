""" 
Admin Views


Copyright (c) 2023 - JaneTech Inc.
"""


from fastapi import APIRouter, Request

from config import Config
import importlib

from api.models.user import RegisteredUser
from api.models.base import BaseAdmin

from fastapi.templating import Jinja2Templates


router = APIRouter(
    prefix="/admin",
)

templates = Jinja2Templates(directory="templates")


@router.get("/")
def index(request: Request):

    models = BaseAdmin.get_registered_models()

    return templates.TemplateResponse("admin/model_list.html", {
        "request": request, 
        "model_names": [model.__name__ for model in models],
        "model_class": models[0],
        "objects": models[0].list(),
        "model_statistics": BaseAdmin.get_model_statistics(),
        "current_user": RegisteredUser(username="test", roles=["admin"]),
        "config":Config()
    })



@router.get("/{model_name}")
def model_list(model_name, request: Request):

        models = BaseAdmin.get_registered_models()
        model_cls = [x for x in models if x.__name__.lower() == model_name.lower()]

        print([x.__name__ for x in models])
        if len(model_cls):

            return templates.TemplateResponse("admin/model_list.html", {
            "request": request, 
            "model_names": [x.__name__ for x in models],
            "model_cls": model_name.title(),
            "objects": model_cls[0].list(),
            "model_statistics": BaseAdmin.get_model_statistics(),
            "current_user": RegisteredUser(username="test", roles=["admin"]),
            "config":Config()
        })


@router.get("/{model}/{id}")
def model_details(request: Request):
    pass