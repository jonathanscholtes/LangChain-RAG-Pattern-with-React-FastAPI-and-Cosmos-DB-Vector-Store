from os import environ
from demo_api.model.resource import Resource
from .init import client


    
def results_to_model(result:dict) -> Resource:
    return Resource(page_id=result['_additional']['id'],
                        title=result['inBook'][0]['title'],
                        source=f"{result['chapter']}  (page-{result['pageNumber']})",
                        content=result['body'])

    


def get_query(query:str, distance:float=0.6)-> list[Resource]:
    response = (
    client.query
    .get("Page", ["chapter", "body", "pageNumber", "inBook{ ... on Book{title}}"])
    .with_near_text({
        "concepts": [query],
        "distance": distance,
    })
    .with_limit(4)
    .with_additional(["id", "distance"])
    .do()
)

    return [results_to_model(result) for result in response['data']['Get']['Page']]