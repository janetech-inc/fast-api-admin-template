""" 
Base Model

Base CRUD and search logic.

For Admin:
Create your own models that extend BaseAdmin. 

For DB:
Add your DB adapters. 


More info here:  asfasf

Copyright (c) 2023 - JaneTech Inc.
"""

from __future__ import annotations
from abc import ABC
from typing import List, Generic, TypeVar
from abc import ABC, abstractmethod
from typing import Any, List, Optional, TypeVar, Generic, Type, ClassVar
from pydantic import BaseModel


from pydantic import BaseModel


T = TypeVar('T', bound=BaseModel)


class PaginationParams(BaseModel):
    """Pagination Params."""

    page: int = 0
    page_size: int = 100
    query: str = ""



class PaginatedList(BaseModel, Generic[T]):
    """A Paginated list object."""

    params: PaginationParams = None
    total:int = 0

    elements:List[T] = []



class Base(BaseModel, ABC):
    """A Base object."""

    @abstractmethod
    def list(cls, pagination_params:PaginationParams) -> PaginatedList[Base]:
        """
        Get a list of objects.

        :param kwargs: query paramaters
        :return: list of objects

        """

        pass
         
    @abstractmethod
    def create(cls, object:Base) -> Base:
        """
        Create an object.

        :param object: object to create
        :return: object created
        """

        pass
         

    @abstractmethod
    def get(cls, id:str) -> Base:
        """
        Get an object.

        :param id: id of object to retrieve
        :return: object retrieved
        """
        pass
         

    @abstractmethod
    def update(cls, id:str, new_object:Base) -> Base:
        """
        Update an object.

        :param id: id of object to retrieve
        :param new_object: object to replace
        :return: object update
        """
         

    @abstractmethod
    def delete(cls, id:str) -> Base:
        """
        Delete an object.

        :param id: id of object to retrieve
        :return: object deleted
        """
         

T = TypeVar('T',  bound=Base)

class BaseAdmin(Base, Generic[T]):
    """A Base admin object."""

    @classmethod
    def list(cls, params:PaginationParams = PaginationParams()) -> PaginatedList[T]:
        """
        Get a list of objects.

        :param kwargs: query paramaters
        :return: list of objects

        """

        return PaginatedList[T](params=params, total=0, elements=[])

    @classmethod     
    def create(cls, data:Base) -> T:
        """
        Create an object.

        :param object: object to create
        :return: object created
        """

        return cls()

    @classmethod     
    def get(cls, id:str) -> T:
        """
        Get an object.

        :param id: id of object to retrieve
        :return: object retrieved
        """

        return cls()
         
    @classmethod
    def update(cls, id:str, data:Base) -> Base:
        """
        Update an object.

        :param id: id of object to retrieve
        :param new_object: object to replace
        :return: object update
        """

        return cls()

    @classmethod
    def delete(cls, id:str) -> Base:
        """
        Delete an object.

        :param id: id of object to retrieve
        :return: object deleted
        """

        return cls()
         
             
    @classmethod
    def get_registered_models(cls) -> List[str]:
        """Get names of register."""

        return [cls for cls in BaseAdmin.__subclasses__()]
    

    @classmethod
    def get_model_statistics(cls) -> dict:
        """Get model statistics."""

        return {}

         
    @classmethod
    def get_fields(cls) -> T:
        """Parse from linkedin api results."""

        pass


         

