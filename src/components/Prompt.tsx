import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify"; // Importing toast for notifications
import "react-toastify/dist/ReactToastify.css";
import SelectPrompt from "./SelectPrompt";
import { Button } from "./ui/button";
import { Card, CardContent, CardTitle } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Skeleton } from "./ui/skeleton";



interface RelatedImage {
	title: string;
	image_data: string;
	link: string;
	distance: number;
  }
  
  interface Category {
	imageUrl: string;
	relatedImages: RelatedImage[];
  }

 type CategoryKey = 'sherwani' | 'indowestern' | 'kurta' | 'nehrujacket' ;

  const dummyData: Record<CategoryKey, Category> = {
	sherwani: {
	  imageUrl: "./Blush Pleach silk sherwani with intricate embroidery.png",
	  relatedImages: [ {
      "title": "Wedding Wear Cream Embroidered Sherwani Set Cream Art Silk Cutdana Work,  Thread Work,  Zardosi Work,  Zari Work",
      "image_data": "1718210309-58.jpg",
      "link": "https://www.rajwadi.com/men-sherwanis/wedding-wear-cream-embroidered-sherwani-set-55190",
      "distance": 1.82
    },
    {
      "title": "Silk Brocade Sherwani With Stole - Cream  100% Silk silk brocade",
      "image_data": "1718210219-28.jpg",
      "link": "https://www.tasva.com/products/silk-brocade-sherwani-with-stole",
      "distance": 1.97
    },
    {
      "title": "Pink Embroidered Sherwani Set In Silk Onion Pink,  Pink Art Silk,  Silk",
      "image_data": "1718209141-30.jpg",
      "link": "https://www.rajwadi.com/sherwani/pink-embroidered-sherwani-set-in-silk-44190",
      "distance": 1.97
    },
    {
      "title": "Wedding Wear Cream Embroidered Sherwani Set Cream Art Silk Cutdana Work,  Thread Work,  Zardosi Work,  Zari Work",
      "image_data": "1718210309-58.jpg",
      "link": "https://www.rajwadi.com/sherwani/wedding-wear-cream-embroidered-sherwani-set-55190",
      "distance": 1.82
    },
    {
      "title": "Red Silk Brocade Sherwani",
      "image_data": "1717932860-10.jpg",
      "link": "https://www.tasva.com/products/red-silk-brocade-sherwani",
      "distance": 1.97
    }
    ]
	},
	indowestern: {
	  imageUrl: "Golden Colour Designer Men's Indowestern. Golden Brocade Embroidery,Zardozi,Zari.png",
	  relatedImages: [
      {
        "title": "Peach Silk Indowestern Set With Gotta Pati & Mirror Work Peach Silk mirror work,gota pati work All occasion",
        "image_data": "1720721565-3.jpg",
        "link": "https://shreeman.in/products/peach-silk-indowestern-set-with-gotta-pati-mirror-work",
        "distance": 1.75
      },
      {
        "title": "Green Zari Woven Silk Indo Western For Men Green Banarasi Silk Woven pattern embroidery Engagement, Festival, Wedding",
        "image_data": "p1049mw08.jpg",
        "link": "https://www.parivarceremony.com/green-zari-woven-silk-indo-western-for-men-p1049mw08.html",
        "distance": 1.78
      },
      {
        "title": "Silk beige indowestern for wedding wear beige Silk Resham , Sequins Wedding",
        "image_data": "silk_beige_indowestern_for_wedding_wear_16745622246061_1.jpg",
        "link": "https://g3fashion.com/mens/sherwani-and-indo-western/product/silk-beige-indowestern-for-wedding-wear",
        "distance": 1.82
      },
      {
        "title": "Beige Embroidered Kurta Pajama Set In Jacquard Beige Jacquard Thread Embroidery Festival, Party",
        "image_data": "p1036mw05.jpg",
        "link": "https://www.parivarceremony.com/beige-embroidered-kurta-pajama-set-in-jacquard-p1036mw05.html",
        "distance": 1.84
      },
      {
        "title": "Pista Green Colour Designer Semi Indowestern Kurta Pajama. Pista Green Jacquard, Brocade,Silk Pintux All Occasion",
        "image_data": "prc3069.jpg",
        "link": "https://www.parivarceremony.com/pista-green-colour-designer-semi-indowestern-kurta-pajama.html",
        "distance": 1.84
      }
    ]
	},
	kurta: {
	  imageUrl: "Yellow Solid Cotton Kurta with black pants.png",
	  relatedImages: [
      {
        "title": "Mustard Yellow Classic Short Kurta Color: Mustard Fabric:\r\nLinen DesignType:\r\nPlain",
        "image_data": "215.jpg",
        "link": "https://www.manyavar.com/en-in/kurta/mustard-yellow-classic-short-kurta/UC109177.html",
        "distance": 2.12
      },
      {
        "title": "Embroidered Cotton Kurta in Yellow Yellow Poly Cotton Contemporary, Resham, Sequins Party, Festive",
        "image_data": "embroidered-cotton-kurta-in-yellow-v1-mat568.jpg",
        "link": "https://www.utsavfashion.com/product/embroidered-cotton-kurta-in-yellow-mat568-fh24",
        "distance": 2.19
      },
      {
        "title": "Embroidered Rayon Cotton Kurta in Yellow Yellow Rayon Resham, Sequins, Traditional Festive",
        "image_data": "embroidered-rayon-cotton-kurta-in-yellow-v1-mtr4976.jpg",
        "link": "https://www.utsavfashion.com/product/embroidered-rayon-cotton-kurta-in-yellow-mtr4976-sh24",
        "distance": 2.21
      },
      {
        "title": "Mustard Yellow Self Design Kurta Color: Yellow Fabric:\r\nLinen DesignType:\r\nPrint",
        "image_data": "I02_031022-1-549_03-10-2022-17-28_650x900.jpg",
        "link": "https://www.manyavar.com/en-in/kurta/mustard-yellow-self-design-kurta/UC107225.html",
        "distance": 2.23
      },
      {
        "title": "Embroidered Cotton Kurta in Mustard Yellow Cotton Resham, Sequins, Traditional Festive",
        "image_data": "embroidered-cotton-kurta-in-mustard-v1-msf1880.jpg",
        "link": "https://www.utsavfashion.com/product/embroidered-cotton-kurta-in-mustard-msf1880-sh23",
        "distance": 2.25
      }
    ]
	},
	nehrujacket: {
	  imageUrl: "Woven Satin Silk Jacquard Nehru Jacket in Maroon Red Jacquard Buttons.png",
	  relatedImages: [{
      "title": "Printed Velvet Nehru Jacket in Navy Blue Blue Velvet Buttons, Paisley Print, Traditional Wedding, Festive",
      "image_data": "1730726790-837.jpg",
      "link": "https://www.utsavfashion.com/product/printed-velvet-nehru-jacket-in-navy-blue-mlc2487-sh23",
      "distance": 1.73
    },
    {
      "title": "Solid Color Terry Rayon Nehru Jacket in Maroon Red Rayon Buttons, Plain, Traditional Party, Festive",
      "image_data": "1730728896-1575.jpg",
      "link": "https://www.utsavfashion.com/product/solid-color-terry-rayon-nehru-jacket-in-maroon-mtx1678",
      "distance": 1.79
    },
    {
      "title": "Plain Art Silk Nehru Jacket in Dark Green Green Art Silk Plain, Traditional Festive",
      "image_data": "1730728855-1558.jpg",
      "link": "https://www.utsavfashion.com/product/plain-art-silk-nehru-jacket-in-dark-green-mhg510",
      "distance": 1.8
    },
    {
      "title": "Plain Dupion Silk Nehru Jacket in Beige Beige Dupion Silk Buttons, Traditional Festive",
      "image_data": "1730726203-649.jpg",
      "link": "https://www.utsavfashion.com/product/plain-dupion-silk-nehru-jacket-in-beige-mdw190",
      "distance": 1.81
    },
    {
      "title": "Solid Color Dupion Silk Nehru Jacket in Light Beige Beige Dupion Silk Buttons, Plain, Traditional Wedding, Festive",
      "image_data": "1730725782-513.jpg",
      "link": "https://www.utsavfashion.com/product/solid-color-dupion-silk-nehru-jacket-in-light-beige-mdw1386-fh24",
      "distance": 1.81
    }]
	}
  };
  


