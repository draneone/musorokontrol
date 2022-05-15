from datetime import datetime
from itertools import count
from urllib import response
from fastapi import FastAPI, Depends, UploadFile, File
from pydantic import BaseModel
from datetime import datetime
from pathlib import Path

from typing import List

DB = []

app = FastAPI()
DIR = 'tmp'

class ItemBase(BaseModel):
    adress: str
    geometry: List 


class ItemResponse(ItemBase):
    type: str
    dateTime: str
    status: List
    img: str

class ItemRequest(ItemBase):
    pass
    


@app.get("/", response_model=List[ItemResponse])
async def root():
    data = [
        ItemResponse(**i)
        for i in DB
    ]
    return data


@app.post("/")
async def trash_save(item: ItemRequest = Depends(), file: UploadFile = File(...)):
    fpath = f'{DIR}/{file.filename}'
    data = item.dict()
    now = datetime.now()
    data['dateTime'] = now.strftime("%d-%m/%Y, %H:%M:%S")
    data['type'] = ''
    data['status'] = []
    data['img'] = fpath 
    with open(fpath, 'wb') as f:
        while content := await file.read(1024):
            f.write(content)
    DB.append(data)
    print(DB)
    return {'status': 'ok'}



