from fastapi import APIRouter
from service import content
from starlette.responses import Response

router = APIRouter(prefix="/content")


@router.get("/image/{resource_id}/{page_id}")
def get_image(resource_id,page_id) -> str:
    return Response(content = content.get_image_bytes(resource_id,page_id)) 