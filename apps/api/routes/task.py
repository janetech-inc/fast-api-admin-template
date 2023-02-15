
""" Sample CRUD Routes for a Task Model

    Remove or add routes and permissions as needed.

    More info here: 
    https://fastapi.tiangolo.com/


    Created Dec 22, 2022

    Copyright (c) 2023 - JaneTech Inc.
    MIT License
"""


from fastapi import APIRouter, Depends

from api.models.base import PaginatedList, PaginationParams
from api.models.task import Task
from api.models.user  import RegisteredUser


router = APIRouter(
    prefix="/tasks",
    responses={404: {"description": "Not found"}},
)


@router.get("/", 
    response_model=PaginatedList[Task]
)
async def list(params:PaginationParams=PaginationParams()):
    
    return Task.list(params)


@router.post("/", 
    response_model=Task
)
async def create(resource:Task,   _: RegisteredUser = Depends(RegisteredUser.get_current_user)):
    
    return Task.create(resource)


@router.get("/{id}", 
    response_model=Task
)
async def get():
    
    return Task.get(id)


@router.patch("/{id}", 
    response_model=Task
)
async def update(resource:Task,   _: RegisteredUser = Depends(RegisteredUser.get_current_user)):
    
    return Task.update(id, resource)



@router.delete("/{id}", 
    response_model=Task
)
async def delete( _: RegisteredUser = Depends(RegisteredUser.get_current_user)):
    
    return Task.delete(id)


