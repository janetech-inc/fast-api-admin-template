
""" Sample CRUD Routes for a Resource Model

    Remove or add routes and permissions as needed.

    More info here: 
    https://fastapi.tiangolo.com/


    Created Dec 22, 2022

    Copyright (c) 2023 - JaneTech Inc.
    MIT License
"""


from fastapi import APIRouter, Depends

from config import Config
from api.models.base import PaginatedList, PaginationParams
from api.models.resource import Resource
from api.models.user  import RegisteredUser


router = APIRouter(
    prefix="/resources",
    responses={404: {"description": "Not found"}},
)


@router.get("/", 
    response_model=PaginatedList[Resource]
)
async def list(params:PaginationParams=PaginationParams()):
    
    return Resource.list(params)


@router.post("/", 
    response_model=Resource
)
async def create(resource:Resource,   _: RegisteredUser = Depends(RegisteredUser.get_current_user)):
    
    return Resource.create(resource)


@router.get("/{id}", 
    response_model=Resource
)
async def get(id):
    
    return Resource.get(id)


@router.patch("/{id}", 
    response_model=Resource
)
async def update(id, resource:Resource,   _: RegisteredUser = Depends(RegisteredUser.get_current_user)):
    
    return Resource.update(id, resource)



@router.delete("/{id}", 
    response_model=Resource
)
async def delete(id, _: RegisteredUser = Depends(RegisteredUser.get_current_user)):
    
    return Resource.delete(id)


