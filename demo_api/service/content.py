from data.storageaccount import content as content



def get_image_bytes(resource_id,page_id) -> str:
    container_name = "images"
    blob_name = f"{resource_id}/{page_id}.png"

    return content.get_image_bytes(container_name,blob_name)