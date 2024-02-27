import json
from pathlib import Path
from typing import List, Optional, Union
import uuid
from langchain.docstore.document import Document
from langchain.document_loaders.base import BaseLoader


class JSONLoader(BaseLoader):
    def __init__(
        self,
        file_path: Union[str, Path],
        content_key: Optional[str] = None,
        ):
        self.file_path = Path(file_path).resolve()
        self._content_key = content_key
        
    def load(self) -> List[Document]:
        """Load and return documents from the JSON file."""

        docs:List[Document]=[]
        # Open JSON file
        with open(self.file_path) as file:
            data = json.load(file)

            #extract the resource (book) information
            resourcetitle = data['title']
            resource_id = data['resource_id']
            pages = data['pages']            

            #iterate through resource pages and create a Document for each page
            for page in pages:
                page_id = page['page_id']
                text = page['body']
                chapter = page['chapter']
                pagenumber = page['page']
                metadata = dict(
                    resource_id = resource_id,
                    page_id = page_id,
                    title=resourcetitle,
                    chapter = chapter,
                    pagenumber = pagenumber
                    )

                docs.append(Document(page_content=text, metadata=metadata))
        
        return docs