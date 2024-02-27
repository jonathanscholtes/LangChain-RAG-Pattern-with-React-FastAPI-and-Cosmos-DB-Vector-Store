# RAG (Retrieval Augmented Generation) Pattern Demo

## Overview
This repository contains a demo showcasing the implementation of the RAG (Retrieval Augmented Generation) pattern using Azure Cosmos DB for MongoDB vCore and LangChain. The RAG pattern combines retrieval-based and generative-based approaches to natural language processing, enhancing text generation capabilities.

![diagram](./images/web%20app%20rag%20demo%20diagram.png)

## Features
- Integration of Azure Cosmos DB for MongoDB vCore as a scalable and fully managed database solution.
- Utilization of LangChain for text processing, enabling retrieval of relevant information and generation of contextually relevant responses.
- Demonstrates how to implement the RAG pattern for enhanced natural language processing tasks.

## Requirements
- Azure subscription for deploying Azure Cosmos DB for MongoDB vCore.
- Python environment with LangChain installed.
- Basic knowledge of MongoDB and natural language processing concepts.

## Usage
1. Follow the steps provided in the README file.

## Steps
1. [Step 1](demo_loader) - Load  Cosmos DB for Mongo DB Vector Store using sample dataset
2. [Step 2](demo_api) - Create FastAPI to integrate LangChain RAG pattern with web front-end.
3. [Step 3](demo_web) - Build the React web front-end to ask 'grounded' questions of your data and view relevant documents. 
4. Follow the setup instructions provided in the README file.
5. Run the demo application and explore the RAG pattern in action.

## License
This project is licensed under the [MIT License](MIT.md), granting permission for commercial and non-commercial use with proper attribution.

## Support
For any questions or issues, please [open an issue](https://github.com/Jscholtes128/LangChain-RAG-Pattern-with-React-FastAPI-and-Cosmos-DB-Vector-Store/issues) on GitHub or reach out to the project maintainers.

## Disclaimer
This demo application is provided for educational and demonstration purposes only. Use at your own risk.
