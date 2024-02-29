from data.storageaccount import content as content



def get_image_bytes(resource_id,page_id) -> str:
    blob_name = f"{resource_id}/{page_id}.png"

    return content.get_image_bytes(blob_name)