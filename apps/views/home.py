
from fastapi import APIRouter, Depends, HTTPException, Request

from config import Config

from api.models.user import RegisteredUser
from api.models.base import PaginationParams
from api.models.resource import Resource

from fastapi.templating import Jinja2Templates


router = APIRouter(
    responses={404: {"description": "Not found"}},
)

templates = Jinja2Templates(directory="templates")


@router.get("/")
def index(request: Request):
    return templates.TemplateResponse("resource/dashboard.html", {
        "request": request, 
        "objects": Resource.list(PaginationParams()),
        "current_user": RegisteredUser(username="test", roles=["admin"]),
        "config":Config()
    })
