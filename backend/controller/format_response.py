import json
import os
import re
from flask import jsonify
from pandas import DataFrame

API_ENVIRONMENT: str | None = os.getenv(key="ENVIRONMENT")

# MARK: Response Builder
def response_builder(df: DataFrame | None = None) -> str:
    data = df.to_json(orient="records") if df is not None else "Data not found."
    return data

def res_build_dict(data: dict) -> str:
    
    json_data =json.dumps(data)
    #data = data.replace("\"", '"')
    # data = data.replace('\n ', '').replace('\"', '"').replace(' \"', '"')
    # data = data.replace('\"', '"').replace('}\n', '}')
    
    print(json_data)
    return json_data


# "{\n  \"light\": {\n    \"nav\": {\n      \"fg\": \"bg-gray-700\",\n      \"bg\": \"bg-yellow-950\",\n      \"btn\": {\n        \"fg\": \"bg-green-700\",\n        \"bg\": \"bg-gray-700\"\n      }\n    },\n    \"fg\": \"bg-green-600\",\n    \"bg\": \"bg-gray-200\"\n  },\n  \"dark\": {\n    \"nav\": {\n      \"fg\": \"bg-green-600\",\n      \"bg\": \"bg-stone-800\",\n      \"btn\": {\n        \"fg\": \"bg-red-100\",\n        \"bg\": \"bg-stone-900\"\n      }\n    },\n    \"fg\": \"bg-red-100\",\n    \"bg\": \"bg-orange-900\"\n  }\n}"