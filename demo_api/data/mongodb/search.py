from model.resource import Resource
from .init import collection, vector_store
from langchain.docstore.document import Document
from typing import List, Optional, Union




def results_to_model(result:Document) -> Resource:
    return Resource(resource_id = result.metadata["resource_id"],
                        page_id = result.metadata["page_id"],
                        title=result.metadata["title"],
                        source=f"{result.metadata['chapter']}  (page-{result.metadata['pagenumber']})",
                        content=result.page_content)



def similarity_search(query:str)-> tuple[list[Resource], list[Document]]:

    docs = vector_store.similarity_search_with_score(query,4)

    # Cosine Similarity:
    #It measures the cosine of the angle between two vectors in an n-dimensional space.
    #The values of similarity metrics typically range between 0 and 1, with higher values indicating greater similarity between the vectors.
    docs_filters = [doc for doc, score  in docs if score >=.75]

    # List the scores for documents
    for doc, score  in docs:
        print(score)

    # Print number of documents passing score threshold
    print(len(docs_filters))
  
    return [results_to_model(document) for document in docs_filters],docs_filters
  

