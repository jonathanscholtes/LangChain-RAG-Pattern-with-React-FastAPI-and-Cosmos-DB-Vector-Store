from pydantic import BaseModel
from typing import List, Optional, Union

class Resource(BaseModel):
    resource_id: Union[str, None]
    page_id:str
    title:str
    source:str
    content:str