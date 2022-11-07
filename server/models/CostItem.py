from pydantic import BaseModel
from typing import Union, Optional


class CostItemModelBase(BaseModel):
    design: Union[int, None] = None
    noofpage: Union[int, None] = None
    content: Union[int, None] = None
    ecommerce: Union[int, None] = None
    profile: Union[bool, None] = False
    schedule: Union[bool, None] = False
    blog: Union[bool, None] = False
    writingcontrol: Union[int, None] = None
    flexibilitycontrol: Union[int, None] = None
    chat: Union[bool, None] = False
    tracking: Union[bool, None] = False
    galary: Union[bool, None] = False
    leadgen: Union[bool, None] = False
    social: Union[bool, None] = False
    search: Union[bool, None] = False


class CostItemCreateModel(CostItemModelBase):
    userid: str


class CostItemUpdateModel(BaseModel):
    design: Union[int, None] = None
    noofpage: Union[int, None] = None
    content: Union[int, None] = None
    ecommerce: Union[int, None] = None
    profile: Union[bool, None] = None
    schedule: Union[bool, None] = None
    blog: Union[bool, None] = None
    writingcontrol: Union[int, None] = None
    flexibilitycontrol: Union[int, None] = None
    chat: Union[bool, None] = None
    tracking: Union[bool, None] = None
    galary: Union[bool, None] = None
    leadgen: Union[bool, None] = None
    social: Union[bool, None] = None
    search: Union[bool, None] = None
    class Config:
        validate_assignment = True


class ResponseSingleCostitem(CostItemModelBase):
    id: str