const Prompt = () => {
  const [prompt, setPrompt] = useState("");
  const [responseImage, setResponseImage] = useState<string | null>(null);
  const [relatedImages, setRelatedImages] = useState<
    RelatedImage[]
  >([]);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const keywords = ["kurta", "nehrujacket", "indowestern", "sherwani"];

  const normalizePrompt = (input: string): string => {
    // Replace variations in multi-word keywords
    return input.toLowerCase().replace(/\bnehru jacket\b/g, "nehrujacket");
  };
  const extractCategory = (
    prompt: string,
    keywords: string[]
  ): CategoryKey | undefined => {
    const normalizedPrompt = normalizePrompt(prompt);
    for (const keyword of keywords) {
      if (normalizedPrompt.includes(keyword.toLowerCase())) {
        return keyword as CategoryKey;
      }
    }
    return undefined;

  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const promptLower = normalizePrompt(prompt)
    setResponseImage(null);
    setRelatedImages([]);
    const isValid = keywords.some(
      (keyword) => promptLower.includes(keyword.toLowerCase()) // Convert each keyword to lowercase
    );

    if (!isValid) {
      // Show error toast if none of the keywords are found
      toast.error(
        "Please include one of these keywords: Kurta, Nehru Jacket, Indowestern, Sherwani"
      );
      return; // Prevent the form from being submitted
    }
    try {
      const category = extractCategory(prompt, keywords);

      if (!category) {
        toast.error("Unable to extract category from the prompt.");
        return;
      }
      setLoading1(true);
      setTimeout(() => {
        setResponseImage(dummyData[category].imageUrl);
        setLoading1(false);
      }, 2500);
      // const data = await response.json();
    } catch (error) {
      console.error("Error Fetching the image");
      setResponseImage(null);
    }
  };

  const fetchSimilarImages = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // formData.append("category", category);
      const category = extractCategory(prompt, keywords);

      if (!category) {
        toast.error("Unable to extract category from the prompt.");
        return;
      }
      setLoading2(true);
      // api call
      setTimeout(() => {
        setRelatedImages(dummyData[category].relatedImages);
        setLoading2(false);
      }, 2500);
    } catch (error) {
      console.error("Error Fetching the related images");
      setRelatedImages([]);
    }
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full">
        <form
          onSubmit={handleSubmit}
          className="relative flex flex-col gap-4 justify-center items-center"
        >
          <SelectPrompt setPrompt={setPrompt} />
          <Button className="rounded-full" variant={'default'}>Generate</Button>
        </form>
        <div>
          <ToastContainer position="bottom-center" />
        </div>

        {loading1 && !responseImage && (
          <div className="mt-8 flex justify-center">
            <Card className="max-w-md shadow-lg p-6">
              <CardTitle>{prompt}</CardTitle>
              <CardContent className="p-4 flex items-center justify-center ">
                <Skeleton className="h-64 w-64 rounded-lg" />
              </CardContent>
            </Card>
          </div>
        )}

        {responseImage && !loading1 && (
          //
          <div className="mt-8 flex justify-center">
            <Card className="max-w-md shadow-lg p-6">
              <CardTitle className="mx-20">{prompt}</CardTitle>
              <CardContent className="p-4">
                <img
                  src={responseImage}
                  alt="Generated"
                  className="rounded-lg w-full object-contain h-full "
                />
                <button
                  onClick={fetchSimilarImages}
                  className="black_btn mt-3 ml-20"
                >
                  Fetch Related Images
                </button>
              </CardContent>
            </Card>
          </div>
        )}

        {loading2 && relatedImages.length === 0 && (
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-center mb-4">
              Related Outfits
            </h2>
            <Carousel className="w-full max-w-3xl mx-auto">
              <CarouselContent className="-ml-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-1 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-2">
                      <Card>
                        <CardContent className="flex flex-col items-center p-4">
                          <Skeleton className="h-32 w-full rounded-lg" />
                          <Skeleton className="h-4 w-[100px] my-4" />
                          <Skeleton className="h-4 w-[100px]" />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        )}

        {relatedImages.length > 0 && !loading2 && (
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-center mb-4">
              Related Outfits
            </h2>
            <Carousel className="w-full max-w-3xl mx-auto">
              <CarouselContent className="-ml-1">
                {relatedImages.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-1 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-2">
                      <Card>
                        <CardContent className="flex flex-col items-center p-4">
                          <img
                            src={item.image_data}
                            alt={item.title}
                            className="rounded-lg w-full h-48 object-cover mb-2"
                          />
                          <h3 className="text-sm font-medium">{item.title}</h3>
                          <Button type="button" variant={"secondary"} className="black_btn rounded-full my-4" >
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Check Now
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        )}
      </div>
    </section>
  );
};

export default Prompt;
