from fastapi import FastAPI, HTTPException, status
from fastapi.responses import JSONResponse
from bson import ObjectId, json_util
import json
from typing import List

from dotenv import load_dotenv
from models.CostItem import CostItemCreateModel, ResponseSingleCostitem, CostItemUpdateModel
from config.database import costitem_collection

load_dotenv()
app = FastAPI()


@app.get('/api/test')
def test_api():
    return {'msg': 'Testing application'}


# Get all cost item list
@app.post('/api/costitem/add', response_model=ResponseSingleCostitem)
async def costitem_add(costitem: CostItemCreateModel):
    try:
        costitem_dict = costitem.dict()
        new_costitem = await costitem_collection.insert_one(costitem_dict)
        print(costitem)
        # print(new_costitem.inserted_id)
        objectId = new_costitem.inserted_id
        costitem_dict['id'] = str(objectId)
        return costitem_dict
    except Exception as e:
        print(e)
        raise HTTPException(status_code=status.HTTP_406_NOT_ACCEPTABLE, detail='Can not add an Item')


@app.get('/api/costitem/single/{costitemId}', response_model=ResponseSingleCostitem, response_model_exclude_none=True)
async def costitem_single(costitemId: str):
    try:
        find_single_costitem = await costitem_collection.find_one({"_id": ObjectId(costitemId)})
        # if find_single_costitem is not None:
        #     find_single_costitem['_id'] = str(find_single_costitem['_id'])
        #     return JSONResponse(find_single_costitem, status_code=status.HTTP_200_OK)
        # else:
        #     return JSONResponse(status_code=status.HTTP_404_NOT_FOUND)

        find_single_costitem['id'] = str(find_single_costitem['_id'])
        # print(find_single_costitem)
        return json.loads(json_util.dumps(find_single_costitem))
    except Exception as e:
        print(e)
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR)

@app.get('/api/costitem/all', response_model=List[ResponseSingleCostitem], response_model_exclude_none=True)
async def costitem_all():
    try:
        find_all_costitem = await costitem_collection.find().to_list(1000)
        new_find_all_costitem = []
        if len(find_all_costitem) > 0:
            i = 0
            while (i < len(find_all_costitem)):
                new_single_costitem = find_all_costitem[i]
                new_single_costitem['id'] = str(new_single_costitem['_id'])
                new_find_all_costitem.append(new_single_costitem)
                i += 1
        # print(new_find_all_costitem)
        return new_find_all_costitem
    except Exception as e:
        print(e)
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR)


@app.get('/api/costitem/user/{userip}', response_model=List[ResponseSingleCostitem], response_model_exclude_none=True)
async def costitem_of_a_user(userip: str):
    try:
        find_all_costitem = await costitem_collection.find({"userip": userip}).to_list(1000)
        new_find_all_costitem = []
        if len(find_all_costitem) > 0:
            i = 0
            while (i < len(find_all_costitem)):
                new_single_costitem = find_all_costitem[i]
                new_single_costitem['id'] = str(new_single_costitem['_id'])
                new_find_all_costitem.append(new_single_costitem)
                i += 1
        # print(new_find_all_costitem)
        return new_find_all_costitem
    except Exception as e:
        print(e)
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR)


@app.put('/api/costitem/update/{costitemId}', response_model=ResponseSingleCostitem)
async def costitem_update(costitemId: str, update_costitem: CostItemUpdateModel):
    try:
        # costitem = {k: v for k, v in update_costitem.dict().items() if v is not None}
        update_result = await costitem_collection.update_one({"_id": ObjectId(costitemId)}, {"$set": update_costitem.dict()})
        find_single_costitem = await costitem_collection.find_one({"_id": ObjectId(costitemId)})
        find_single_costitem['id'] = str(find_single_costitem['_id'])
        return json.loads(json_util.dumps(find_single_costitem))
    except Exception as e:
        print(e)
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR)


@app.delete('/api/costitem/delete/{costitemId}')
async def costitem_delete(costitemId: str):
    try:
        deleted_item = await costitem_collection.delete_one({"_id": ObjectId(costitemId)})
        # print(deleted_item.deleted_count)
        # # return JSONResponse( content="Deleted successfully", status_code=status.HTTP_204_NO_CONTENT)
        return JSONResponse(content={'detail' : 'Deleted succssfully'}, status_code=status.HTTP_202_ACCEPTED)
        # return "Deleted successfully"
    except Exception as e:
        print(e)
        raise HTTPException( status_code=status.HTTP_500_INTERNAL_SERVER_ERROR)