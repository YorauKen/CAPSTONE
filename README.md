
# Generative Stylist Assistant for Indian Ethnic wear


## Project Overview
The Generative Stylist Assistant is an AI-powered application that allows users to generate Indian ethnic wear outfits based on textual descriptions. Users can input prompts that describe features such as color, fabric, design type, and type of ethnic wear. The application then generates a visual representation of the outfit and fetches similar products that closely match the generated image, offering a seamless integration of AI-based outfit and product discovery.

## Table of contents
* [Introduction](#introduction)
* [Features](#features)
* [HLD](#hld)
* [Model architecture](#model-architecture)
* [Dataset](#dataset)
* [Results](#results)


## Introduction
The project focuses on creating an AI-based application that helps users design and discover Indian ethnic wear. By describing the outfit using a prompt (e.g., "Golden Sherwani with zari embroidery for Wedding"), the application generates a visual representation of the described outfit and recommends similar products available online.

## Features
* Text-to-Image Generation: Generate images of Indian ethnic wear dresses based on detailed text descriptions.
* Product Recommendation: Fetch and display similar products/outfits that closely match the generated outfit.
* Customization: Users can tailor the description to generate specific designs, colors, and fabrics.

## Open Source Models Used
* [CLIP](https://github.com/openai/CLIP) -   Text and Image Preprocessing
* [GALIP](https://github.com/tobran/GALIP) - CLIP infused model to generate better quality images
* Resnet152

> ##  HLD
![HLD](https://github.com/user-attachments/assets/15d33ebc-7ab3-4fdc-8ae9-84273d3eefef)

> ##  Model Architecture
![image](https://github.com/user-attachments/assets/ffbd2681-652f-4a7c-9fa6-bf42db7852c3)

## Dataset
The project utilizes a custom dataset of Indian ethnic wear, comprising both images and text descriptions. This dataset was curated by collecting publicly accessible data from various open websites.
> The key attributes include:
* Title: The name or type of the outfit.
* Color: The primary colors featured in the outfit.
* Fabric: The material used for the outfit.
* Design Type: Specific design elements like embroidery or patterns.
* Occasion : wedding , reception , religious rituals 
  
## Results
> ### Pista Green Wedding Wear Sherwani For Men Golden,  Pista Green Art Banarasi Silk,  Art Dupion Silk
![generated_image_8](https://github.com/user-attachments/assets/7941ae1b-c121-476f-8515-879ded7ebc89)
> ### Party Wear Indowestern Peach Colour. Peach Silk All Occasion
![generated_image_3](https://github.com/user-attachments/assets/d9e19f3a-16ff-42e7-bb5b-d5e2831bab17)
> ### Indian Kurta For Men's Black Color Ethnic Wedding Party Wear
![generated_image_4](https://github.com/user-attachments/assets/de9aa869-868f-46cf-ab45-08a27db1b8bc)

### Image Retrieval / Similarity matching outputs
![image](https://github.com/user-attachments/assets/b9a0ac16-7f1f-48c1-be22-32f3c93bba42)




