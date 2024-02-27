from pydantic import BaseModel
from typing import List, Optional, Union
from model.resource import Resource 

class AIResults(BaseModel):
    text:str
    ResourceCollection: list[Resource]
