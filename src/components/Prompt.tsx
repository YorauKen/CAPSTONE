import { useState } from "react";
import enter from "../assets/enter.svg";
import dummyData from "../assets/dummy.json";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Skeleton } from "./ui/skeleton";
import { toast, ToastContainer } from "react-toastify"; // Importing toast for notifications
import "react-toastify/dist/ReactToastify.css";

const Prompt = () => {
  const [prompt, setPrompt] = useState("");
  const [responseImage, setResponseImage] = useState<string | null>(null);
  const [relatedImages, setRelatedImages] = useState<
    { image: string; title: string; link: string }[]
  >([]);

  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const keywords = ["kurta", "nehru jacket", "indowestern", "sherwani"];

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const promptLower = prompt.toLowerCase();
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
      setLoading1(true);
      // const response = await fetch("/dummy.json");
      // await fetch("http://localhost:8000/generate",{
      //   method:'POST',
      //   headers:{
      //     "Content-Type":"application/json",
      //   },
      //   body:JSON.stringify({prompt}),
      // });

      // if(!response.ok){
      //   throw new Error("Failed to Fetch Image");
      // }
      setTimeout(() => {
        setResponseImage(dummyData.imageUrl);
        setLoading1(false);
      }, 1500);
      // const data = await response.json();
    } catch (error) {
      console.error("Error Fetching the image");
      setResponseImage(null);
    }
  };

  const fetchSimilarImages = async (e: any) => {
    e.preventDefault();
    try {
      setLoading2(true);
      // api call
      setTimeout(() => {
        setRelatedImages(dummyData.relatedImages);
        setLoading2(false);
      }, 2000);
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
          className="relative flex justify-center items-center"
        >
          <input
            className="prompt"
            type="text"
            placeholder="Blue Indowestern for Wedding"
            onChange={(e) => setPrompt(e.target.value)}
            required
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            <img src={enter} alt="enter "></img>
          </button>
        </form>
        <div>
          <ToastContainer position="bottom-center" />
        </div>

        {loading1 && !responseImage && (
          <div className="mt-8 flex justify-center">
            <Card className="max-w-md shadow-lg p-6">
              <CardContent className="p-4">
                <Skeleton className="h-64 w-64 rounded-lg bg-slate-200" />
              </CardContent>
            </Card>
          </div>
        )}

        {responseImage && !loading1 && (
          //
          <div className="mt-8 flex justify-center">
            <Card className="max-w-md shadow-lg p-6">
              <CardContent className="p-4">
                <img
                  src={responseImage}
                  alt="Generated"
                  className="rounded-lg w-full object-contain h-full "
                />
                <button
                  onClick={fetchSimilarImages}
                  className="black_btn mt-3 ml-5"
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
                          <Skeleton className="h-32 w-full rounded-lg bg-slate-200" />
                          <Skeleton className="h-4 w-[250px] bg-muted" />
                          <Skeleton className="h-4 w-[200px] bg-muted" />
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
                            src={item.image}
                            alt={item.title}
                            className="rounded-lg w-full h-48 object-cover mb-2"
                          />
                          <h3 className="text-sm font-medium">{item.title}</h3>
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 text-sm hover:underline"
                          >
                            Visit 
                          </a>
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
