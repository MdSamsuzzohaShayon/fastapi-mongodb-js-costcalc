from pydantic import BaseModel
from typing import Union

class CostItemModelBase(BaseModel):
    design: Union[int, None]= None
    noofpage: Union[int, None]= None
    content: Union[int, None]= None
    ecommerce: Union[int, None]= None
    profile: Union[bool, None] = False
    schedule: Union[bool, None] = False
    blog: Union[bool, None] = False
    writingcontrol: Union[int, None]= None
    flexibilitycontrol: Union[int, None]= None
    chat: Union[bool, None] = False
    tracking: Union[bool, None] = False
    galary: Union[bool, None] = False
    leadgen: Union[bool, None] = False
    social: Union[bool, None] = False
    search: Union[bool, None] = False
    



class CostItemCreateModel(CostItemModelBase):
    # userip : str
    pass
    
class CostItemUpdateModel(CostItemModelBase):
    pass



class ResponseSingleCostitem(CostItemModelBase):
    id: str