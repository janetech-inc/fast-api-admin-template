from __future__ import annotations

""" 
Sample Model

Replace with your model.

More info here:


Copyright (c) 2023 - JaneTech Inc.
"""

from typing import Any, List, Optional, Union

from .base import BaseAdmin, PaginatedList, PaginationParams

class Resource(BaseAdmin):
    """An example object."""

    id: Optional[str]


    name: str = None
    description: str = None
    active: bool = True
    a_field: str = None
    another_field: int = 1

    @classmethod
    def list(cls, params:PaginationParams = PaginationParams()) -> PaginatedList[Resource]:
        """
        Get a list of objects.

        :param kwargs: query paramaters
        :return: list of objects

        """

        elements = [
            Resource(name="first", description="Nam lectus sem, dignissim eu nulla fermentum", a_field="lorem epsum", active=False),
            Resource(name="third", description="Nam lectus sem, dignissim eu nulla fermentum", a_field="lorem epsum"),
            Resource(name="second", description="Nam lectus sem, dignissim eu nulla fermentum", a_field="lorem epsum"),
        ]

        return PaginatedList[Resource](params=params, total=0, elements=elements)
