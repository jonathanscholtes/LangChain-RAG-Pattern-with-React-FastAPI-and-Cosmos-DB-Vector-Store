from .init import blob_service_client
import io
import base64



def get_image_bytes(container_name,blob_name) -> str:
    
    blob_client = blob_service_client.get_blob_client(container=container_name, blob=blob_name)
    stream = io.BytesIO()
    blob_client.download_blob().readinto(stream)

    return "data:image/png;base64," + str(base64.b64encode(stream.getvalue())).replace("b'","").replace("'","")