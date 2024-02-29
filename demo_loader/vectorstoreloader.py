
from cosmosdbloader import CosmosDBLoader
from blobloader import BlobLoader
import json
import base64


file_names = ['documents/Rocket_Propulsion_Elements_with_images.json','documents/Introduction_To_Rocket_Science_And_Engineering_with_images.json']

file_names += file_names

for file_name in file_names:

    CosmosDBLoader(f"{file_name}").load()

    image_loader = BlobLoader()

    with open(file_name) as file:
        data = json.load(file)

    resource_id = data['resource_id']
    for page in data['pages']:
        
        base64_string = page['image'].replace("b'","").replace("'","")

        # Decode the Base64 string into bytes
        decoded_bytes = base64.b64decode(base64_string)

        image_loader.load_binay_data(decoded_bytes,f"{resource_id}/{page['page_id']}.png","images")
    