
""" 
User Model

Replace with your model.

More info here: 
https://fastapi.tiangolo.com/tutorial/security/get-current-user/


Copyright (c) 2023 - JaneTech Inc.
"""

from __future__ import annotations
from pydantic import BaseModel
from fastapi import Depends
from typing import Union, List
from fastapi.security import OAuth2PasswordBearer


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


class RegisteredUser(BaseModel):
    """An Authenticated user."""
    id: str = None
    username: str
    email: Union[str, None] = None
    full_name: Union[str, None] = None
    disabled: Union[bool, None] = None

    roles: List[str] = []


    @classmethod
    def fake_decode_token(cls, token):
        return RegisteredUser(
            username=token + "fakedecoded", email="jane@example.com", full_name="Jane Doe"
        )

    @classmethod
    async def get_current_user(cls, token: str = Depends(oauth2_scheme)):
        return cls.fake_decode_token(token)


    @classmethod
    def get(cls, id:str) -> RegisteredUser:
        """Get a registered user.

        :param id: id of object to retrieve
        :return: object retrieved
        """
        return RegisteredUser()
            