from __future__ import annotations

""" 
Sample Model

Replace with your model.

More info here:


Copyright (c) 2023 - JaneTech Inc.
"""

from typing import Optional
from .base import BaseAdmin, PaginatedList, PaginationParams
from .base import BaseAdmin

class Task(BaseAdmin):
    """An example object."""

    id: Optional[str]


    name: str = None
    description: str = None


    @classmethod
    def list(cls, params:PaginationParams = PaginationParams()) -> PaginatedList[Task]:
        """
        Get a list of objects.

        :param kwargs: query paramaters
        :return: list of objects

        """

        elements = [
            Task(name="first", description="lorem epsum", active=False),
            Task(name="third", description="lorem epsum"),
            Task(name="second", description="lorem epsum"),
        ]

        return PaginatedList[Task](params=params, total=0, elements=elements)
